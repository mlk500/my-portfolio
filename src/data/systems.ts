// export interface SystemDetails {
//     title: string;
//     description: string;
//     technologies: string[];
//     githubLink?: string;
//     demoLink?: string;
// }

// export const systems: SystemDetails[] = [
//     {
//         title: "Admin Interface",
//         description: "Web-based admin platform for game creation and management",
//         technologies: ["React", "TypeScript"],
//         githubLink: "",
//         demoLink: "https://admin-platform.onrender.com"
//     },
//     {
//         title: "Backend System",
//         description: "Server handling game logic, user management, and data storage",
//         technologies: ["Java", "Spring Boot", "MySQL", "GCP"],
//         githubLink: "https://github.com/mlk500/backend-gcp-clone"
//     },
//     {
//         title: "Image Recognition Service",
//         description: "AI service for processing and recognizing game images",
//         technologies: ["TensorFlow", "FastAPI", "GCP"],
//         githubLink: "https://github.com/mlk500/fastAPI-gcr-clone"
//     },
//     {
//         title: "Mobile Web Player",
//         description: "Flutter-based player application for gameplay",
//         technologies: ["Flutter", "Dart", "Web"],
//         githubLink: "",
//         demoLink: "https://treasure-hunt-player.web.app"
//     }
// ];

// src/data/systems.ts
export interface SystemDetails {
    title: string;
    description: string;
    myRole?: string;
    technologies: string[];
    features: string[];
    githubLink?: string;
    demoLink?: string; 
 }
 
 export const systems: SystemDetails[] = [
    {
        title: "Admin Interface", 
        description: "A web-based admin platform where hospital staff create and manage therapeutic games, with multi-level authorization for different departments",
        myRole: "Led backend development and contributed to frontend implementation",
        technologies: ["React", "TypeScript"],
        features: [
            "Game creation system with units, locations, and tasks",
            "Multi-level admin authorization (Main Admin & Department Admins)",
            "Secure authentication and role-based access control",
        ],
        githubLink: "",
        demoLink: "https://admin-platform.onrender.com"
    },
    {
        title: "Backend System",
        description: "Server handling game logic, user management, and data storage, with secure authentication and cloud infrastructure",
        myRole: "Designed and implemented core backend architecture",
        technologies: ["Java", "Spring Boot", "MySQL", "GCP"],
        features: [
            "Secure authentication and authorization",
            "Data persistence and cloud storage",
            "Integration with cloud services",
            "QR code generation and management",
            "Automated deployment with CI/CD",
        ],
        githubLink: "https://github.com/mlk500/backend-gcp-clone"
    },
    {
        title: "Object Recognition Service",
        description: "AI service for processing and recognizing game objects in real-time",
        myRole: "Implemented model training and deployment pipeline",
        technologies: ["TensorFlow", "FastAPI", "GCP"],
        features: [
            "MobileNetV2 model with transfer learning",
            "Dynamic model retraining API",
            "Real-time prediction API",
            "Caching and model management",
            "Automated deployment with CI/CD",        ],
        githubLink: "https://github.com/mlk500/fastAPI-gcr-clone"
    },
    {
        title: "Mobile Web Player",
        description: "Flutter-based web application for children to play the therapeutic games",
        myRole: "Contributed to backend integrations",
        technologies: ["Flutter", "Dart", "Web"],
        features: [
            "QR code scanning",
            "Real-time object recognition",
            "Progress bar",
            "Interactive UI design",
        ],
        githubLink: "",
        demoLink: "https://treasure-hunt-player.web.app"
    }
 ];