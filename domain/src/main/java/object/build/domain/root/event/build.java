package object.build.domain.root.event;

import com.github.javaparser.ast.body.MethodDeclaration;
import object.build.DomainBuilder;
import object.build.domain.Root;
import object.build.domain.root.Event;

public interface build {
    default Event build(DomainBuilder domainBuilder, MethodDeclaration methodDeclaration, Root parent){
        Event event = new Event();
        event.parent = parent;
        event.eventType = EventType.button;
        event.type = methodDeclaration.getName().asString();
        return event;
    }
}
