package semantic.object.view.client.example.page.components;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Page(path = "sidenav")
public class SideNavPage extends AbstractPage {

    @Override
    public String getName() {
        return "SideNavs";
    }

    @Override
    public String getDescription() {
        return "Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on. Our main demo of this is our table of contents on every documentation page to the right. Clicking on these links will also scroll the page to that element.";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.COMPONENTS;
    }
}