package semantic.object;

import com.google.gwt.junit.tools.GWTTestSuite;
import junit.framework.Test;
import junit.framework.TestCase;

public class MyGwtTestSuite extends TestCase {
// (1)

    public static Test suite()
    {
        GWTTestSuite suite = new GWTTestSuite( "All Gwt Tests go in here" );
        suite.addTestSuite( DomainBuilderTester.class );
        return suite;
    }

}