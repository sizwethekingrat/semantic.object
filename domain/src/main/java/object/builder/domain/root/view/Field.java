package object.builder.domain.root.view;

import object.builder.domain.root.view.field.Type;

//the node element/building block
public class Field {
    public String name;
    public Type type;

    @Override
    public String toString() {
        return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
    }
}