package object.builder.domain.root.field;

import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import object.builder.DomainBuilder;
import object.builder.domain.root.Field;

import java.util.logging.Logger;

public interface build {
    Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    default Field build(DomainBuilder domainBuilder, FieldDeclaration fieldDeclaration) {
        Field field = new Field();
        ResolvedType resolvedType = JavaParserFacade.get(domainBuilder.getTypeSolver()).convertToUsage(fieldDeclaration.getVariables().get(0).getType(), fieldDeclaration);

        field.name = fieldDeclaration.getVariable(0).getNameAsString();
        switch (resolvedType.asReferenceType().getQualifiedName()) {
            case "java.lang.String":
                field.type = Type.string;
                break;
            case "java.lang.Boolean":
                field.type = Type.string;
                break;
            default:
                field.type = Type.unknown;
        }

        return field;
    }
}
