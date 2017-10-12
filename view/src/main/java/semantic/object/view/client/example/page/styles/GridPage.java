package semantic.object.view.client.example.page.styles;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Page(path = "grid")
public class GridPage extends AbstractPage {

    @Override
    public String getName() {
        return "Grid";
    }

    @Override
    public String getDescription() {
        return "We are using a standard 12 column fluid responsive grid system.The grid helps you layout your page in an ordered, easy fashion";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.STYLES;
    }
}
