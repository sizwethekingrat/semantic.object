package object.semantic.user.account;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface transact {

    default Transaction transact(Map<String, Object> transaction){
        return new Transaction();
    }
}
