package semantic.generator;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.type.ClassOrInterfaceType;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.CombinedTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.JavaParserTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver;
import semantic.object.Domain;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

//this domain builder should be a finite state engine
//best effort to build domain based on files found
public class DomainBuilder {

    private File javaSourceDirectory;

    public DomainBuilder(File javaSourceDirectory) {
        this.javaSourceDirectory = javaSourceDirectory;
    }

    public CompilationUnit createRoot(File javaFile) throws FileNotFoundException {
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
        Domain.Root root = new Domain.Root();

    }

    private List<CompilationUnit> findImplicitRootDomains(List<CompilationUnit> compilationUnits) {
        if (compilationUnits.size()==1){
            return compilationUnits;
        }

        TypeSolver typeSolver = new CombinedTypeSolver(new ReflectionTypeSolver(),
                new JavaParserTypeSolver(javaSourceDirectory));


        return compilationUnits;
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
