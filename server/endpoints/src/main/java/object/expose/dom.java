package object.expose;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Root resource (exposed at "/dom" path)
 */
@Path("/dom")
public class dom {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media rootType.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getIt() {
        return "Got it!";
    }
}
