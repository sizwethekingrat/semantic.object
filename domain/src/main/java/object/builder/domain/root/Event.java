package object.builder.domain.root;

import object.builder.domain.Root;
import object.builder.domain.Thing;
import object.builder.domain.root.event.EventType;

import java.util.ArrayList;
import java.util.List;

public class Event extends Thing {

    public EventType eventType;

    //simple parameters
    public List<Field> parameters = new ArrayList();
    //complex object parameters
    public List<Root> dialogues = new ArrayList();


}
