/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dom.impl;

import com.google.inject.AbstractModule;
import com.lightbend.lagom.javadsl.server.ServiceGuiceSupport;
import semantic.object.dom.api.DomService;

/**
 *
 * @author Sizwe
 */
public class DomModule  extends AbstractModule implements ServiceGuiceSupport {
  @Override
  protected void configure() {
    bindService(DomService.class, DomServiceImpl.class);
  }
}
