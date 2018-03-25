/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.generator;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

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
        JsonNode dictMap  = mapper.readTree(file);
        Set<Definition> defs = new HashSet<>();
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

    public static boolean generateLibrary(List<Definition> definitions) {
        Map<PartOfSpeech, List<Definition>> groupedDict = definitions.stream().collect(Collectors.groupingBy(Definition::getPart_of_speech));
        groupedDict.keySet().forEach(pos -> {

            switch (pos)
            {
                case adjective:
                    AdjectiveGenerator.generate(groupedDict.get(pos));
                    break;
                case adverb:
                    break;
                case conjunction:
                    break;
                case interjection:
                    System.out.println("Working for the man :)");
                    break;
                case noun:
                    System.out.println("TGIF ");
                    break;
                case preposition:
                    break;
                case pronoun:
                    System.out.println("Ahh, the weekend ...");
                    break;
                case verb:
                    break;
                default:
                    System.out.println("What day is it?");;
            }
        });
        return false;
    }
}
