import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Award, Menu, X } from 'lucide-react';

interface NavigationProps {
    onCertificationsClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCertificationsClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Malak Yehia</span>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="hidden md:flex gap-6 items-center">
                        <a href="#about" className="text-gray-600 hover:text-primary">About</a>
                        <a href="#featured" className="text-gray-600 hover:text-primary">Featured Project</a>
                        <a href="#projects" className="text-gray-600 hover:text-primary">Projects</a>
                        <Button
                            onClick={onCertificationsClick}
                            className="text-gray-600 hover:text-primary flex items-center gap-2"
                        >
                            <Award className="w-4 h-4" />
                            Certifications
                        </Button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2">
                        <div className="flex flex-col gap-4 items-center">
                            <a
                                href="#about"
                                className="text-gray-600 hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#featured"
                                className="text-gray-600 hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Featured Project
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-600 hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </a>
                            <Button
                                onClick={() => {
                                    onCertificationsClick();
                                    setIsMenuOpen(false);
                                }}
                                className="text-gray-600 hover:text-primary flex items-center gap-2 justify-start py-2"
                            >
                                <Award className="w-4 h-4" />
                                Certifications
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;