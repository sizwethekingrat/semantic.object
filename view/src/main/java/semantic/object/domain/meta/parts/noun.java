package semantic.object.domain.meta.parts;

import semantic.object.domain.meta.word;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/**
 * Created by Sizwe on 2016-08-18.
 */
@word
@Target(value = {ElementType.TYPE, ElementType.FIELD, ElementType.TYPE_PARAMETER, ElementType.LOCAL_VARIABLE})
public @interface noun {
    Type type();
    public enum Type {
        PRONOUN, PROPER_NOUN, ADJECTIVE, ORDINARY;
    }
}
