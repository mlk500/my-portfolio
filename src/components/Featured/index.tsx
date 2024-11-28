import { FC } from 'react';
import SectionTitle from '../common/';

// Define an array of technologies used in the project
const technologies = [
    "Spring Boot", "React", "TypeScript", "GCP", "MySQL",
    "TensorFlow", "Redux", "GitHub Actions", "Cloud Run"
];

const FeaturedProject: FC = () => {
    return (
        <section id="featured" className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <SectionTitle>Featured Project</SectionTitle>
                {/* Main project card container with hover effects */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {/* Project header information */}
                    <span className="text-sm text-primary font-semibold mb-2 block">
                        Capstone Project
                    </span>
                    <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
                        Find the Treasure
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                        A gamified cognitive and motor training system for children at Sheba Hospital,
                        featuring an admin interface for games creation and a mobile web-based player app.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="hover:bg-white rounded-lg p-4 transition-colors duration-300">
                            <h4 className="font-semibold mb-4 text-gray-800">Key Features</h4>
                            <ul className="space-y-3">
                                {[
                                    "Spring Boot backend with secure authentication",
                                    "React admin dashboard with TypeScript",
                                    "TensorFlow-powered image recognition",
                                    "GCP cloud infrastructure deployment"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 group">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                                        <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Technologies Used column with interactive tags */}
                        <div className="hover:bg-white rounded-lg p-4 transition-colors duration-300">
                            <h4 className="font-semibold mb-4 text-gray-800">
                                Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action buttons with enhanced hover effects */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/100 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Project
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 border border-primary/100 text-primary rounded-lg hover:bg-primary-50 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;