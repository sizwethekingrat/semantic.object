package object.builder.domain.root;

import object.builder.domain.Root;
import object.builder.domain.Thing;
import object.builder.domain.root.event.Type;

import java.util.ArrayList;
import java.util.List;

public class Event extends Thing {

    public Type type;

    //simple parameters
    public List<Field> parameters = new ArrayList();
    //complex object parameters
    public List<Root> dialogues = new ArrayList();

    @Override
    public String toString() {
        return "{" + "name:\"" + name + "\", parameters:" + parameters + ", dialogues:" + dialogues + "}";
    }

}
