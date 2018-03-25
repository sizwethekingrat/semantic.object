/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dom.api;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayUtils;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Sizwe
 */
public class Domain {
    //user object is mandatory and built into framework
    public Root user;
    //the application/game/business domains
    public List<Root> roots;


    public static class Root {

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
        
        
        
        public static class View {
            //the properties associated with the object in context
            public List<Field> fields = new ArrayList();
            //managed/linked objects/lists
            public List<Root> roots = new ArrayList();

            @Override
            public String toString() {
                return "{fields:" + fields + ", roots:" + roots + '}';
            }
            
            
        }
         
        public static class Event {
          
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
        
        //the node element/building block
        public static class Field {
            public String name;
            public FieldType type;             

            @Override
            public String toString() {
                return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
            }
        }
    }

//    public final native Root getUserJS() /*-{
//        return this.user;
//    }-*/;
//
//    public final native List<Root> getRootsJS() /*-{
//        return this.roots;
//    }-*/;

}