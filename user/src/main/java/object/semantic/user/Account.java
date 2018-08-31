package object.semantic.user;

import object.semantic.User;
import object.semantic.user.account.transact;
import object.semantic.user.account.Transaction;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Account implements transact {
    public List<Transaction> transactions = new ArrayList<>();
    public String name;
    public User user;
}
