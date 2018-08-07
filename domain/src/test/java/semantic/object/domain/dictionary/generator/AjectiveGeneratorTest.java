package semantic.object.domain.dictionary.generator;

import org.junit.Test;
import semantic.generator.AdjectiveGenerator;
import semantic.generator.Definition;
import semantic.generator.PartOfSpeech;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Sizwe on 2017-10-01.
 */
public class AjectiveGeneratorTest {

    @Test
    public void testGenerator(){
        Definition def = new Definition("Angry", PartOfSpeech.adjective.getName());
        List<Definition> defs = new ArrayList<>();
        defs.add(def);
        AdjectiveGenerator.generate(defs);
    }
}
