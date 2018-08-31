package object.builder.domain;

public class Thing {

    public String id;

    public Root parent;

    public String name;

    public NameSpace getNameSpace(){
        NameSpace namespace;
        if (parent!=null)
            namespace = new NameSpace(parent.getNameSpace(), name);
        else if (id==null)
            namespace = new NameSpace(name);
        else
            namespace = new NameSpace(name, id);
        return namespace;
    }
}
