import { FC, useState } from 'react';
import SectionTitle from '../common/';
import SystemsDialog from './SystemsDialog';
import { systems } from '@/data/systems';

const technologies = [
    "Spring Boot", "React", "GCP", "MySQL",
    "TensorFlow", "FastAPI", "Flutter", "GitHub Actions", "Cloud Run"
];

const FeaturedProject: FC = () => {
    const [showSystemDetails, setShowSystemDetails] = useState(false);
    return (
        <section id="featured" className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <SectionTitle>Featured Project</SectionTitle>
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-sm text-primary font-semibold mb-2 block">
                        Capstone Project
                    </span>
                    <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
                        Find the Treasure
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                        "Find the Treasure" is a gamified cognitive and motor training system for children at Sheba Hospital.
                        It transforms physical therapy into an engaging treasure hunt where children move around the hospital,
                        scanning QR codes and identifying objects to solve therapeutic tasks.

                        The system consists of two main applications: an admin dashboard where medical staff create customized
                        therapeutic games, and a mobile web player app where children engage with these games. Each game is
                        composed of units combining locations, objects, and therapeutic tasks, making physical therapy both
                        interactive and measurable.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="hover:bg-white rounded-lg p-6"> {/* Increased padding */}
                            <h4 className="font-semibold mb-4 text-gray-800">Key Features</h4>
                            <ul className="space-y-4"> {/* Increased vertical spacing between items */}
                                {[
                                    "Medical staff create customized therapeutic games through an admin dashboard",
                                    "Each game consists of units combining locations, objects, and therapeutic tasks",
                                    "Children use the mobile web app to find locations using hints",
                                    "Therapeutic tasks appear upon finding correct objects",
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3"> {/* Increased gap between bullet and text */}
                                        <div className="min-w-[8px] h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                                        <span className="text-gray-600 group-hover:text-primary transition-colors duration-300 flex-1"> {/* Added flex-1 to allow text wrapping */}
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

                    <div className="centerflex gap-4">
                        <button
                            onClick={() => setShowSystemDetails(true)}
                            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/100 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Systems
                        </button>

                        {/* <a href="your-github-link"
                            className="px-6 py-3 border border-primary/100 text-primary rounded-lg hover:bg-primary-50 transform hover:-translate-y-0.5 transition-all duration-300">
                            GitHub Repository
                        </a> */}
                    </div>

                    <SystemsDialog
                        open={showSystemDetails}
                        onOpenChange={setShowSystemDetails}
                        systems={systems}
                    />
                </div>
            </div>
        </section >
    );
};

export default FeaturedProject;