/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.build.domain.meta.structure;

import java.util.List;



/**
 *
 * @author Sizwe
 */
public interface Context {
    
    /**
     *
     */
    List<String> contextStrings = null;
    
    
    List<String> contextualise();
}
