package object.build.domain.meta.parts;

import object.build.domain.meta.word;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/**
 * Created by Sizwe on 2016-08-18.
 */
@word
@Target(value = {ElementType.TYPE, ElementType.TYPE_PARAMETER})
public @interface adjective {
}
