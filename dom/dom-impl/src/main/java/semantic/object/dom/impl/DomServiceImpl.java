/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dom.impl;

import akka.NotUsed;
import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.visitor.GenericVisitorAdapter;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;
import semantic.object.dom.api.DomService;
import com.lightbend.lagom.javadsl.api.ServiceCall;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import static java.util.concurrent.CompletableFuture.completedFuture;
import java.util.logging.Level;
import java.util.logging.Logger;
import semantic.object.dom.api.Domain;
import semantic.object.dom.api.Domain.Root;
import semantic.object.dom.api.Domain.Root.Event;
import semantic.object.dom.api.RootType;

public class DomServiceImpl implements DomService {

    @Override
    public ServiceCall<NotUsed, Domain> getDom() {

        FileInputStream in = null;
        try {
            //so first we'll get all the source files to inspect
            in = new FileInputStream("E:/dev/NetBeansProjects/semantic.object/src/test/java/semantic/object/domain/User.java");
            CompilationUnit cu = JavaParser.parse(in);
            Domain domain = new Domain();
            //we'll start by creating the user root
            Root user;
            user = new Domain.Root();
            
            user.name = "user";
            user.type = RootType.user;
            
            user = cu.accept(new MethodVisitor(), user);
            domain.user = user; 
            //then we'll build up the rest of the domain
            
            //and finally return all
            return request -> completedFuture(domain);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(DomServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new RuntimeException(ex); 
        } finally {
            try {
                in.close();
            } catch (IOException ex) {
                Logger.getLogger(DomServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                throw new RuntimeException(ex); 
            }
        }
    }

    public static class MethodVisitor extends GenericVisitorAdapter<Root, Root> {

        @Override
        public Root visit(MethodDeclaration n, Root arg) {
            
            Event event = new Root.Event();
            
            event.name = n.getName().asString();
            //System.out.println(n.getAnnotations());
            arg.events.add(event);
            super.visit(n, arg);
            return arg;
        }
    }
}
