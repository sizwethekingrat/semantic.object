package object;

import object.build.domain.Thing;

import java.util.List;

public interface DomainGraph<R extends Thing> {
    List<R> list(R root);
    R get(R root);
    R put(R root);
    R post(R root);
    R delete(R root);
}
