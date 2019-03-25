package object.expose;

//import object.DomainGraph;
//import object.Graph;
//import object.build.Domain;
//import object.build.domain.Root;
//import object.build.domain.Thing;
//import object.graph.Producer;
//import org.jboss.arquillian.container.test.api.Deployment;
//import org.jboss.arquillian.container.test.api.RunAsClient;
//import org.jboss.arquillian.junit.Arquillian;
//import org.jboss.arquillian.test.api.ArquillianResource;
//import org.jboss.shrinkwrap.api.ArchivePaths;
//import org.jboss.shrinkwrap.api.ShrinkWrap;
//import org.jboss.shrinkwrap.api.asset.EmptyAsset;
//import org.jboss.shrinkwrap.api.spec.WebArchive;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//
//import javax.ws.rs.client.WebTarget;
//import java.util.List;
//import java.util.logging.Logger;
//
//@RunWith(Arquillian.class)
public class DomainEndpointProcessorTest {
//
//    private final static Logger LOGGER = Logger.getLogger(DomainEndpointProcessorTest.class.getName());
//
//    @Deployment
//    public static WebArchive createDeployment() {
//        return ShrinkWrap.create(WebArchive.class)
//                .addClass(DomainGraph.class)
//                .addClass(Producer.class)
//                .addClass(DomainProducer.class)
//                .addClass(Graph.class)
//                .addClass(DomainResourceConfig.class)
////                .addPackage("object.graph")
////                .addPackage("object.build")
//                .addAsResource("domain.json")
//                .addAsManifestResource(EmptyAsset.INSTANCE, ArchivePaths.create("beans.xml"))
//                .setWebXML( "WEB-INF/web.xml");
//    }
//
//    @Test
//    @RunAsClient
//    public void banCustomerRaw(@ArquillianResource WebTarget webTarget)
//    {
//        System.out.println(webTarget.path("/user")
//                .request()
//                .get().getStatus());
//
//        final List<Root> result = webTarget.path("/User/88")
//                .request()
//                .get()
//                .readEntity(List.class);
//    }

}
