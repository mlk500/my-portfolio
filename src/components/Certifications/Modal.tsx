import { FC } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Certification } from '@/types';
import { Button } from "@/components/ui/button";

interface ModalProps {
    onClose: () => void;
    certifications: Certification[];
}

const CertificationsModal: FC<ModalProps> = ({ onClose, certifications }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Certifications & Courses</h3>
                <Button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full w-8 h-8"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            {/* Certifications list container */}
            <div className="space-y-8">
                {certifications.map((cert, index) => (
                    <div key={index} className="border-b pb-8">
                        {/* Flexible layout for certification content */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Optional certificate image */}
                            {cert.imageSrc && (
                                <div className="md:w-1/3">
                                    <img
                                        src={cert.imageSrc}
                                        alt={cert.title}
                                        className="rounded-lg shadow-sm"
                                    />
                                </div>
                            )}
                            {/* Certificate details section */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                                <p className="text-gray-600 mb-2">
                                    {cert.issuer} • {cert.date}
                                </p>
                                <p className="text-gray-600 mb-4">{cert.description}</p>
                                {/* Skills tags section */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                {/* Conditional rendering of certificate link */}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline flex items-center gap-2"
                                    >
                                        View Certificate <ChevronRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default CertificationsModal;