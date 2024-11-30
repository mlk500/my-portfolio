// export interface Certification {
//     title: string;
//     issuer: string;
//     date: string;
//     link?: string;
//     imageSrc?: string;
//     description: string;
//     skills: string[];
//   }
  
//   export interface Project {
//     title: string;
//     description: string;
//     tags: string[];
//     category: string;
//     githubLink?: string;
//     demoLink?: string;
//   }

  // types/index.ts
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  imageSrc?: string;
  description: string;
  skills: string[];
}

export interface NavigationProps {
  onCertificationsClick: () => void;
}

// export type ProjectCategory = 'Fullstack' | 'Mobile' | 'ML/DS/DL' | 'UI/UX';

// export interface Project {
//     id: string;
//     title: string;
//     description: string;
//     category: ProjectCategory;
//     technologies: string[];
//     githubLink?: string;
//     demoLink?: string;
//     image?: string;
// }

// Update ProjectCategory to include Design
export type ProjectCategory = 'Fullstack' | 'Mobile' | 'ML/DS/DL' | 'UI/UX' | 'Design';

// Create a base project interface
export interface BaseProject {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
}

// Regular project interface
export interface StandardProject extends BaseProject {
    category: Exclude<ProjectCategory, 'Design'>;
    githubLink?: string;
    demoLink?: string;
    image?: string;
}

// Figma project interface
export interface FigmaProject extends BaseProject {
    category: 'Design' | 'UI/UX';
    figmaEmbedCode: string;
    figmaLink?: string;
}

// Union type for all projects
export type Project = StandardProject | FigmaProject;