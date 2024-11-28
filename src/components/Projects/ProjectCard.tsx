import { FC } from 'react';
import { Project } from '@/types/index';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard: FC<Project> = ({
    title,
    description,
    technologies,
    githubLink,
    demoLink
}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
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
            <div className="flex gap-4">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary/100"
                    >
                        <Github className="w-5 h-5 mr-1" /> Code
                    </a>
                )}
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                        <ExternalLink className="w-5 h-5 mr-1" /> Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;