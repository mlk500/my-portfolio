import { FC } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Certification } from '@/types';
import { Button } from "@/components/ui/button";
import certImage from '@/assets/android-cert.jpeg'


interface ModalProps {
    onClose: () => void;
    certifications: Certification[];
}

const CertificationsModal: FC<ModalProps> = ({ onClose, certifications }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6">
        <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 sm:p-6 md:p-8 border-b">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl sm:text-2xl font-bold">Certifications & Courses</h3>
                    <Button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full w-10 h-10 sm:w-8 sm:h-8"
                    >
                        <X className="h-5 w-5 sm:h-4 sm:w-4" />
                    </Button>
                </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 pt-4">
                <div className="space-y-6 sm:space-y-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border-b pb-6 sm:pb-8 last:border-b-0">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                {cert.imageSrc && (
                                    <div className="sm:w-1/3">
                                        <img
                                            src={certImage}
                                            alt="certification"
                                            className="rounded-lg shadow-sm w-full h-auto"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h4 className="font-semibold text-base sm:text-lg mb-2">{cert.title}</h4>
                                    <p className="text-gray-600 text-sm sm:text-base mb-2">
                                        {cert.issuer} • {cert.date}
                                    </p>
                                    <p className="text-gray-600 text-sm sm:text-base mb-4">{cert.description}</p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                        {cert.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline flex items-center gap-2 text-sm sm:text-base min-h-[44px] py-2"
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
    </div>
);

export default CertificationsModal;