package object.build.domain.root;

import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import object.build.DomainBuilder;
import object.build.domain.Root;

import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import object.build.domain.root.field.FieldType;

public interface build {
    Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    default Root build(DomainBuilder domainBuilder, CompilationUnit compilationUnit, RootType rootType, Root parent){
        if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)){
            LOGGER.info("flattening 1");
            Root root = domainBuilder.getProcessedRoots().get(compilationUnit);
            root.roots.clear();
            return root;
        }
        Root root = new Root();
        domainBuilder.getProcessedRoots().put(compilationUnit,root);
        root.type = compilationUnit.getType(0).getName().asString();
        root.rootType = rootType;
        root.parent = parent;
        List<FieldDeclaration> fieldDeclarations = compilationUnit.findAll(FieldDeclaration.class);

        List<MethodDeclaration> methodDeclarations = compilationUnit.findAll(MethodDeclaration.class);

        Map<Field, FieldDeclaration> processedFields = fieldDeclarations.stream()
                .collect(Collectors.toMap(fieldDeclaration -> new object.build.domain.root.field.build() {}
                        .build(domainBuilder, fieldDeclaration, root), fieldDeclaration -> fieldDeclaration));

        root.fields.addAll(processedFields.keySet().stream()
                .filter(field -> !field.fieldType.equals(FieldType.unknown))
                .collect(Collectors.toList()));

        root.roots.addAll(processedFields.keySet().stream()
                .filter(field -> field.fieldType.equals(FieldType.unknown))
                .map(field -> new object.build.domain.root.build(){}
                        .build(domainBuilder, processedFields.get(field), RootType.nested, root))
                .collect(Collectors.toList()));

        root.events.addAll(methodDeclarations.stream()
                .map(methodDeclaration -> new object.build.domain.root.event.build(){}
                        .build(domainBuilder,methodDeclaration, root))
                .collect(Collectors.toList()));


        return root;
    }

    default Root build(DomainBuilder domainBuilder, FieldDeclaration field, RootType rootType, Root parent){
        CompilationUnit compilationUnit = domainBuilder.findCompilationUnitForFieldDeclaration(field);
        if (compilationUnit!=null) {
            if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)) {
                LOGGER.info("flattening 2 1 " +domainBuilder.getProcessedRoots());
                Root root = domainBuilder.getProcessedRoots().get(compilationUnit);
                LOGGER.info("flattening 2 " +root.type);
                root.roots.clear();
                return root;
            }
            return build(domainBuilder,compilationUnit, rootType, parent);
        }
        return null;
    }

}
