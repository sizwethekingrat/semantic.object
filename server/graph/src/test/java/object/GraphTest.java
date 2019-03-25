package object;

import object.build.Domain;
import object.build.domain.Root;
import object.graph.Producer;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ArchivePaths;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import java.util.List;
import java.util.Random;

import static org.junit.Assert.*;

@RunWith(Arquillian.class)
public class GraphTest {
    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(Graph.class)
                .addClass(Producer.class)
                .addClass(DomainProducer.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, ArchivePaths.create("beans.xml"));
    }

    @Inject
    Graph greeter;

    @Inject
    Domain domain;

    @org.junit.Test
    public void lifecycle() {
        Root root = domain.user;
        root.fields.forEach(field -> {
            field.value=java.util.UUID.randomUUID().toString();
        });
        assertTrue(greeter.post(root).id != null);
        greeter.get(root);
        System.out.println(root.id);
        root.fields.forEach(field -> {
            field.value=java.util.UUID.randomUUID().toString();
        });
        greeter.put(root);
        greeter.get(root);

        System.out.println(root.id);
        greeter.delete  (root);
        root.clear();
        List<Root> allRoots = greeter.list(root);
        System.out.println(allRoots.size());
        assertTrue(allRoots.size()>0);
    }

//    @Test
//    public void printGreeting() {
//        try {
//            greeter.printGreeting( "hello, world" );
//            greeter.close();
//            assertEquals(true, true);
//        } catch (Exception e) {
//            e.printStackTrace();
//            assertEquals(true, false);
//        }
//    }
}
