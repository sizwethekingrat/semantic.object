package object.builder.domain.root;

import object.builder.domain.Thing;
import object.builder.domain.root.field.Type;

//the node element/building block
public class Field extends Thing {

    public Type type;

    public String value;

    @Override
    public String toString() {
        return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
    }
}