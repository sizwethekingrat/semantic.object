package object.builder.domain.root;

import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.FieldDeclaration;
import object.builder.DomainBuilder;
import object.builder.domain.Root;

import java.util.logging.Logger;

public interface build {
    Logger LOGGER = Logger.getLogger(DomainBuilder.class.getName());

    default Root build(DomainBuilder domainBuilder, CompilationUnit compilationUnit, Type rootType){
        if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)){
            return domainBuilder.getProcessedRoots().get(compilationUnit);
        }
        Root root = new Root();
        root.name = compilationUnit.getType(0).getName().asString();
        root.type = rootType;
        root.view = new object.builder.domain.root.view.build(){}.build(domainBuilder, compilationUnit);
        domainBuilder.getProcessedRoots().put(compilationUnit,root);
        return root;
    }

    default Root build(DomainBuilder domainBuilder, FieldDeclaration field, Type rootType){
        CompilationUnit compilationUnit = domainBuilder.findCompilationUnitForFieldDeclaration(field);
        if (compilationUnit!=null) {
            if (domainBuilder.getProcessedRoots().containsKey(compilationUnit)) {
                return domainBuilder.getProcessedRoots().get(compilationUnit);
            }
            return build(domainBuilder,compilationUnit, rootType);
        }
        return null;
    }

}
