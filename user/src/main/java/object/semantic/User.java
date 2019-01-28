package object.semantic;



import object.semantic.user.Account;

import java.util.*;

public class User {
    // Unique ID as a UUID4 following the RFC 7643 requirement

    public String email;

    public Boolean active = false;

    public String userName;

    public String familyName;

    public String middleName;

    public String givenName;

    public List<Account> wallet;

    /**
     * Formats JSON {@link Map} response with {@link User} attributes.
     *
     * @return JSON {@link Map} of {@link User}
     */
    public Map toScimResource(){
        Map<String, Object> returnValue = new HashMap<>();
        List<String> schemas = new ArrayList<>();
        schemas.add("urn:ietf:params:scim:schemas:core:2.0:User");
        returnValue.put("schemas", schemas);
        returnValue.put("active", this.active);
        returnValue.put("userName", this.userName);

        // Names
        Map<String, Object> names = new HashMap<>();
        names.put("familyName", this.familyName);
        names.put("givenName", this.givenName);
        names.put("middleName", this.middleName);
        returnValue.put("name", names);

        // Meta information
        Map<String, Object> meta = new HashMap<>();
        meta.put("resourceType", "User");
        meta.put("meta", ("/scim/v2/Users/" + this.userName));
        returnValue.put("meta", meta);

        return returnValue;
    }

}
