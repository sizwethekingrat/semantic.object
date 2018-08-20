/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package object.builder;

import object.builder.domain.Root;
import object.builder.domain.build;

import java.util.ArrayList;
import java.util.List;

public class Domain {
    //user object is mandatory and built into framework
    public Root user;
    //the application/game/business domains
    public List<Root> roots = new ArrayList<>();


    @Override
    public String toString() {
        return "domain:{" +
                "user:" + user +
                ", roots:" + roots +
                '}';
    }
}
