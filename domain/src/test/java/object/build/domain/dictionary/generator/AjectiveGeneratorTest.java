package object.build.domain.dictionary.generator;

import org.junit.Test;
import object.build.AdjectiveGenerator;
import object.build.Definition;
import object.build.PartOfSpeech;

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
