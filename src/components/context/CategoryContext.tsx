// src/context/CategoryContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ProjectCategory } from '@/types';

interface CategoryContextType {
    selectedCategory: ProjectCategory | null;
    setSelectedCategory: (category: ProjectCategory | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};