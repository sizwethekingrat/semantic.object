package semantic.object.view.client.example.page.gettingstarted;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

import javax.annotation.PostConstruct;

@Templated
@Page(path = "getting_started")
public class GettingStartedPage extends AbstractPage {

    @Override
    public String getName() {
        return "Getting Started";
    }

    @Override
    public String getDescription() {
        return "Learn how to easily start using GWT Material + Errai in to your app.";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.GETTING_STARTED;
    }
}