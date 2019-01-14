package object.build.domain;

import object.build.domain.root.Event;
import object.build.domain.root.RootType;
import object.build.domain.root.Field;

import java.util.ArrayList;
import java.util.List;

public class Root extends Thing {

    boolean printed = false;

    //what we're dealing with
    public RootType rootType;
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
            return "{" + "type:\"" + type + "\", rootType:\"" + rootType + "\"}";
        }
        return "{" + "type:\"" + type + "\", rootType:\"" + rootType + "fields:" + fields + ", roots:" + roots +  ", events:" + events + '}';
    }



}
