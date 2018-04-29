package semantic.object;

import static junit.framework.Assert.assertTrue;

public class DomainBuilderTester {

    /**
     * Must refer to a valid module that sources this class.
     */
    @Override
    public String getModuleName() {                                         // (2)
        return "semantic.object.view.App";
    }

    /**
     * Add as many tests as you like.
     */
    public void testSimple() {                                              // (3)
        assertTrue(true);
    }
}
