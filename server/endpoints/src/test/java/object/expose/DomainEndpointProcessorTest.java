package object.expose;

import object.Graph;
import object.graph.Producer;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import java.io.IOException;
import java.util.logging.Logger;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.*;

@RunWith(Arquillian.class)
public class DomainEndpointProcessorTest {

    private final static Logger LOGGER = Logger.getLogger(DomainEndpointProcessorTest.class.getName());

    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(DomainResourceConfig.class)
                .addClass(Graph.class)
                .addClass(Producer.class)
                .addClass(DomainProducer.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

    @Inject
    DomainResourceConfig domainResourceConfig;

    @org.junit.Before
    public void processResourceModel() {
        LOGGER.info(domainResourceConfig.toString());
        domainResourceConfig.createUser();
        domainResourceConfig.createDomian();
        LOGGER.info(domainResourceConfig.getResources().toString());
    }


    public void getUserList(){

    }

    @Test
    public void givenUserDoesNotExists_whenUserInfoIsRetrieved_then404IsReceived()
            throws ClientProtocolException, IOException {

        // Given

        HttpUriRequest request = new HttpGet( "http://localhost:80/user/" + "1212" );

        // When
        HttpResponse httpResponse = HttpClientBuilder.create().build().execute( request );

        // Then
        assertThat(
                httpResponse.getStatusLine().getStatusCode(),
                equalTo(HttpStatus.SC_NOT_FOUND));
    }
}
