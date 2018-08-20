package object.builder.domain.root.view.field;

import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import object.builder.Domain;
import object.builder.DomainBuilder;
import object.builder.domain.root.View;
import object.builder.domain.root.view.Field;

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
        LOGGER.info(resolvedType.asReferenceType().getQualifiedName());
        //todo: add typesolver to determine type of generic and build sub-roots, sub-root-lists and enum-lists
        fieldDeclaration.getVariables().get(0).getType().asClassOrInterfaceType().getTypeArguments().ifPresent(types ->
                types.forEach(type -> LOGGER.info(type.asString())));
        return field;
    }
}
