package object.build.domain.root.field;

import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import object.build.DomainBuilder;
import object.build.domain.Root;
import object.build.domain.root.Field;

import java.util.logging.Logger;

public interface build {
    Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    default Field build(DomainBuilder domainBuilder, FieldDeclaration fieldDeclaration, Root parent) {
        Field field = new Field();
        ResolvedType resolvedType = JavaParserFacade.get(domainBuilder.getTypeSolver()).convertToUsage(fieldDeclaration.getVariables().get(0).getType(), fieldDeclaration);
        field.parent = parent;
        field.type = fieldDeclaration.getVariable(0).getNameAsString();
        switch (resolvedType.asReferenceType().getQualifiedName()) {
            case "java.lang.String":
                field.fieldType = FieldType.string;
                break;
            case "java.lang.Boolean":
                field.fieldType = FieldType.boolean_field;
                break;
            default:
                field.fieldType = FieldType.unknown;
        }

        return field;
    }
}
