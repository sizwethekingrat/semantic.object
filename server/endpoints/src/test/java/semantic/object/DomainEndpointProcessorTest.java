package semantic.object;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import java.util.logging.Logger;

import static org.junit.Assert.*;

@RunWith(Arquillian.class)
public class DomainEndpointProcessorTest {

    private final static Logger LOGGER = Logger.getLogger(DomainEndpointProcessorTest.class.getName());

    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(DomainResourceConfig.class)
                .addClass(DomainProducer.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

    @Inject
    DomainResourceConfig domainResourceConfig;

    @org.junit.Test
    public void processResourceModel() {
        LOGGER.info(domainResourceConfig.toString());
        LOGGER.info(domainResourceConfig.getResources().toString());
    }
}
