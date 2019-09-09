package object;

import object.build.domain.Thing;
import object.expose.DomainResourceConfig;
import org.glassfish.jersey.process.Inflector;
import org.glassfish.jersey.server.model.Resource;
import org.glassfish.jersey.server.model.ResourceMethod;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.MediaType;

public interface Expose<T extends Thing> {
    default void expose(DomainResourceConfig resourceConfig, T root){

        resourceConfig.resourceBuilder.path(root.getNameSpace().getUrl());

        final ResourceMethod.Builder getMethodBuilder = resourceConfig.resourceBuilder.addMethod("GET");
        getMethodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(getGetInflector(root));

        final ResourceMethod.Builder postMethodBuilder = resourceConfig.resourceBuilder.addMethod("POST");
        postMethodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(getPostInflector(root));

        final ResourceMethod.Builder putMethodBuilder = resourceConfig.resourceBuilder.addMethod("PUT");
        putMethodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(getPutInflector(root));

        final ResourceMethod.Builder deleteMethodBuilder = resourceConfig.resourceBuilder.addMethod("DELETE");
        deleteMethodBuilder.produces(MediaType.APPLICATION_JSON_TYPE)
                .handledBy(getDeleteInflector(root));

        final Resource resource = resourceConfig.resourceBuilder.build();
        resourceConfig.registerResources(resource);
    }

    Inflector<ContainerRequestContext, String> getGetInflector(T root);
    Inflector<ContainerRequestContext, String> getPostInflector(T root);
    Inflector<ContainerRequestContext, String> getPutInflector(T root);
    Inflector<ContainerRequestContext, String> getDeleteInflector(T root);

}
