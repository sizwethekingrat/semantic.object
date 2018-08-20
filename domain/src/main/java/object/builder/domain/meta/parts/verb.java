package object.builder.domain.meta.parts;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
import object.builder.domain.meta.word;

/**
 * Created by Sizwe on 2016-08-18.
 */
@word
@Target(value = {ElementType.METHOD})
public @interface verb {
}
