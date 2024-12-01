import { FC } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { SystemDetails } from '@/data/systems';
import diagram from '@/assets/systems-diagram.png'


interface SystemsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    systems: SystemDetails[];
}

const SystemsDialog: FC<SystemsDialogProps> = ({ open, onOpenChange, systems }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[98vh] sm:max-h-[90vh] flex flex-col w-full sm:w-[95vw] p-4 sm:p-6">
                <DialogHeader className="mb-4">
                    <DialogTitle className="text-lg sm:text-xl">
                        Find the Treasure - System Architecture
                    </DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2 sm:pr-6 -mr-2 sm:-mr-6">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {systems.map((system) => (
                                <div key={system.title} className="p-3 sm:p-4 border rounded-lg">
                                    <h3 className="text-base sm:text-lg font-semibold break-words">{system.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm">{system.description}</p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                                        {system.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="text-sm font-medium text-gray-700">Key Features</h4>
                                        <ul className="mt-1.5 space-y-1.5">
                                            {system.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-row gap-4 mt-3">
                                        {system.githubLink && (
                                            <a
                                                href={system.githubLink}
                                                className="text-primary hover:underline inline-flex items-center text-sm min-h-[44px] py-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Code <ChevronRight className="w-4 h-4 ml-1" />
                                            </a>
                                        )}
                                        {system.demoLink && (
                                            <a
                                                href={system.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-primary hover:underline text-sm min-h-[44px] py-2"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1" /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 sm:mt-6 flex justify-center">
                            <img
                                src={diagram}
                                alt="System Architecture Diagram"
                                className="rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SystemsDialog;