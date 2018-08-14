package object.semantic.user.account;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface transact {
    public List<Transaction> transactions = new ArrayList<>();
    default Transaction transact(Map<String, Object> transaction){
        return new Transaction();
    }
}
