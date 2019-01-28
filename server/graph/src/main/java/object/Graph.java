package object;


import object.build.domain.Root;
import object.build.domain.root.Field;
import org.neo4j.driver.v1.*;
import org.neo4j.driver.v1.exceptions.ClientException;
import org.neo4j.driver.v1.util.Pair;

import javax.inject.Inject;

import static org.neo4j.driver.v1.Values.parameters;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

public class Graph implements DomainGraph<Root>, AutoCloseable {

    @Inject
    private Driver driver;

    @Override
    public List<Root> list(Root root) {
        List<Root> matches = new ArrayList<>();
        try ( Session session = driver.session() )
        {
            StatementResult rootId = session.readTransaction(tx -> {
                StatementResult result = getSearchStatementTemplate(tx, root);
                System.out.println(result.summary());
                return result;
            });
            while (rootId.hasNext())
            {
                Root found = new Root();
                found.type = root.type;
                List<Pair<String,Value>> values = rootId.next().fields();
                for (Pair<String,Value> nameValue: values) {
                    if ("r".equals(nameValue.key())) {
                        buildRoot(root, nameValue);
                    }
                }
                matches.add(found);
            }
        }
        return matches;
    }

    private StatementResult getSearchStatementTemplate(Transaction tx, Root root) {
        if (root.fields!=null && filterEmpty(root.fields).size()>0)
            return tx.run("MATCH (r:"+root.type+") " +
                        " WHERE " + setFilterParameters(filterEmpty(root.fields)) +
                        "RETURN r",parameters(getParameters(filterEmpty(root.fields))));
        return  tx.run("MATCH (r:"+root.type+") " +"RETURN r");
    }

    private List<Field> filterEmpty(List<Field> fields) {
        return fields.stream().filter(field -> field.value != null).collect(Collectors.toList());
    }


    private String setFilterParameters(List<Field> fields) {
        return fields.stream().map(field -> " r." + field.type +" =~ '.*$"+ field.type +".*' ").reduce((s, s2) -> s.concat(" OR  " + s2)).orElse("");
    }

    @Override
    public Root get(Root root) {
        try ( Session session = driver.session() )
        {
            Record rootId = session.readTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (r:"+root.type+") " +
                                "where id(r) = $rootId "+
                                "RETURN r",
                        parameters( "rootId", root.id) );
                return result.single();
            });
            List<Pair<String,Value>> values = rootId.fields();
            for (Pair<String,Value> nameValue: values) {
                if ("r".equals(nameValue.key())) {
                    buildRoot(root, nameValue);
                }
            }
        }
        return root;
    }

    private void buildRoot(Root root, Pair<String, Value> nameValue) {
        Value value = nameValue.value();
        root.fields.forEach(field -> {
            if (!value.get(field.type).isNull()){
                try {
                    switch (field.fieldType) {
                        case localdt:
                            field.value = value.get(field.type).asLocalDate().toString();
                            break;
                        case bln:
                            System.out.println(value.get(field.type));
                            field.value = Boolean.toString(value.get(field.type).asBoolean());
                            break;
                        case typestr:
                            field.value = value.get(field.type).asString();
                            break;
                        case enm:
                            field.value = value.get(field.type).asString();
                            break;
                        case btarr:
                            field.value = Base64.getEncoder().encodeToString(value.get(field.type).asByteArray());
                            break;
                        case lng:
                            field.value = Long.toString(value.get(field.type).asLong());
                            break;
                        case dbl:
                            field.value = Double.toString(value.get(field.type).asDouble());
                            break;
                        case unknown:
                            field.value = value.get(field.type).asString();
                            break;
                        default:
                            field.value = value.get(field.type).asString();
                            break;
                    }
                }catch (org.neo4j.driver.v1.exceptions.value.Uncoercible ex){
                    ex.printStackTrace();
                    field.value = null;
                }
            } else {
                field.value = null;
            }
         });
    }

    @Override
    public Root put(Root root) {
        try ( Session session = driver.session() )
        {
            Integer greeting = session.writeTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (r:"+root.type+") " +
                                "where id(r) = $rootId "+
                                setFields(root.fields) +
                                "RETURN 0",
                        parameters(getParameters(root.fields, "rootId", root.id)) );
                tx.success();
                return result.single().get( 0 ).asInt();
            });
            System.out.println( greeting );
        }
        return root;
    }

    @Override
    public Root post(Root root) {
        try ( Session session = driver.session() )
        {
            Integer rootId = session.writeTransaction(tx -> {
                StatementResult result;
                if (root.parent==null){
                    result = createRoot(tx, root);
                } else {
                    result = createNestedRoot(tx, root);
                }
                return result.next().get(0).asInt();
            });
            root.id = rootId;
        }
        return root;
    }

    private StatementResult createNestedRoot(Transaction tx, Root root) {
        StatementResult result = tx.run( "CREATE (r:"+root.type+") " +
                        "SET r.parent = $parentId " +
                        setFields(root.fields) +
                        "SET r.id = id(r) " +
                        "RETURN id(r)",
                parameters( "parentId", root.parent.id, getParameters(root.fields) ) );
        tx.success();
        return result;
    }

    private StatementResult createRoot(Transaction tx, Root root) {
        StatementResult result = tx.run( "CREATE (r:"+root.type+") " +
                setFields(root.fields) +
                "SET r.id = id(r) " +
                "RETURN id(r)", parameters(getParameters(root.fields)));
        tx.success();
        return result;
    }

    private Object[] getParameters(List<Field> fields, Object... keysAndValues) {
        if (keysAndValues.length % 2 != 0) {
            throw new ClientException("Get parameters function requires an even number of arguments, alternating key and value. Arguments were: " + Arrays.toString(keysAndValues) + ".");
        }

        Object[] array = new Object[fields.size()*2 + keysAndValues.length];
        for (int fieldIndex =0; fieldIndex <= (fields.size()*2)-1; fieldIndex = fieldIndex + 2){
            array[fieldIndex] = fields.get(fieldIndex/2).type;
            array[fieldIndex+1] = getByType(fields.get(fieldIndex/2));
        }
        for(int i = 0; i < keysAndValues.length; i += 2) {
            array[(fields.size()*2) + i] = keysAndValues[i];
            array[(fields.size()*2) + i +1] = keysAndValues[i + 1];
        }
        return array;
    }

    private Object getByType(Field field) {
        switch (field.fieldType) {
            case localdt:
                return LocalDate.parse(field.value);
            case bln:
                return Boolean.valueOf(field.value);
            case typestr:
                return field.value;
            case btarr:
                return Base64.getDecoder().decode(field.value);
            case enm:
                return field.value;
            case lng:
                return Long.valueOf(field.value);
            case dbl:
                return Double.valueOf(field.value);
            case unknown:
                return field.value;
            default:
                return field.value;
        }
    }

    private String setFields(List<Field> fields) {
        return fields.stream().map(field -> "SET r." +field.type + " = $" + field.type + " ").reduce((s, s2) -> s.concat(s2)).orElse("");
    }


    @Override
    public Root delete(Root root) {
        try ( Session session = driver.session() )
        {
            int greeting = session.writeTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (r:"+root.type+") " +
                                "where id(r) = $rootId "+
                                "OPTIONAL MATCH (r)-[p]-() " + //TODO USE DETACH DELETE IN FUTURE
                                "DELETE p,r",
                        parameters( "rootId", root.id) );
                tx.success();
                return 0;
            });
        }
        root.id = null;
        return root;
    }



    public void close()
    {
        driver.close();
    }


}
