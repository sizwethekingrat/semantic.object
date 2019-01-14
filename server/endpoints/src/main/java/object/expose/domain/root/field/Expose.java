package object.expose.domain.root.field;

import object.build.domain.root.Field;
import org.glassfish.jersey.process.Inflector;

import javax.inject.Named;
import javax.ws.rs.container.ContainerRequestContext;

@Named("field")
public class Expose implements object.Expose<Field> {


    @Override
    public Inflector<ContainerRequestContext, String> getGetInflector(Field root) {
        return new Inflector<ContainerRequestContext, String>() {
            @Override
            public String apply(ContainerRequestContext containerRequestContext) {
                return ;
            }
        };
    }

    @Override
    public Inflector<ContainerRequestContext, String> getPostInflector(Field root) {
        return null;
    }

    @Override
    public Inflector<ContainerRequestContext, String> getPutInflector(Field root) {
        return null;
    }

    @Override
    public Inflector<ContainerRequestContext, String> getDeleteInflector(Field root) {
        return null;
    }
}
