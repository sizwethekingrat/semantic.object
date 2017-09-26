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
    noun("noun"),
    verb("verb"),
    adjective("adjective"),
    adverb("adverb"),
    conjunction("conjunction"),
    preposition("preposition"),
    interjection("interjection"),
    pronoun("pronoun");

    static boolean isPartOfSpeech(String toString) {
        try{
            PartOfSpeech.valueOf(toString);
            return true;
        }catch(IllegalArgumentException e){
            return false;
        } //To change body of generated methods, choose Tools | Templates.
    }
    
 
    PartOfSpeech(String name){    
    }
   
}
