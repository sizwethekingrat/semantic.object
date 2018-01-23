package semantic.object.view.client.example;

import com.google.gwt.dom.client.StyleInjector;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
import semantic.object.dom.api.Domain;
import semantic.object.view.client.example.resources.AppResources;
import semantic.object.view.client.example.widget.Footer;
import semantic.object.view.client.example.widget.Header;
import semantic.object.view.client.example.widget.Main;
import semantic.object.view.client.example.widget.SideNav;
import org.jboss.errai.ioc.client.api.EntryPoint;
import org.jboss.errai.ui.nav.client.local.Navigation;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.TimeUnit;

@EntryPoint
public class Client extends Composite {

    @Inject
    private DomainService domain;

    @Inject
    private Navigation navigation;

    @Inject
    private Header header;

    @Inject
    private SideNav sideNav;

    @Inject
    private Main content;

    @Inject
    private Footer footer;

    @PostConstruct
    protected void init() {

        try {
            Domain domain = await(domService.getDom().invoke());

        } catch (Exception e) {
            e.printStackTrace();
        }

        StyleInjector.inject(AppResources.INSTANCE.appCss().getText());
        content.getContainer().add(navigation.getContentPanel());
        semantic.object.view.client.example.ThemeManager.initialize();
        RootPanel.get().add(header);
        RootPanel.get().add(sideNav);
        RootPanel.get().add(content);
        RootPanel.get().add(footer);
        Timer timer = new Timer() {
            @Override
            public void run() {
                DOM.removeChild(RootPanel.getBodyElement(), DOM.getElementById("splashscreen"));
            }
        };
        timer.schedule(2000);
    }

    private <T> T await(CompletionStage<T> future) throws Exception {
        return future.toCompletableFuture().get(10, TimeUnit.SECONDS);
    }
}
