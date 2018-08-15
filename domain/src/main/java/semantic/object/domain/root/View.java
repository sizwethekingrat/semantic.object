package semantic.object.domain.root;

import semantic.object.domain.Root;

import java.util.ArrayList;
import java.util.List;

public class View {
    //the properties associated with the object in context
    public List<Field> fields = new ArrayList();
    //managed/linked objects/lists
    public List<Root> roots = new ArrayList();
    //the actions associated with the view
    public List<Event> events = new ArrayList();

    @Override
    public String toString() {
        return "{fields:" + fields + ", roots:" + roots +  ", events:" + events + '}';
    }


}
