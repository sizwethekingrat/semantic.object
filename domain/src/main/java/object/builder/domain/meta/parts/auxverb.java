/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.builder.domain.meta.parts;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
import java.util.Set;
import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.lang.model.element.TypeElement;
import object.builder.domain.meta.word;

/**
 *
 * @author Sizwe
 */
@word
@Target(value = {ElementType.ANNOTATION_TYPE})
public @interface auxverb {
    public enum Type{
        
    }
    
    public class Processor  extends AbstractProcessor{
        @Override
        public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
            return true;
        }
    }
    
}
