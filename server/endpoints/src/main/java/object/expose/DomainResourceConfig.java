package object.expose;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import object.DomainGraph;
import object.build.Domain;
import object.build.domain.Root;
import org.glassfish.jersey.process.Inflector;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.model.Resource;

import java.util.List;
import java.util.logging.Logger;

@Provider
public class DomainResourceConfig extends ResourceConfig implements object.Expose<Root> {

    @Inject
    private Domain domain;

    @Inject
    public DomainGraph<Root> graph;

//    @Inject
//    public DomainEvents events;
//
//    @Inject
//    @Named("field")
//    public object.Expose fieldExpose;

    public final Resource.Builder resourceBuilder;

    private final static Logger LOGGER = Logger.getLogger(DomainResourceConfig.class.getName());

    public DomainResourceConfig() {
        resourceBuilder = Resource.builder();

    }

    public void createDomian() {
        for (Root root:domain.roots){
            expose(this,root);
        }
    }

    public Inflector<ContainerRequestContext, String> getGetInflector(Root root) {
        return containerRequestContext -> {
            containerRequestContext.getRequest();
            try {
                if (containerRequestContext.getUriInfo().getPathParameters().getFirst("id").isEmpty()) {
                    List<Root> object = graph.list(root);
                    return new ObjectMapper().writeValueAsString(object);
                } else {
                    Root object = graph.get(root);
                    return new ObjectMapper().writeValueAsString(object);
                }
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        };
    }


    public Inflector<ContainerRequestContext, String> getPostInflector(Root root) {
        return containerRequestContext -> {
            containerRequestContext.getRequest();
            try {
                Root object = graph.post(root);
                return new ObjectMapper().writeValueAsString(object);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        };
    }


    public Inflector<ContainerRequestContext, String> getPutInflector(Root root) {
        return containerRequestContext -> {
            containerRequestContext.getRequest();
            try {
                Root object = graph.put(root);
                return new ObjectMapper().writeValueAsString(object);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        };
    }

    public Inflector<ContainerRequestContext, String> getDeleteInflector(Root root) {
        return containerRequestContext -> {
            containerRequestContext.getRequest();
            try {
                Root object = graph.delete(root);
                return new ObjectMapper().writeValueAsString(object);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        };
    }

    public void createUser(){
        expose(this,domain.user);
    }

    @Override
    public String toString(){
        return domain.toString();
    }
}
