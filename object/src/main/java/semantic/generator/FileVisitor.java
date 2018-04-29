package semantic.generator;
import semantic.generator.DomainBuilder;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Path;

import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;

import static java.nio.file.FileVisitResult.*;

public class FileVisitor
        extends SimpleFileVisitor<Path> {

    // Print information about
    // each type of file.
    @Override
    public FileVisitResult visitFile(Path file,
                                     BasicFileAttributes attr) {

        //Domain domain = new Domain();

        if (file.toString().endsWith("java")){
            DomainBuilder domainBuilder = new DomainBuilder();
            try {
                domainBuilder.createRoot(file.toFile());
                if (attr.isSymbolicLink()) {
                    System.out.format("Symbolic link: %s ", file);
                } else if (attr.isRegularFile()) {
                    System.out.format("Regular file: %s ", file);
                } else {
                    System.out.format("Other: %s ", file);
                }
                System.out.println("(" + attr.size() + "bytes)");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }

        return CONTINUE;
    }

    // Print each directory visited.
    @Override
    public FileVisitResult postVisitDirectory(Path dir,
                                              IOException exc) {
        System.out.format("Directory: %s%n", dir);
        return CONTINUE;
    }

    @Override
    public FileVisitResult visitFileFailed(Path file,
                                           IOException exc) {
        System.err.println(exc);
        return CONTINUE;
    }
}
