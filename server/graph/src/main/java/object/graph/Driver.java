package object.graph;


import org.neo4j.driver.v1.AuthTokens;
import org.neo4j.driver.v1.GraphDatabase;

import javax.enterprise.inject.Produces;

public class Driver {
    @Produces
    public org.neo4j.driver.v1.Driver getDriver(){
        org.neo4j.driver.v1.Driver driver = GraphDatabase.driver( "bolt://localhost:7687", AuthTokens.basic( "neo4j", "password" ) );
        return driver;
    }
}
