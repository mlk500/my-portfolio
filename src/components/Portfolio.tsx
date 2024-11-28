import { FC, useState } from 'react';
import { CategoryProvider } from '@/components/context/CategoryContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import Projects from '@/components/Projects';
import CertificationsModal from './Certifications/Modal';
import { certifications } from '@/data/certifications';

const Portfolio: FC = () => {
    const [showCertifications, setShowCertifications] = useState(false);

    return (
        <CategoryProvider>
            <div className="min-h-screen bg-white">
                <Navigation onCertificationsClick={() => setShowCertifications(true)} />
                <Hero />
                <About />
                <Featured />
                <Projects />
                {showCertifications && (
                    <CertificationsModal
                        onClose={() => setShowCertifications(false)}
                        certifications={certifications}
                    />
                )}
            </div>
        </CategoryProvider>
    );
};

export default Portfolio;