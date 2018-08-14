package semantic.generator;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.Node;
import com.github.javaparser.ast.NodeList;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.body.VariableDeclarator;
import com.github.javaparser.ast.type.ClassOrInterfaceType;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;
import com.github.javaparser.resolution.declarations.ResolvedReferenceTypeDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparser.Navigator;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.CombinedTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.JavaParserTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver;
import semantic.object.Domain;
import semantic.object.FieldType;
import semantic.object.RootType;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;

//this domain builder should be a finite state engine
//best effort to build domain based on files found
public class DomainBuilder {

    private final static Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());


    private CombinedTypeSolver combinedSolver;

    private Map<CompilationUnit, Domain.Root> processedRoots;

    public DomainBuilder(File javaSourceDirectory) {
        TypeSolver reflectionTypeSolver = new ReflectionTypeSolver();
        TypeSolver javaParserTypeSolver = new JavaParserTypeSolver(javaSourceDirectory);
        reflectionTypeSolver.setParent(reflectionTypeSolver);
        combinedSolver = new CombinedTypeSolver();
        combinedSolver.add(reflectionTypeSolver);
        combinedSolver.add(javaParserTypeSolver);
        processedRoots = new HashMap<>();
    }

    public CompilationUnit createCompilationUnit(File javaFile) throws FileNotFoundException {
        FileInputStream in = new FileInputStream(javaFile);
        CompilationUnit cu = JavaParser.parse(in);
        return cu;
    }

    public Domain createDomain(List<CompilationUnit> compilationUnits){
        Domain domain = new Domain();
        if (isExplicit(compilationUnits)){
            createExplicitDomain(domain, compilationUnits);
        } else {
            createImplicitDomain(domain, compilationUnits);
        }
        return domain;
    }

    private void createImplicitDomain(Domain domain, List<CompilationUnit> compilationUnits) {
        List<CompilationUnit> rootDomains = findImplicitRootDomains(compilationUnits);
        if (rootDomains.size()>0){
            List<Domain.Root> roots = rootDomains.stream().map(this::toDomain).collect(Collectors.toList());
            domain.roots.addAll(roots);
        }
    }

    private Domain.Root toDomain(CompilationUnit compilationUnit) {
        LOGGER.info(compilationUnit.toString());
        Domain.Root root = new Domain.Root();
        root.name = compilationUnit.getType(0).getName().asString();
        root.type = RootType.top_level;
        root.view = createView(compilationUnit);
        processedRoots.put(compilationUnit, root);
        return root;
    }

    private Domain.Root.View createView(CompilationUnit compilationUnit) {
        Domain.Root.View view = new Domain.Root.View();
        List<FieldDeclaration> fieldDeclarations = compilationUnit.findAll(FieldDeclaration.class);
        fieldDeclarations.forEach(
                fieldDeclaration->{
                    view.fields.add(createField(fieldDeclaration));
                });
        return view;
    }

    private Domain.Root.Field createField(FieldDeclaration fieldDeclaration) {
        Domain.Root.Field field = new Domain.Root.Field();
        ResolvedType resolvedType = JavaParserFacade.get(combinedSolver).convertToUsage(fieldDeclaration.getVariables().get(0).getType(), fieldDeclaration);
        field.name = fieldDeclaration.getVariable(0).getNameAsString();
        field.type = resolvedType.asReferenceType().getQualifiedName().equals("java.lang.String")
                ? FieldType.text
                : resolvedType.asReferenceType().getQualifiedName().equals("java.lang.Boolean")
                    ? FieldType.choice
                    : FieldType.data;
        return field;
    }


    private static void showReferenceTypeDeclaration(ResolvedReferenceTypeDeclaration resolvedReferenceTypeDeclaration){
        System.out.println(String.format("== %s ==",
                resolvedReferenceTypeDeclaration.getQualifiedName()));
        System.out.println(" fields:");
        resolvedReferenceTypeDeclaration.getAllFields().forEach(f ->
                System.out.println(String.format("%s %s", f.getType(), f.getName())));
        System.out.println(" methods:");
        resolvedReferenceTypeDeclaration.getAllMethods().forEach(m ->
                System.out.println(String.format("%s", m.getQualifiedSignature())));
        System.out.println();
    }

    private List<CompilationUnit> findImplicitRootDomains(List<CompilationUnit> compilationUnits) {
        if (compilationUnits.size()==1){
            return compilationUnits;
        }
        if (compilationUnits.stream().anyMatch(cu -> !cu.getPackageDeclaration().isPresent())){
            return compilationUnits.stream().filter(cu -> cu.getPackageDeclaration().isPresent()).collect(Collectors.toList());
        } else {
            for (int i = 1; ;i++){
                final int curr = i;
                if (compilationUnits.stream().anyMatch(cu -> cu.getPackageDeclaration().toString().split(".").length == curr)){
                    return compilationUnits.stream().filter(cu -> cu.getPackageDeclaration().toString().split(".").length == curr).collect(Collectors.toList());
                }
            }
        }
    }

    private void createExplicitDomain(Domain domain, List<CompilationUnit> compilationUnits) {

    }

    private boolean isExplicit(List<CompilationUnit> compilationUnits) {
        boolean hasDomainAnnotation = false;
        for (CompilationUnit compilationUnit : compilationUnits){
            try {
                if (compilationUnit.getType(0)
                        .asTypeDeclaration()
                        .getAnnotations()
                        .toString().contains("domain")){
                    hasDomainAnnotation = true;
                }
            } catch (IndexOutOfBoundsException ex){
                System.out.println(compilationUnit.toString());
            }
        }
        return hasDomainAnnotation;
    }

    private static class MethodVisitor extends VoidVisitorAdapter<Domain.Root> {
        @Override
        public void visit(MethodDeclaration n, Domain.Root arg) {
            /* here you can access the attributes of the method.
             this method will be called for all methods in this
             CompilationUnit, including inner class methods */
            System.out.println(n.getName());
            System.out.println(n.getAnnotations());
            super.visit(n, arg);
        }
    }

    private static class ExplicitnessCheck extends VoidVisitorAdapter<Void> {
        @Override
        public void visit(ClassOrInterfaceType classOrInterfaceType, Void arg) {
            System.out.println(classOrInterfaceType.getName());
            System.out.println(classOrInterfaceType.getAnnotations());
            super.visit(classOrInterfaceType, arg);
        }
    }
}
