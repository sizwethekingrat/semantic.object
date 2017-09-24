/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dictionary.generator;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Sizwe
 */
public class Generator {
    public static List<Definition> generate() throws IOException{
        return getGenerated();
    }

    private static List<Definition> getGenerated() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File file = new File("./src/main/resources/dictionary-master/dictionary.json");
            //JsonNode dictMap = new HashMap<String,Map>();
        JsonNode dictMap  = mapper.readTree(file);
        List<Definition> defs = new ArrayList<>();
        dictMap.forEach(word -> {
            
            Definition def = new Definition();
            def.original_cased_word = word.get("original_cased_word").asText();
            def.original_cased_word = word.get("original_cased_word");
        });
    }
}
