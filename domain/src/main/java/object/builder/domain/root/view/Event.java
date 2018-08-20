package object.builder.domain.root.view;

import object.builder.domain.Root;

import java.util.ArrayList;
import java.util.List;

public class Event {

    public String name;

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
