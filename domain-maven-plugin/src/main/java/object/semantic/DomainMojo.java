package object.semantic;


import org.apache.maven.model.Resource;
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;
import org.apache.maven.project.MavenProject;
import object.build.DomainFileVisitor;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.logging.Logger;


@Mojo(name="domain", defaultPhase = LifecyclePhase.PROCESS_SOURCES)
public class DomainMojo extends AbstractMojo
{

    private final static Logger LOGGER = Logger.getLogger(DomainMojo.class.getName());

    @Parameter(defaultValue = "${project.build.directory}", required = true)
    private File outputDirectory;

    @Parameter(defaultValue = "${project}", required = true, readonly = true)
    private MavenProject project;

    public void execute()
        throws MojoExecutionException
    {
        File path = project.getBasedir();
        DomainFileVisitor pf = new DomainFileVisitor((List<String>) project.getCompileSourceRoots());
        try {
            LOGGER.info("__________________");
            LOGGER.info("      DOMIAN      ");
            LOGGER.info("__________________");
            Files.walkFileTree(path.toPath(), pf);
            Resource resource = (Resource) project.getResources().get(0);
            LOGGER.info(resource.toString());
            File domainDescriptorFile = pf.writeDomain(pf.buildDomain(), new File(resource.getDirectory()));
        } catch (IOException e) {
            throw new MojoExecutionException( "Error finding dir " + path, e );
        }

    }
}
