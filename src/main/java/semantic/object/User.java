/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object;

import semantic.object.domain.meta.parts.auxverbs.is;
import semantic.object.domain.meta.parts.auxverbs.must;
import semantic.object.domain.meta.parts.noun;
import semantic.object.domain.meta.structure.Thing;

/**
 *
 * @author Sizwe
 */
@noun(type=noun.Type.PROPER_NOUN)
public class User {
    
    public class user {
        @must.have
        @noun(type=noun.Type.ORDINARY)
        public String[] names;

        @must.have
        @noun(type=noun.Type.ORDINARY)
        public String surname;
    }
}
