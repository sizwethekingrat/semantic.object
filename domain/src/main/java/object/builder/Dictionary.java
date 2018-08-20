/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.builder;

import java.io.IOException;
import java.util.List;

/**
 *
 * @author Sizwe
 */
public final class Dictionary {

    public List<Definition> definitions;
    
    public Dictionary() throws IOException{
        definitions = Generator.generateDictionary();
    }
    
    public boolean buildLibrary(){
        Generator.generateLibrary(definitions);
        return true;
    }
    
}
