package semantic.object.domain.meta.parts;

import semantic.object.domain.meta.word;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/**
 * Created by Sizwe on 2016-08-18.
 */
@word
@Target(value = {ElementType.TYPE, ElementType.TYPE_PARAMETER})
public @interface adjective {
}
