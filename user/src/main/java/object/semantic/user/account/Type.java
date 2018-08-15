package object.semantic.user.account;

public enum Type {
    CARD("Card","Pay using your bank credit or cheque card"),
    ONLINE("Online (Paypal)","Pay using Paypal or other online payment system"),
    EFT("Electronic Funds Transfer","Pay using a direct deposit into our bank account with a reference we provide to you"),
    CRYPTOCURRENCY("Cryptocurrency","Pay using one of our supported cryptocurrencies");

    public String name, description;

    Type(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
