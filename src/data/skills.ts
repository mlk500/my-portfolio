// src/data/skills.ts

import { Project, ProjectCategory } from "@/types";

export interface Skill {
    iconName: string;
    title: string;
    description: string;
    category: ProjectCategory;
}

export const skills: Skill[] = [
    {
        iconName: 'Globe',
        title: "Full Stack & Backend",
        description: "Frontend and backend development with modern technologies",
        category: "Fullstack"
    },
    {
        iconName: 'Code',
        title: "Mobile Dev",
        description: "Creating native experiences for Android and iOS",
        category: "Mobile"
    },
    {
        iconName: 'Brain',
        title: "ML & Data Science",
        description: "Implementing ML models and analyzing complex datasets",
        category: "ML/DS/DL"
    },
    {
        iconName: 'Palette',
        title: "UI/UX Design",
        description: "Designing intuitive interfaces with Figma",
        category: "UI/UX"
    }
];