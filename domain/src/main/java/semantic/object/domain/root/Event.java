package semantic.object.domain.root;

import semantic.object.domain.Root;

import java.util.ArrayList;
import java.util.List;

public class Event {

    public String name;
    //simple parameters
    public List<Field> parameters = new ArrayList();
    //complex object parameters
    public List<Root> dialogues = new ArrayList();

    @Override
    public String toString() {
        return "{" + "name:\"" + name + "\", parameters:" + parameters + ", dialogues:" + dialogues + "}";
    }

}
