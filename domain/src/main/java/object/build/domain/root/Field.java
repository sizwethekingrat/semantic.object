package object.build.domain.root;

import object.build.domain.Thing;
import object.build.domain.root.field.FieldType;

//the node element/building block
public class Field extends Thing {

    public FieldType fieldType;

    public String value;

}