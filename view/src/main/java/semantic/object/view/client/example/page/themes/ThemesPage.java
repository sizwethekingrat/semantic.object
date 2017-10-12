package semantic.object.view.client.example.page.themes;

import semantic.object.view.client.example.page.AbstractPage;
import semantic.object.view.client.example.page.PageCategory;
import semantic.object.view.client.example.page.PageCategory;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Templated;

@Templated
@Page(path = "themes")
public class ThemesPage extends AbstractPage {

    @Override
    public String getName() {
        return "Themes";
    }

    @Override
    public String getDescription() {
        return "Learn how to easily start using GWT Material Themes in your app.";
    }

    @Override
    public PageCategory getCategory() {
        return PageCategory.THEMES;
    }
}
