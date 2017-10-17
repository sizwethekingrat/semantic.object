/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.domain;

import semantic.object.domain.meta.parts.auxverbs.is;
import semantic.object.domain.meta.parts.auxverbs.must;
import semantic.object.domain.meta.parts.noun;
import semantic.object.domain.meta.structure.Thing;

/**
 *
 * @author Sizwe
 */

public class User {

        public String name;

        public String password;

        @is
        public boolean register(String name, String password){
            return name.equals(this.name) && password.equals(this.password);
        }

        public boolean login(String name, String password){
            return name.equals(this.name) && password.equals(this.password);
        }
}
