package object.builder.domain;

import object.builder.DomainBuilder;
import object.builder.domain.root.build;
import object.builder.domain.root.view.Event;
import object.builder.domain.root.Type;
import object.builder.domain.root.View;

import java.util.ArrayList;
import java.util.List;

public class Root {

    boolean printed = false;

    public String name;
    //what we're dealing with
    public Type type;
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
