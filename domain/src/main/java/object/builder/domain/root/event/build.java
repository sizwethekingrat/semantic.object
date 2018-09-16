package object.builder.domain.root.event;

import com.github.javaparser.ast.body.MethodDeclaration;
import object.builder.DomainBuilder;
import object.builder.domain.Root;
import object.builder.domain.root.Event;

public interface build {
    default Event build(DomainBuilder domainBuilder, MethodDeclaration methodDeclaration, Root parent){
        Event event = new Event();
        event.parent = parent;
        event.eventType = EventType.button;
        event.type = methodDeclaration.getName().asString();
        return event;
    }
}
