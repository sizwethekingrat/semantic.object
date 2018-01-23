package semantic.object.view.client.service;


import com.google.gwt.core.client.GWT;
import com.google.gwt.query.client.Function;
import com.google.gwt.query.client.GQuery;
import org.jboss.errai.ioc.client.api.IOCProvider;
import semantic.object.dom.api.Domain;
import javax.inject.Singleton;

/**
 * Created by Sizwe on 2018-01-12.
 */
@IOCProvider
@Singleton
public class Producer implements javax.inject.Provider<DomainService>{

    @Override
    public DomainService get() {

        return new DomainService() {
            @Override
            public Domain get() {
                Domain domain;
                GQuery.getJSON("", null, new Function() {
                    public void f() {
                        // You can inspect arguments with this
                        System.out.println(dumpArguments());

                        // Create the bean, and wrap the json object read
                        //domain = GWT.create(Domain.class);
                        //.load(arguments(0));

                        // toString in JsonBuilder returns the json string
                        //System.out.println(b.toString());
                    }
                });
                return null;
            }
        };
    }

}
