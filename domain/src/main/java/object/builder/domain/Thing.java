package object.builder.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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
            namespace = new NameSpace(parent.getNameSpace(), type);
        else if (id==null)
            namespace = new NameSpace(type);
        else
            namespace = new NameSpace(type, id);
        return namespace;
    }
}
