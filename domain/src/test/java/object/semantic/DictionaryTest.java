/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.semantic;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.junit.*;

import static org.junit.Assert.*;
import object.build.Definition;
import object.build.Dictionary;
import object.build.PartOfSpeech;

/**
 *
 * @author Sizwe
 */
public class DictionaryTest {
    
    public DictionaryTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
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

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
     @Test
     @Ignore
     public void TestGetDictionary() {
         try{
            Dictionary dict = new Dictionary();
            assertNotNull(dict.definitions);
            assertTrue(dict.definitions.size()>0);
            
            Map<PartOfSpeech, List<Definition>> groupedDict = dict.definitions.stream().collect(Collectors.groupingBy(Definition::getPart_of_speech));
            
            groupedDict.forEach((ent, val) -> {
                System.out.println(ent +": "+val.size());
            });

             assertTrue(dict.buildLibrary());

             assertTrue(true);
         } catch (Exception e){
            e.printStackTrace();
         }
     }
     
     
}
