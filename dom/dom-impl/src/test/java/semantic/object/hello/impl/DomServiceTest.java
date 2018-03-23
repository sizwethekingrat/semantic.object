/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.hello.impl;

import static com.lightbend.lagom.javadsl.testkit.ServiceTest.defaultSetup;
import static com.lightbend.lagom.javadsl.testkit.ServiceTest.withServer;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.junit.Assert.assertEquals;

import org.junit.Ignore;
import org.junit.Test;
import semantic.object.dom.api.DomService;
import semantic.object.dom.api.Domain;

/**
 *
 * @author Sizwe
 */
public class DomServiceTest {
  @Ignore
  @Test
  public void shouldReturnDomDescriptor() throws Exception {
    withServer(defaultSetup(), server -> {
      DomService service = server.client(DomService.class);

      Domain msg1 = service.getDom().invoke().toCompletableFuture().get(35, SECONDS);
      
      System.out.println(msg1);
      
      assertEquals("register", msg1.user.events.get(0).name);      
    });
  }
}
