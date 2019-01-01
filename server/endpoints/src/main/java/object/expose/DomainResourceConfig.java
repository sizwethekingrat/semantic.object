package object.expose;

import javax.inject.Inject;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import object.builder.Domain;
import object.builder.domain.Root;
import object.expose.domain.expose;
import org.glassfish.jersey.process.Inflector;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.model.Resource;

import java.util.List;
import java.util.logging.Logger;

@Provider
public class DomainResourceConfig extends ResourceConfig implements expose {

    @Inject
    private Domain domain;

    @Inject
    public DomainGraph<Root> graph;

    @Inject
    public DomainEvents events;

    public final Resource.Builder resourceBuilder;

    private final static Logger LOGGER = Logger.getLogger(DomainResourceConfig.class.getName());

    public DomainResourceConfig() {
        resourceBuilder = Resource.builder();

    }

    public void createDomian() {
        for (Root root:domain.roots){
            expose(this,root, new Inflector<ContainerRequestContext, String>() {

                @Override
                public String apply(ContainerRequestContext containerRequestContext) {
                    containerRequestContext.getRequest();
                    try {
                        List<Root> object = graph.list(root);
                        return new ObjectMapper().writeValueAsString(object);
                    } catch (JsonProcessingException e) {
                        throw new RuntimeException(e);
                    }
                }
            });
        }
    }

    public void createUser(){
        expose(this,domain.user, new Inflector<ContainerRequestContext, String>() {

            @Override
            public String apply(ContainerRequestContext containerRequestContext) {
                containerRequestContext.getRequest();
                try {
                    Root object = graph.get(domain.user);
                    return new ObjectMapper().writeValueAsString(object);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
            }
        });
    }

    @Override
    public String toString(){
        return domain.toString();
    }
}
