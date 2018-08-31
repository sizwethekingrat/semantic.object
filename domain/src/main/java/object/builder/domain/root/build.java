package object.builder.domain.root;

import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import object.builder.DomainBuilder;
import object.builder.domain.Root;

import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import object.builder.domain.root.field.Type;

public interface build {
    Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    default Root build(DomainBuilder domainBuilder, CompilationUnit compilationUnit, object.builder.domain.root.Type rootType){
        if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)){
            LOGGER.info("flattening 1");
            Root root = domainBuilder.getProcessedRoots().get(compilationUnit);
            root.roots.clear();
            return root;
        }
        Root root = new Root();
        domainBuilder.getProcessedRoots().put(compilationUnit,root);
        root.name = compilationUnit.getType(0).getName().asString();
        root.type = rootType;
        List<FieldDeclaration> fieldDeclarations = compilationUnit.findAll(FieldDeclaration.class);

        List<MethodDeclaration> methodDeclarations = compilationUnit.findAll(MethodDeclaration.class);

        Map<Field, FieldDeclaration> processedFields = fieldDeclarations.stream()
                .collect(Collectors.toMap(fieldDeclaration -> new object.builder.domain.root.field.build() {}
                        .build(domainBuilder, fieldDeclaration), fieldDeclaration -> fieldDeclaration));

        root.fields.addAll(processedFields.keySet().stream()
                .filter(field -> !field.type.equals(Type.unknown))
                .collect(Collectors.toList()));

        root.roots.addAll(processedFields.keySet().stream()
                .filter(field -> field.type.equals(Type.unknown))
                .map(field -> new object.builder.domain.root.build(){}
                        .build(domainBuilder, processedFields.get(field), object.builder.domain.root.Type.nested))
                .collect(Collectors.toList()));

        root.events.addAll(methodDeclarations.stream()
                .map(methodDeclaration -> new object.builder.domain.root.event.build(){}
                        .build(domainBuilder,methodDeclaration))
                .collect(Collectors.toList()));


        return root;
    }

    default Root build(DomainBuilder domainBuilder, FieldDeclaration field, object.builder.domain.root.Type rootType){
        CompilationUnit compilationUnit = domainBuilder.findCompilationUnitForFieldDeclaration(field);
        if (compilationUnit!=null) {
            if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)) {
                LOGGER.info("flattening 2 1 " +domainBuilder.getProcessedRoots());
                Root root = domainBuilder.getProcessedRoots().get(compilationUnit);
                LOGGER.info("flattening 2 " +root.name);
                root.roots.clear();
                return null;
            }
            return build(domainBuilder,compilationUnit, rootType);
        }
        return null;
    }

}
