package object.builder.domain.root.view;

import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import object.builder.DomainBuilder;
import object.builder.domain.root.View;
import object.builder.domain.root.view.field.Type;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public interface build {

    default View build(DomainBuilder domainBuilder, CompilationUnit compilationUnit){
        View view = new View();
        List<FieldDeclaration> fieldDeclarations = compilationUnit.findAll(FieldDeclaration.class);

        List<MethodDeclaration> methodDeclarations = compilationUnit.findAll(MethodDeclaration.class);

        Map<Field, FieldDeclaration> processedFields = fieldDeclarations.stream()
                .collect(Collectors.toMap(fieldDeclaration -> new object.builder.domain.root.view.field.build() {}
                .build(domainBuilder, fieldDeclaration), fieldDeclaration -> fieldDeclaration));

        view.fields.addAll(processedFields.keySet().stream()
                .filter(field -> !field.type.equals(Type.unknown))
                .collect(Collectors.toList()));

        view.roots.addAll(processedFields.keySet().stream()
                .filter(field -> field.type.equals(Type.unknown))
                .map(field -> new object.builder.domain.root.build(){}
                .build(domainBuilder,processedFields.get(field), object.builder.domain.root.Type.nested))
                .collect(Collectors.toList()));

        view.events.addAll(methodDeclarations.stream()
                .map(methodDeclaration -> new object.builder.domain.root.view.event.build(){}
                .build(domainBuilder,methodDeclaration))
                .collect(Collectors.toList()));

        return view;
    }
}
