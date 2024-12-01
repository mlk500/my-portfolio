import { Project } from '@/types/index';
import { figmaEmbeds } from './figmaEmbeds';
// export const categories: ProjectCategory[] = [
//     'fullstack',
//     'mobile',
//     'ml',
//     'uiux'
// ];

export const projects: Project[] = [
    {
        id: "1",
        title: "MobileNetV2 Vision Model",
        description: "Built and experimented with MobileNetV2 architecture on CIFAR-10 dataset, exploring various modifications like SE blocks and activation functions to optimize model performance.",
        category: "ML/DS/DL",
        technologies: ["PyTorch", "Deep Learning", "Computer Vision", "CNN", "Weights & Biases"],
        githubLink: "https://github.com/mlk500/MobileNetsV2-DL"
     },
    {
        id: "2",
        title: "ML Algorithms Implementation",
        description: "Custom implementation of Decision Trees, AdaBoost, and Gradient Boost without ML libraries.",
        category: "ML/DS/DL",
        technologies: ["Python", "NumPy", "Pandas", "Algorithm Design", "Machine Learning"],
        githubLink: "https://github.com/mlk500/ML-Algorithms",
    },
    {
        id: "3",
        title: "Image Recognition API",
        description: "Built a FastAPI service with transfer learning (MobileNetV2) for dynamic image recognition, featuring model retraining, cloud deployment, and caching mechanisms.",
        category: "ML/DS/DL",
        technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "GCP", "CI/CD", "Transfer Learning"],
        githubLink: "https://github.com/mlk500/fastAPI-gcr-clone"
    },
    {
        id: "4",
        title: "Gender Wage Gap Analysis",
        description:  "Built predictive models to analyze gender wage patterns across OECD countries,\
         discovering key socio-economic factors influencing pay disparities.",
        category: "ML/DS/DL",
        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "scikit-learn",
            "XGBoost",
            "Data Visualization",
            "Statistical Analysis"
        ],
        githubLink: "https://github.com/mlk500/DS-Gender-Wage-Gap",
    },
    {
        id: "5",
        title: "US Election Analysis",
        description: "Built predictive models to analyze US election patterns from 1976-2020, discovering key demographic and economic factors influencing voter turnout and election outcomes.",
        category: "ML/DS/DL",
        technologies: ["Python", "scikit-learn", "PCA", "t-SNE", "Random Forest", "KNN", "Data Visualization"],
        githubLink: "https://github.com/mlk500/ML-US-elections-prediction"
    },
    {
        id: "6",
        title: "Academic Performance Dashboard",
        description: "Built interactive Tableau dashboards analyzing Israeli high school performance across 928 schools,\
         revealing educational patterns and disparities between different sectors and regions.",
        category: "ML/DS/DL",
        technologies: ["Tableau", "Python", "Data Analysis", "Data Visualization"],
        githubLink: "https://github.com/mlk500/Bagrut-Grades-Analysis-2017-2019"
     },
     {
        id: "7",
        title: "Document Analysis & Classification System",
        description: "Built text processing systems to analyze document collections, exploring how different preprocessing techniques and ML models\
         affect document classification and clustering accuracy.",
        category: "ML/DS/DL",
        technologies: ["Python", "NLTK", "scikit-learn", "Machine Learning", "NLP", "Information Retrieval", "Text Classification"],
        githubLink: "https://github.com/mlk500/information-retrieval-project" 
     },
     {
        id: "8",
        title: "Code Online - Collaborative Platform",
        description: "Built a LeetCode-inspired platform enabling real-time code mentoring, featuring synchronized editing, role-based access control, and interactive problem solving.\nNote: Due to free hosting, initial loading may take 30-60 seconds as the server spins up.",
        category: "Fullstack",
        technologies: ["React", "Express", "Next.js", "TypeScript", "WebSocket", "Real-time Collaboration"],
        githubLink: "https://github.com/mlk500/code-online",
        demoLink: "https://online-coding-frontend.onrender.com/" 
    },
    // {
    //     id: "9",
    //     title: "React Express Project 2",
    //     description: "Second fullstack web application using React and Express.",
    //     category: "Fullstack",
    //     technologies: ["React", "Express", "Node.js", "JavaScript"],
    //     githubLink: "", // Add your GitHub link
    // },
    {
        id: "10",
        title: "CuraEats - Diabetic Meal Planning App",
        description: "Built a production-level Android application for CuraLife enabling diabetics to manage and track personalized meal plans, featuring secure authentication and advanced search capabilities.",
        category: "Mobile",
        technologies: ["Java", "Android", "Spring Boot", "MySQL", "Heroku", "JWT"],
        githubLink: "",
    },
    {
        id: "11",
        title: "Knight's Move Game",
        description: "An educational chess-inspired game where players control a knight piece while answering trivia questions and avoiding opponents, featuring multiple difficulty levels and special board mechanics.",
        category: "Fullstack",
        technologies: ["Java", "JavaFX", "JSON", "MVC Architecture", "Design Patterns"],
        githubLink: "https://github.com/mlk500/Knight-Move-Game"
     },
    {
        id: "12",
        title: "Full-Stack Notes App",
        description: "Built an Android notes app with Spring Boot backend, implementing CRUD operations, and priority-based note organization.",
        category: "Mobile",
        technologies: ["Java", "Android", "Spring Boot", "MySQL", "REST API"],
        githubLink: "https://github.com/mlk500/NotesAppAndroid" 
     },
    {
        id: "13",
        title: "iOS Learning Projects",
        description: "Collection of iOS applications built while learning Swift.",
        category: "Mobile",
        technologies: ["Swift", "iOS Development", "SwiftUI"],
        githubLink: "https://github.com/mlk500/ios-learning-journey",
    },
    {
        id: "14",
        title: "Kids Watch",
        description: "Designed a dual-interface booking platform for childcare services, featuring separate apps for\
         parents to book and monitor nannies, and for nannies to manage their schedules and bookings.", 
        category: "UI/UX",
        technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
        figmaEmbedCode: figmaEmbeds.get("Kids Watch"),
        figmaLink: "https://www.figma.com/design/nWAufWRu4jNoLreD7qsOQ1/Kids-Watcch---HCI-Project?node-id=0-1&t=FBJPEhXcS4M7y10k-1"
    },
    {
        id: "15",
        title: "Sales Data Analysis and Weather Prediction",
        description: "Built predictive models to analyze how weather impacts Walmart store sales,\
         discovering interesting patterns between weather conditions and consumer behavior across 45 locations.",
        category: "ML/DS/DL",
        technologies: ["Python", "Pandas", "scikit-learn", "Gradient Boosting", "Random Forest", "AdaBoost", "Data Visualization"],
        githubLink: "https://github.com/mlk500/ML-Walmart-data",
    },
    {
        id: "16",
        title: "OCR with Classic ML Algorithms",
        description: "Built and compared Naive Bayes and Perceptron algorithms for handwritten digit recognition, exploring hyperparameter tuning and model optimization techniques.",
        category: "ML/DS/DL",
        technologies: ["Python", "NumPy", "OCR", "Classical ML Algorithms"],
        githubLink: "https://github.com/mlk500/OCR_NaiveBayes_Perceptron" 
     },
     {
        id: "17",
        title: "Final Project - Player UI",
        description: "Designed and prototyped the player interface as part of the capstone project, focusing on accessibility\
         and engaging user experience for children.",
        category: "UI/UX",
        technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
        figmaEmbedCode: figmaEmbeds.get("Player UI - Project"),
        figmaLink: "https://www.figma.com/design/FzK1X6tGvlFHaI9Ndb4KEC/Final-Project---Player-UI?node-id=1-23538&t=XuBnCUcZT2YF2E8f-1"
    },
    {
        id: "18",
        title: "Knight's Move UI Design",
        description: "Designed a comprehensive UI/UX prototype for an educational chess game, focusing on game mechanics visualization and intuitive user interactions.",
        category: "UI/UX",
        technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
        figmaEmbedCode: figmaEmbeds.get("Knight's move"),
        figmaLink: "https://www.figma.com/design/EzLXFFjPbTqsHGpMs54Izv/Knight's-move?node-id=0-1&t=E7CYDZNwH7e9enY1-1"
     },
    
]