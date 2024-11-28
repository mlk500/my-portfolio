interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
    <h2 className="text-3xl font-bold mb-8 relative">
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-20 h-3 bg-primary-200 -z-0"></span>
    </h2>
);

export default SectionTitle;