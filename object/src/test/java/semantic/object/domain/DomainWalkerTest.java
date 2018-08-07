package semantic.object.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.Ignore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import semantic.generator.DomainFileVisitor;
import semantic.object.Domain;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;


/**
 * Created by Sizwe on 2017-10-15.
 */
public class DomainWalkerTest {

    private static Logger logger = LoggerFactory.getLogger(DomainWalkerTest.class.getName());
    @Test
    @Ignore
    public void testBasicImplicitDomain() throws FileNotFoundException {
        File pathIn = new File(".\\src\\test\\java\\semantic\\object\\domain\\implicit");
        File pathOut = new File(".\\target");
        File domainJSON = new File(".\\target\\domain.json");
        DomainFileVisitor pf = new DomainFileVisitor(pathIn, pathOut);
        try {
            Files.walkFileTree(pathIn.toPath(), pf);
            pf.buildDomain();
            ObjectMapper mapper = new ObjectMapper();
            Domain obj = mapper.readValue(domainJSON, Domain.class);
            System.out.println(obj.roots.size());
            logger.info(String.valueOf(obj.roots.size()));
            assertNotNull(obj.roots);
        } catch (Exception e) {
            e.printStackTrace();
            logger.info(e.getLocalizedMessage());
            fail();
        }
    }

    private static class MethodVisitor extends VoidVisitorAdapter<Void> {
        @Override
        public void visit(MethodDeclaration n, Void arg) {
            /* here you can access the attributes of the method.
             this method will be called for all methods in this
             CompilationUnit, including inner class methods */
            System.out.println(n.getName());
            System.out.println(n.getAnnotations());
            super.visit(n, arg);
        }
    }
}
