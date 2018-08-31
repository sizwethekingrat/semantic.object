package object.builder.domain.root.event;

import com.github.javaparser.ast.body.MethodDeclaration;
import object.builder.DomainBuilder;
import object.builder.domain.root.Event;

public interface build {
    default Event build(DomainBuilder domainBuilder, MethodDeclaration methodDeclaration){
        return new Event();
    }
}
