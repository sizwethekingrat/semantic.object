package object;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import static org.junit.Assert.*;

@RunWith(Arquillian.class)
public class GraphTest {
    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(Graph.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

//    @org.junit.Test
//    public void list() {
//    }
//
//    @org.junit.Test
//    public void get() {
//    }
//
//    @org.junit.Test
//    public void put() {
//    }
//
//    @org.junit.Test
//    public void post() {
//    }
//
//    @org.junit.Test
//    public void delete() {
//    }
//
//    @org.junit.Test
//    public void close() {
//    }

    @Inject
    Graph greeter;

    @Test
    public void printGreeting() {
        try {
            greeter.printGreeting( "hello, world" );
            greeter.close();
        } catch (Exception e) {
            assertEquals(true, false);
        }
    }
}
