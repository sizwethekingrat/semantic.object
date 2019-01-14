package object.build.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "type")
@JsonIgnoreProperties(value={ "nameSpace" }, allowGetters=true)
public class Thing {

    public String id;

    public Root parent;

    public String type;

    public NameSpace getNameSpace(){
        NameSpace namespace;
        if (parent!=null)
            if (id!=null)
                namespace = new NameSpace(parent.getNameSpace(), type, id);
            else
                namespace = new NameSpace(parent.getNameSpace(), type);
        else if (id!=null)
            namespace = new NameSpace(type, id);
        else
            namespace = new NameSpace(type);
        return namespace;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Thing thing = (Thing) o;

        if (id != null ? !id.equals(thing.id) : thing.id != null) return false;
        return type.equals(thing.type);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + type.hashCode();
        return result;
    }
}
