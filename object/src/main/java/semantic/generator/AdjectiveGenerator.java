package semantic.generator;

import java.util.List;

import org.eclipse.jdt.core.dom.*;

/**
 * Created by Sizwe on 2017-09-28.
 */
public class AdjectiveGenerator {
    public static void generate(List<Definition> adjectives) {
        AST ast = AST.newAST(AST.JLS3);
        adjectives.forEach(adj -> {

            CompilationUnit cu = ast.newCompilationUnit();

            PackageDeclaration p1 = ast.newPackageDeclaration();
            p1.setName(ast.newName(new String[] { "java", "stuffs", "annotation" }));
            cu.setPackage(p1);

            ImportDeclaration id = ast.newImportDeclaration();
            id.setName(ast.newName(new String[] { "java", "lang", "annotation","ElementType" }));
            cu.imports().add(id);

            ImportDeclaration id2 = ast.newImportDeclaration();
            id2.setName(ast.newName(new String[] { "java", "lang", "annotation","Target" }));
            cu.imports().add(id2);

//            TypeDeclaration td = ast.newTypeDeclaration();
//            td.setName(ast.newSimpleName(adj.original_cased_word));
//            TypeParameter tp = ast.newTypeParameter();
//            tp.setName(ast.newSimpleName("X"));
//            td.typeParameters().add(tp);
//            cu.types().add(td);

            AnnotationTypeDeclaration annotation = ast.newAnnotationTypeDeclaration();
            annotation.setName(ast.newSimpleName(adj.original_cased_word));

            final NormalAnnotation eventHandlerAnnotation = ast.newNormalAnnotation();
            eventHandlerAnnotation.setTypeName(ast.newName("Target"));
            eventHandlerAnnotation.values().add(createAnnotationMember(ast, "value", "ElementType"));
            //eventHandlerAnnotation.values().add(createQualifiedAnnotationMember(ast, "Target", "IsWorkbenchTest", "Blab"));
//            cu.structuralPropertiesForType().add(eventHandlerAnnotation);
            annotation.modifiers().add(eventHandlerAnnotation);
            cu.types().add(annotation);


//            MethodDeclaration md = ast.newMethodDeclaration();
//            td.bodyDeclarations().add(md);
//
//            Block block = ast.newBlock();
//            md.setBody(block);
//
//            MethodInvocation mi = ast.newMethodInvocation();
//            mi.setName(ast.newSimpleName("x"));
//
//            ExpressionStatement e = ast.newExpressionStatement(mi);
//            block.statements().add(e);

            System.out.println(cu);
        } );
    }

    protected static MemberValuePair createQualifiedAnnotationMember(final AST ast, final String name, final String value, final String value2) {
        final MemberValuePair mV = ast.newMemberValuePair();
        mV.setName(ast.newSimpleName(name));
        final TypeLiteral typeLiteral = ast.newTypeLiteral();
        final QualifiedType newQualifiedName = ast.newQualifiedType(ast.newSimpleType(ast.newSimpleName(value)), ast.newSimpleName(value2));
        typeLiteral.setType(newQualifiedName);
        mV.setValue(typeLiteral);
        return mV;
    }

    protected static MemberValuePair createAnnotationMember(final AST ast, final String name, final String value) {

        final MemberValuePair mV = ast.newMemberValuePair();
        mV.setName(ast.newSimpleName(name));
        final TypeLiteral typeLiteral = ast.newTypeLiteral();
        //ast.newE
        typeLiteral.setType(ast.newSimpleType(ast.newSimpleName(value)));
        mV.setValue(typeLiteral);
        return mV;
    }
}
