package object.graph;


import org.neo4j.graphdb.factory.GraphDatabaseSettings;
import org.neo4j.driver.v1.AuthTokens;
import org.neo4j.driver.v1.GraphDatabase;
import org.neo4j.driver.v1.Driver;
import org.neo4j.graphdb.GraphDatabaseService;
import org.neo4j.graphdb.factory.GraphDatabaseFactory;

import javax.enterprise.inject.Produces;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class Producer {
    @Produces
    public Driver getDriver(){
        GraphDatabaseService graphDb;
        try {
            GraphDatabaseSettings.BoltConnector bolt = GraphDatabaseSettings.boltConnector( "0" );
            graphDb = new GraphDatabaseFactory().newEmbeddedDatabaseBuilder(Files.createTempDirectory("graphDb").toFile() ).setConfig( bolt.type, "BOLT" )
                    .setConfig( bolt.enabled, "true" )
                    .setConfig( bolt.address, "localhost:7687" ).newGraphDatabase();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Driver driver = GraphDatabase.driver( "bolt://localhost:7687", AuthTokens.basic( "neo4j", "anytime3IS3teatime" ) );
        return driver;
    }
}
