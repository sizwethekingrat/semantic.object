package semantic.object;


import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;
import org.apache.maven.project.MavenProject;
import semantic.generator.DomainFileVisitor;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;


@Mojo(name="domain", defaultPhase = LifecyclePhase.PROCESS_SOURCES)
public class DomainMojo extends AbstractMojo
{

    @Parameter(defaultValue = "${project.build.directory}", required = true)
    private File outputDirectory;

    @Parameter(defaultValue = "${project}", required = true, readonly = true)
    private MavenProject project;

    public void execute()
        throws MojoExecutionException
    {
        File path = project.getBasedir();
        DomainFileVisitor pf = new DomainFileVisitor(project.getBasedir(), outputDirectory);
        try {
            Files.walkFileTree(path.toPath(), pf);
            pf.buildDomain();
        } catch (IOException e) {
            throw new MojoExecutionException( "Error finding dir " + path, e );
        }

    }
}
