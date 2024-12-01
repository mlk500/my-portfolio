import { Github, LinkedinIcon, Mail, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        Building the future,
                        <span className="text-primary"> one line of code</span> at a time
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Junior Developer passionate about creating impactful solutions across web, mobile, and data science
                    </p>
                    <div className="flex gap-4">
                        {/* <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700"
                        >
                            <Download className="w-5 h-5" /> Download CV
                        </a> */}
                        <a
                            href="#featured"
                            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-50"
                        >
                            View Work <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-80 h-80 bg-primary/15 rounded-full flex items-center justify-center">
                            <span className="text-6xl">👩🏻‍💻</span>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/mlk500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/malak-yehia-1ba489198/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary"
                                >
                                    <LinkedinIcon className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:malak.y17000@gmail.com"
                                    className="text-gray-600 hover:text-primary"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;