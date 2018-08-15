package semantic.object.domain.root;

import semantic.object.FieldType;

//the node element/building block
public class Field {
    public String name;
    public FieldType type;

    @Override
    public String toString() {
        return "{" + "name:\"" + name + "\", type:\"" + type + "\"}";
    }
}