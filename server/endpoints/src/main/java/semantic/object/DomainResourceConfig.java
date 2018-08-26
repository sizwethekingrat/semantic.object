package semantic.object;

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

    private final static Logger LOGGER = Logger.getLogger(DomainResourceConfig.class.getName());

    public DomainResourceConfig() {
        final Resource.Builder resourceBuilder = Resource.builder();
        resourceBuilder.path("helloworld");

        LOGGER.info("Building Resources");

        createUser();

        createDomian();
    }

    private void createDomian() {

    }

    public void createUser(){
        final Resource.Builder resourceBuilder = Resource.builder();
        resourceBuilder.path("user");

        LOGGER.info("Building User Resources");

        final ResourceMethod.Builder methodBuilder = resourceBuilder.addMethod("GET");
        methodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(new Inflector<ContainerRequestContext, String>() {

                    @Override
                    public String apply(ContainerRequestContext containerRequestContext) {
                        containerRequestContext.getRequest();
                        try {
                            return new ObjectMapper().writeValueAsString(domain);
                        } catch (JsonProcessingException e) {
                            throw new RuntimeException(e);
                        }
                    }
                });

        final Resource resource = resourceBuilder.build();
        registerResources(resource);
    }

    @Override
    public String toString(){
        return domain.toString();
    }
}
