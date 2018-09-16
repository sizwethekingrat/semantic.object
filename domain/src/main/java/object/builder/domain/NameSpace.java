package object.builder.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class NameSpace {
    private List<String> address;

    public NameSpace(String... part){
        address = new ArrayList<String> ();
        address.addAll(Arrays.asList(part));
    }

    public NameSpace(NameSpace parent, String... part){
        address = parent.address;
        Arrays.asList(part).forEach(one -> address.add(one));
    }

    public String getBasic(){
        return address.stream().map(Object::toString).collect(Collectors.joining("::"));
    }

    public String getUrl(){
        return address.stream().map(Object::toString).collect(Collectors.joining("/"));
    }

}
