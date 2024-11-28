import { FC } from 'react';
import { Code2, Smartphone, Brain, Palette } from 'lucide-react';
import { Skill } from '@/data/skills';
import { useCategory } from '@/components/context/CategoryContext';

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'Globe':
            return <Code2 className="w-8 h-8" />;
        case 'Code':
            return <Smartphone className="w-8 h-8" />;
        case 'Brain':
            return <Brain className="w-8 h-8" />;
        case 'Palette':
            return <Palette className="w-8 h-8" />;
        default:
            return null;
    }
};

const SkillCard: FC<Skill> = ({ iconName, title, description, category }) => {
    const { setSelectedCategory } = useCategory();

    const handleClick = () => {
        setSelectedCategory(category);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            onClick={handleClick}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
            <div className="text-primary">
                {getIconComponent(iconName)}
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default SkillCard;