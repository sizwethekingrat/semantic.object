package semantic.object.view.client.service;

import semantic.object.Domain;

import javax.enterprise.context.ApplicationScoped;


@ApplicationScoped
public interface DomainService {
    public Domain get();
}
