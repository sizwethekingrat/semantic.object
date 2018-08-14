/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.domain;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.*;


import semantic.object.domain.implicit.User;

import java.io.File;
import java.util.List;

/**
 *
 * @author Sizwe
 */
public class DomainProcessorTest {
    
    public DomainProcessorTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
        User user = new User();
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    @org.junit.Test
    public void testDictionaryUpload() {    
    
    }
    

    @Test
    public void testThatThatYouCanFindAWord(){
        try {
            ObjectMapper mapper = new ObjectMapper();
            File file = new File("src/main/resources/dictionary-master/dictionary.json");
            //JsonNode dictMap = new HashMap<String,Map>();
            JsonNode dictMap  = mapper.readTree(file);
            System.out.println(dictMap.get("student"));
            System.out.println(dictMap.get("name"));
            System.out.println(dictMap.get("name").get("original_cased_word"));
            System.out.println(dictMap.get("name").get("definitions").iterator().next().get("part_of_speech"));
//                    .forEach(def -> {
//                System.out.println(def.part_of_speech);
//                System.out.println(def.definition);
//            });
	  } catch (Exception e) {
		e.printStackTrace();
	  }
        //Dictionary dict = new Dictionary();
        //dict.getBody().;
    }

    private class Definition {
        String original_cased_word;
        String part_of_speech;
        String definition;
        
        public Definition() {
        }
    }
    
    public class Word{
        
        String original_cased_word;
        String transliterated_word;
        List<Definition> definitions;
    }
}
