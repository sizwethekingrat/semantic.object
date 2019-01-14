package object;


import object.build.domain.Root;
import org.neo4j.driver.v1.Driver;
import org.neo4j.driver.v1.Session;
import org.neo4j.driver.v1.StatementResult;
import org.neo4j.driver.v1.Transaction;
import org.neo4j.driver.v1.TransactionWork;

import javax.inject.Inject;

import static org.neo4j.driver.v1.Values.parameters;
import java.util.List;

public class Graph implements DomainGraph<Root> {

    @Override
    public List<Root> list(Root root) {
        return null;
    }

    @Override
    public Root get(Root root) {
        return null;
    }

    @Override
    public Root put(Root root) {
        return null;
    }

    @Override
    public Root post(Root root) {
        return null;
    }

    @Override
    public Root delete(Root root) {
        return null;
    }

    @Inject
    private Driver driver;


    public void close() throws Exception
    {
        driver.close();
    }

    public void printGreeting( final String message )
    {
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
                    return result.single().get( 0 ).asString();
                }
            } );
            System.out.println( greeting );
        }
    }

}
