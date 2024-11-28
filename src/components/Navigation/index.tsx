// src/components/Portfolio/Navigation/index.tsx
import React from 'react';
import { Button } from '../ui/button';
import { Award } from 'lucide-react'
interface NavigationProps {
    onCertificationsClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCertificationsClick }) => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Malak Yehia</span>
                <div className="flex gap-6 items-center">
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
        </div>
    </nav>
);


export default Navigation;