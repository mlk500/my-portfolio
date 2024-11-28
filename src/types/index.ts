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

export type ProjectCategory = 'Fullstack' | 'Mobile' | 'ML/DS/DL' | 'UI/UX';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    image?: string;
}