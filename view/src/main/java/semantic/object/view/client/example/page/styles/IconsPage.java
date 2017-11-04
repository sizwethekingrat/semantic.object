package semantic.object.view.client.example.page.styles;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Page(path = "icons")
public class IconsPage extends AbstractPage {

    @Override
    public String getName() {
        return "Icons";
    }

    @Override
    public String getDescription() {
        return "We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.STYLES;
    }
}