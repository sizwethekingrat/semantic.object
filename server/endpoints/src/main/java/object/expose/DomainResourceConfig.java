package object.expose;

import javax.inject.Inject;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import object.builder.Domain;
import org.glassfish.jersey.process.Inflector;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.model.Resource;
import org.glassfish.jersey.server.model.ResourceMethod;

import java.util.logging.Logger;

@Provider
public class DomainResourceConfig extends ResourceConfig {

    @Inject
    private Domain domain;

    public final Resource.Builder resourceBuilder;

    private final static Logger LOGGER = Logger.getLogger(DomainResourceConfig.class.getName());

    public DomainResourceConfig() {
        resourceBuilder = Resource.builder();

        createUser();

        createDomian();
    }

    private void createDomian() {

    }

    public void createUser(){


    }

    @Override
    public String toString(){
        return domain.toString();
    }
}
