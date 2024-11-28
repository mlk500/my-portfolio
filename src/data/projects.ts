import { Project } from '@/types/index';

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
        title: "React Express Project 1",
        description: "Fullstack web application using React and Express.",
        category: "Fullstack",
        technologies: ["React", "Express", "Node.js", "JavaScript"],
        githubLink: "", 
    },
    {
        id: "9",
        title: "React Express Project 2",
        description: "Second fullstack web application using React and Express.",
        category: "Fullstack",
        technologies: ["React", "Express", "Node.js", "JavaScript"],
        githubLink: "", // Add your GitHub link
    },
    {
        id: "10",
        title: "JavaFX Application",
        description: "Desktop application built with Java and JavaFX.",
        category: "Fullstack",
        technologies: ["Java", "JavaFX", "Desktop Development"],
        githubLink: "", // Add your GitHub link
    },
    {
        id: "11",
        title: "Full-Stack Notes App",
        description: "Built an Android notes app with Spring Boot backend, implementing CRUD operations, and priority-based note organization.",
        category: "Mobile",
        technologies: ["Java", "Android", "Spring Boot", "MySQL", "REST API", "RecyclerView"],
        githubLink: "https://github.com/mlk500/NotesAppAndroid" 
     },

    {
        id: "12",
        title: "Android Project 2",
        description: "Second mobile application for Android platform.",
        category: "Mobile",
        technologies: ["Java", "Android SDK", "Mobile Development"],
        githubLink: "", // Add your GitHub link
    },
    {
        id: "13",
        title: "iOS Learning Projects",
        description: "Collection of iOS applications built while learning Swift.",
        category: "Mobile",
        technologies: ["Swift", "iOS Development", "UIKit"],
        githubLink: "", // Add your GitHub link
    },
    {
        id: "14",
        title: "Figma Design Projects",
        description: "Collection of UI/UX design projects created in Figma.",
        category: "UI/UX",
        technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
        githubLink: "", // Add your GitHub link
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
     }
]