package object.graph;


import org.neo4j.driver.v1.AuthTokens;
import org.neo4j.driver.v1.GraphDatabase;
import org.neo4j.driver.v1.Driver;
import javax.enterprise.inject.Produces;

public class Producer {
    @Produces
    public Driver getDriver(){
        Driver driver = GraphDatabase.driver( "bolt://localhost:7687", AuthTokens.basic( "neo4j", "anytime3IS3teatime" ) );
        return driver;
    }
}
