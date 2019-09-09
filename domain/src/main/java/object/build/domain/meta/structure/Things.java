/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.build.domain.meta.structure;

import java.util.Collection;

/**
 *
 * @author Sizwe
 */
public interface Things {
    
    Collection<? extends Thing> getAll();
    
    Collection<? extends Thing> search();
    
    Thing get(String name);
}
