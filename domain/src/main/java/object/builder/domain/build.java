package object.builder.domain;

import com.github.javaparser.ast.CompilationUnit;
import object.builder.Domain;
import object.builder.DomainBuilder;
import object.builder.domain.root.Type;

import java.util.List;
import java.util.stream.Collectors;

public interface build {
    
    default Domain build(DomainBuilder domainBuilder, List<CompilationUnit> compilationUnits){
        Domain domain = new Domain();
        List<CompilationUnit> rootDomains = domainBuilder.findImplicitRootDomains(compilationUnits);
        if (rootDomains.size()>0){
            List<Root> roots = rootDomains.stream()
                    .map(rootCU -> new object.builder.domain.root.build(){}
                    .build(domainBuilder, rootCU, Type.top_level))
                    .collect(Collectors.toList());

            domain.user = roots.stream().filter(root -> root.name.equals("User"))
                    .collect(Collectors.reducing((a, b) -> null)).get();
            domain.roots.addAll(roots.stream().filter(root -> !root.name.equals("User"))
                    .collect(Collectors.toList()));
        }
        return domain;
    }

}
