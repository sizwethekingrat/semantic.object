package semantic.generator;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;
import semantic.object.Domain;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

//this domain builder should be a finite state engine
//best effort to build domain based on files found
public class DomainBuilder {


    public Domain.Root createRoot(File javaFile) throws FileNotFoundException {
        Domain.Root root = new Domain.Root();
        FileInputStream in = new FileInputStream(javaFile);


        CompilationUnit cu = JavaParser.parse(in);
        //System.out.println(cu.toString());
        // visit and print the methods names
        cu.accept(new MethodVisitor(), root);

        //System.out.println(cu.toString());
        cu.getTypes().forEach( typeDeclaration ->     {
            typeDeclaration.getMetaModel().getAllPropertyMetaModels().forEach(propertyMetaModel -> {
                System.out.println(propertyMetaModel.getName());
                System.out.println(propertyMetaModel.getTypeName());
                if (propertyMetaModel.getNodeReference().isPresent())
                    System.out.println(propertyMetaModel.getNodeReference().get().getMetaModelFieldName());
            });
        });
        return root;
    }

    private static class MethodVisitor extends VoidVisitorAdapter<Domain.Root> {
        @Override
        public void visit(MethodDeclaration n, Domain.Root arg) {
            /* here you can access the attributes of the method.
             this method will be called for all methods in this
             CompilationUnit, including inner class methods */
            System.out.println(n.getName());
            System.out.println(n.getAnnotations());
            super.visit(n, arg);
        }
    }
}
