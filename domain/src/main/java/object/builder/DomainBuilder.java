package object.builder;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.CombinedTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.JavaParserTypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver;
import object.builder.domain.build;
import object.builder.domain.Root;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;

//this domain builder should be a finite state engine
//best effort to build domain based on files found
public class DomainBuilder implements build {

    private final static Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    private CombinedTypeSolver combinedSolver;

    private Map<CompilationUnit, Root> processedRoots;

    private List<CompilationUnit> compilationUnits;

    public void initialise(List<String> javaSourceDirectories) {
        TypeSolver reflectionTypeSolver = new ReflectionTypeSolver();
        reflectionTypeSolver.setParent(reflectionTypeSolver);
        combinedSolver = new CombinedTypeSolver();
        combinedSolver.add(reflectionTypeSolver);
        javaSourceDirectories.forEach(javaSourceDirectoryString -> {
            File javaSourceDirectory = new File(javaSourceDirectoryString);
            LOGGER.info("Loading Source Files:" + javaSourceDirectory.getAbsolutePath());
            TypeSolver javaParserTypeSolver = new JavaParserTypeSolver(javaSourceDirectory);
            combinedSolver.add(javaParserTypeSolver);
        });
        processedRoots = new HashMap<>();
        compilationUnits = new ArrayList<>();
    }

    public CompilationUnit createCompilationUnit(File javaFile) throws FileNotFoundException {
        FileInputStream in = new FileInputStream(javaFile);
        CompilationUnit cu = JavaParser.parse(in);
        compilationUnits.add(cu);
        return cu;
    }

    public List<CompilationUnit> findImplicitRootDomains(List<CompilationUnit> compilationUnits) {
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

    public TypeSolver getTypeSolver() {
        return combinedSolver;
    }

    public Map<CompilationUnit, Root> getProcessedRoots() {
        return processedRoots;
    }

    public CompilationUnit findCompilationUnitForFieldDeclaration(FieldDeclaration field) {
        compilationUnits.forEach(compilationUnit -> LOGGER.info("CUs: "+ compilationUnit.getType(0).getName().asString()));
        ResolvedType resolvedType = JavaParserFacade.get(getTypeSolver()).convertToUsage(field.getVariables().get(0).getType(), field);
        LOGGER.info("Current Field: "+ resolvedType.asReferenceType().getQualifiedName());
        return compilationUnits.stream()
                .filter(cu -> cu.getType(0).getName().asString().equals(resolvedType.asReferenceType().getQualifiedName()))
                .collect(Collectors.reducing((a, b) -> null)).get();
    }
}
