import { FC } from 'react';
import { FigmaProject, Project } from '@/types/index';
import { Github, ExternalLink, Figma } from 'lucide-react';

const isFigmaProject = (project: Project): project is FigmaProject => {
    return 'figmaEmbedCode' in project;
};

const ProjectCard: FC<Project> = (project) => {
    const { title, description, technologies } = project;

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
            {/* Title and Description */}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 whitespace-pre-line">{description}</p>

            {/* Technologies tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-primary/15 text-primary/100 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Conditional rendering for Figma projects vs regular projects */}
            {isFigmaProject(project) ? (
                <>
                    <div className="relative w-full pt-[56.25%] mt-4">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            dangerouslySetInnerHTML={{
                                __html: project.figmaEmbedCode.replace(
                                    'width="800" height="450"',
                                    'width="100%" height="100%"'
                                )
                            }}
                        />
                    </div>
                    {project.figmaLink && (
                        <div className="mt-4">
                            <a
                                href={project.figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-600 hover:text-primary"
                            >
                                <Figma className="w-5 h-5 mr-1" /> View in Figma
                            </a>
                        </div>
                    )}
                </>

            ) : (
                <div className="flex gap-4">
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-primary/100"
                        >
                            <Github className="w-5 h-5 mr-1" /> Code
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-primary"
                        >
                            <ExternalLink className="w-5 h-5 mr-1" /> Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;