import { FC } from "react";
import SectionTitle from "../common";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types/index";
import { useCategory } from "../context/CategoryContext";

const Projects: FC = () => {
    const categories: ProjectCategory[] = ['Fullstack', 'Mobile', 'ML/DS/DL', 'UI/UX'];
    const { selectedCategory, setSelectedCategory } = useCategory();

    const filteredProjects = selectedCategory
        ? projects.filter(p => p.category === selectedCategory)
        : projects;

    return (
        // <section id="projects">
        <section id="projects" className="py-20 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-gray-200'}`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;