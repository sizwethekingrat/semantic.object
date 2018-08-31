package object.expose;

import com.fasterxml.jackson.databind.ObjectMapper;
import object.builder.Domain;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;
import java.io.File;


@ApplicationScoped
public class DomainProducer {
    @Produces
    public Domain getDomain() throws Exception{
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource("domain.json").getFile());
        ObjectMapper objectMapper = new ObjectMapper();
        Domain domain = objectMapper.readValue(file, Domain.class);
        return domain;
    }
}
