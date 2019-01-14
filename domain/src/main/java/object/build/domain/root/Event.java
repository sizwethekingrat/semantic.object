package object.build.domain.root;

import object.build.domain.Root;
import object.build.domain.Thing;
import object.build.domain.root.event.EventType;

import java.util.ArrayList;
import java.util.List;

public class Event extends Thing {

    public EventType eventType;

    //simple parameters
    public List<Field> parameters = new ArrayList();
    //complex object parameters
    public List<Root> dialogues = new ArrayList();


}
