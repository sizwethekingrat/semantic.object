package semantic.object.domain;

import semantic.object.FieldType;
import semantic.object.RootType;
import semantic.object.domain.root.Event;
import semantic.object.domain.root.View;

import java.util.ArrayList;
import java.util.List;

public class Root {

    boolean printed = false;

    public String name;
    //what we're dealing with
    public RootType type;
    //provides current state
    public View view;
    //provides behaviours/actions
    public List<Event> events = new ArrayList();

    @Override
    public String toString() {
        if (printed){
            printed = true;
            return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
        }
        return "{" + "name:\"" + name + "\", type:\"" + type + "\", view:" + view + ", events:" + events + '}';
    }








}
