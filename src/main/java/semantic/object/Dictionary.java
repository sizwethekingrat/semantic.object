/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object;

import java.io.IOException;
import java.util.List;
import semantic.object.dictionary.generator.Definition;
import semantic.object.dictionary.generator.Generator;

/**
 *
 * @author Sizwe
 */
public class Dictionary {

    public List<Definition> definitions;
    
    public Dictionary() throws IOException{
        definitions = Generator.generateDictionary();
    }
    
}
