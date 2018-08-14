package semantic.generator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javaparser.ast.CompilationUnit;
import semantic.object.Domain;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;

import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import static java.nio.file.FileVisitResult.*;

public class DomainFileVisitor
        extends SimpleFileVisitor<Path> {

    private final static Logger LOGGER = Logger.getLogger(DomainFileVisitor.class.getName());

    private List<CompilationUnit> compilationUnitList;

    private DomainBuilder domainBuilder;

    private File fileWriteFolder;

    public DomainFileVisitor(File javaSourceFolder, File fileWriteFolder){
        LOGGER.info("reading from: " + javaSourceFolder.getAbsolutePath());
        this.fileWriteFolder = fileWriteFolder;
        compilationUnitList = new ArrayList<>();
        domainBuilder = new DomainBuilder(javaSourceFolder);
    }

    @Override
    public FileVisitResult visitFile(Path file,
                                     BasicFileAttributes attr) {

        if (file.toString().endsWith("java")){
            try {
                compilationUnitList.add(domainBuilder.createCompilationUnit(file.toFile()));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        return CONTINUE;
    }

    private void writeDomain(Domain domain) {
        if ( !fileWriteFolder.exists() )
        {
            fileWriteFolder.mkdirs();
        }

        File touch = new File( fileWriteFolder, "domain.json" );
        ObjectMapper mapper = new ObjectMapper();
        try
        {
            mapper.writeValue(touch, domain);
        }
        catch ( IOException e )
        {
            throw new RuntimeException( "Error creating file " + touch, e );
        }
    }


    public void buildDomain() throws NoSuchFileException {
        if (compilationUnitList.size()>0) {
            Domain domain = domainBuilder.createDomain(compilationUnitList);
            writeDomain(domain);
        } else {
            throw new NoSuchFileException("No java files found to turn into domain");
        }
    }
}
