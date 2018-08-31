package object.builder.domain;

import object.builder.domain.root.Event;
import object.builder.domain.root.Type;
import object.builder.domain.root.Field;

import java.util.ArrayList;
import java.util.List;

public class Root extends Thing {

    boolean printed = false;

    //what we're dealing with
    public Type type;
    //the properties associated with the object in context
    public List<Field> fields = new ArrayList();
    //managed/linked objects/lists
    public List<Root> roots = new ArrayList();
    //the actions associated with the view
    public List<Event> events = new ArrayList();

    @Override
    public String toString() {
        if (printed){
            printed = true;
            return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
        }
        return "{" + "name:\"" + name + "\", type:\"" + type + "fields:" + fields + ", roots:" + roots +  ", events:" + events + '}';
    }



}
