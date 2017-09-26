/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object;

import com.sun.tools.javac.util.Assert;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import semantic.object.dictionary.generator.Definition;
import semantic.object.dictionary.generator.PartOfSpeech;

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
     public void TestGetDictionary() {
         try{
            Dictionary dict = new Dictionary();
            Assert.checkNonNull(dict.definitions);
            Assert.check(dict.definitions.size()>0);
            
            Map<PartOfSpeech, List<Definition>> groupedDict = dict.definitions.stream().collect(Collectors.groupingBy(Definition::getPart_of_speech));
            
            groupedDict.forEach((ent, val) -> {
                System.out.println(ent +": "+val.size());
            });
         } catch (Exception e){
            e.printStackTrace();
            Assert.error();
         }
     }
     
     
}
