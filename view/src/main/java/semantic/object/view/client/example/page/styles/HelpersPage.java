package semantic.object.view.client.example.page.styles;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Page(path = "helpers")
public class HelpersPage extends AbstractPage {

    @Override
    public String getName() {
        return "Helpers";
    }

    @Override
    public String getDescription() {
        return "";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.STYLES;
    }
}
