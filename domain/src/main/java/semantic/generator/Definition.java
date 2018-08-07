/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
/**
 *
 * @author Sizwe
 */
public class Definition {
        String original_cased_word;
        PartOfSpeech part_of_speech;
        List<String> definition;    

    public Definition(String original_cased_word, String part_of_speech) {
        try{
        this.original_cased_word = original_cased_word;
        this.part_of_speech = PartOfSpeech.valueOf(part_of_speech);
        definition = new ArrayList<>();
        } catch (IllegalArgumentException e){
            System.out.println("HereWith the bad part of speech: " + part_of_speech);
            throw e;
        }
    }

    public String getOriginal_cased_word() {
        return original_cased_word;
    }

    public void setOriginal_cased_word(String original_cased_word) {
        this.original_cased_word = original_cased_word;
    }

    public PartOfSpeech getPart_of_speech() {
        return part_of_speech;
    }

    public void setPart_of_speech(PartOfSpeech part_of_speech) {
        this.part_of_speech = part_of_speech;
    }

    public List<String> getDefinition() {
        return definition;
    }

    public void setDefinition(List<String> definition) {
        this.definition = definition;
    }
    
    

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 83 * hash + Objects.hashCode(this.original_cased_word);
        hash = 83 * hash + Objects.hashCode(this.part_of_speech);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Definition other = (Definition) obj;
        if (!Objects.equals(this.original_cased_word, other.original_cased_word)) {
            return false;
        }
        if (!Objects.equals(this.part_of_speech, other.part_of_speech)) {
            return false;
        }
        return true;
    }

}
