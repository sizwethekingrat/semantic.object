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
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 *
 * @author Sizwe
 */
public class Generator {
    
    public static List<Definition> generateDictionary() throws IOException{
        return getGenerated();
    }

    private static List<Definition> getGenerated() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File file = new File("./src/main/resources/dictionary-master/dictionary.json");
            //JsonNode dictMap = new HashMap<String,Map>();
        JsonNode dictMap  = mapper.readTree(file);
        Set<Definition> defs = new HashSet<>();
                    System.out.println(dictMap.get("student"));
            System.out.println(dictMap.get("name"));
            System.out.println(dictMap.get("name").get("original_cased_word"));
            System.out.println(dictMap.get("name").get("definitions").iterator().next().get("part_of_speech"));
        dictMap.forEach(word -> {
              word.get("definitions").elements().forEachRemaining(subdef -> {
                  
                  if (PartOfSpeech.isPartOfSpeech(subdef.get("part_of_speech").toString().replaceAll("\"", ""))){
                    Definition def = new Definition(word.get("original_cased_word").toString().replaceAll("\"", ""),subdef.get("part_of_speech").toString().replaceAll("\"", ""));
                    if (defs.contains(def)){
                        def = defs.stream().filter(def::equals).findAny().orElse(def);
                    } else {
                        defs.add(def);
                    }
                    def.definition.add(subdef.get("definition").toString().replaceAll("\"", ""));
                  }
            });
        });
        List<Definition> defsList = new ArrayList<>();
        defsList.addAll(defs);
        return defsList;
    }
}
