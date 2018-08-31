package object.expose.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import object.builder.domain.Root;
import object.builder.domain.root.Event;
import object.builder.domain.root.Field;
import object.expose.DomainResourceConfig;
import org.glassfish.jersey.process.Inflector;
import org.glassfish.jersey.server.model.Resource;
import org.glassfish.jersey.server.model.ResourceMethod;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.MediaType;

public interface expose {
    default void expose(DomainResourceConfig resourceConfig, Root root){
        resourceConfig.resourceBuilder.path(root.getNameSpace().asUrl());

        final ResourceMethod.Builder methodBuilder = resourceConfig.resourceBuilder.addMethod("GET");
        methodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(new Inflector<ContainerRequestContext, String>() {

                    @Override
                    public String apply(ContainerRequestContext containerRequestContext) {
                        containerRequestContext.getRequest();
                        try {
                            return new ObjectMapper().writeValueAsString("");
                        } catch (JsonProcessingException e) {
                            throw new RuntimeException(e);
                        }
                    }
                });

        final Resource resource = resourceConfig.resourceBuilder.build();
        resourceConfig.registerResources(resource);
    }

    default void expose(DomainResourceConfig resourceConfig, Field root){

    }

    default void expose(DomainResourceConfig resourceConfig, Event root){

    }
}
