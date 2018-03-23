/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dictionary.generator;

/**
 *
 * @author Sizwe
 */
public enum PartOfSpeech{
    
    /**
     *
     */
    noun("noun","thing"),
    verb("verb","action"),
    adjective("adjective","thing.describe"),
    adverb("adverb","action.describe"),
    conjunction("conjunction","join"),
    preposition("preposition","point"),
    interjection("interjection","tone"),
    pronoun("pronoun","name");

    static boolean isPartOfSpeech(String toString) {
        try{
            PartOfSpeech.valueOf(toString);
            return true;
        }catch(IllegalArgumentException e){
            return false;
        } //To change body of generated methods, choose Tools | Templates.
    }
    
    private String name, actual;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getActual() {
        return actual;
    }

    public void setActual(String actual) {
        this.actual = actual;
    }
    
    
 
    PartOfSpeech(String name, String actual){    
        this.name = name;
        this.actual = actual;
              
    }
   
}
