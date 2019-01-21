package object;


import object.build.domain.Root;
import object.build.domain.root.Field;
import org.neo4j.driver.v1.*;
import org.neo4j.driver.v1.util.Pair;

import javax.inject.Inject;

import static org.neo4j.driver.v1.Values.ofBoolean;
import static org.neo4j.driver.v1.Values.parameters;
import java.util.List;

public class Graph implements DomainGraph<Root> {

    @Inject
    private Driver driver;

    @Override
    public List<Root> list(Root root) {
        return null;
    }

    @Override
    public Root get(Root root) {
        try ( Session session = driver.session() )
        {
            StatementResult rootId = session.readTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (r:"+root.type+") " +
                                "where id(r) = $rootId "+
                                "RETURN r",
                        parameters( "rootId", Long.parseLong(root.id)) );
                return result;
            });

            if (rootId.hasNext())
            {
                List<Pair<String,Value>> values = rootId.next().fields();
                for (Pair<String,Value> nameValue: values) {
                    if ("r".equals(nameValue.key())) {
                        Value value = nameValue.value();
                        root.fields.forEach(field -> {
                            System.out.println(value.get(field.type));
                            field.value = value.get(field.type).asString();});
                    }
                }
            }

        }
        return root;
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
                        parameters(getParameters(root.fields)) );
                tx.success();
                return result.single().get( 0 ).asInt();
            });
            System.out.println( greeting );
        };
        root.id = null;
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
            root.id = rootId.toString();
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

    private Object[] getParameters(List<Field> fields) {
        Object[] array = new Object[fields.size()*2];
        for (int fieldIndex =0; fieldIndex <= (fields.size()*2)-1; fieldIndex = fieldIndex + 2){
            array[fieldIndex] = fields.get(fieldIndex/2).type;
            array[fieldIndex+1] = fields.get(fieldIndex/2).value;
        }
        return array;
    }

    private String setFields(List<Field> fields) {
        return fields.stream().map(field -> "SET r." +field.type + " = $" + field.type + " ").reduce((s, s2) -> s.concat(s2)).orElse("");
    }



    @Override
    public Root delete(Root root) {
        try ( Session session = driver.session() )
        {
            String greeting = session.writeTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (r:"+root.type+") " +
                                "where id(r) = $rootId "+
                                "OPTIONAL MATCH (r)-[p]-() " + //TODO USE DETACH DELETE IN FUTURE
                                "DELETE p,r",
                        parameters( "rootId", Long.parseLong(root.id) ) );
                tx.success();
                return result.single().get( 0 ).asString();
            });
            System.out.println( greeting );
        };
        root.id = null;
        return root;
    }



    public void close()
    {
        driver.close();
    }

    public void printGreeting( final String message )
    {
        driver = GraphDatabase.driver( "bolt://localhost:7687", AuthTokens.basic( "neo4j", "anytime3IS3teatime" ) );

        try ( Session session = driver.session() )
        {
            String greeting = session.writeTransaction( new TransactionWork<String>()
            {
                @Override
                public String execute( Transaction tx )
                {
                    StatementResult result = tx.run( "CREATE (a:Greeting) " +
                                    "SET a.message = $message " +
                                    "RETURN a.message + ', from node ' + id(a)",
                            parameters( "message", message ) );
                    tx.success();
                    return result.single().get( 0 ).asString();
                }
            } );
            System.out.println( greeting );
        }
        driver.close();
    }

}
