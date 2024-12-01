import { FC } from 'react';
import { skills } from '@/data/skills';
import SectionTitle from '../common';
import SkillCard from './SkillCard';

const About: FC = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <SectionTitle>About Me</SectionTitle>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 flex items-center">
                        <p className="text-lg text-gray-600">
                            As a recent graduate, I bring a unique blend of theoretical knowledge and practical experience in software development. My journey has taken me through various domains of technology, from building responsive web applications to developing machine learning models.
                        </p>
                        {/* <p className="text-lg text-gray-600">
                            I'm particularly passionate about creating solutions that make a real impact. This drive led me to develop projects like "Find the Treasure," a cognitive training system for children at Sheba Hospital, where I led backend development and contributed to the frontend implementation.
                        </p> */}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;