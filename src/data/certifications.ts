import { Certification } from "@/types";

export const certifications: Certification[] = [
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/DBKD8QC5HX47",
        description: "Mastered neural networks (CNNs, RNNs, LSTMs, Transformers) using Python and TensorFlow, applying them to real-world cases like speech recognition and chatbots.",
        skills: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "BatchNorm", "Xavier/He Initialization", "Dropout"]
    },
    {
        title: "Natural Language Processing Specialization",
        issuer: "Coursera",
        date: "2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JZC6QD7LF24U",
        description: " Gained expertise in classical ML and deep learning for NLP, enabling development of applications for translation, sentiment analysis, and question-answering systems.",
        skills: ["Machine Translation", "Sentiment Analysis", "Word2vec", "Attention Models", "Transformers", "Question-Answering", "Text Summarization"]
    },
    {
        title: "Android Development Bootcamp",
        issuer: "John Bryce & Tsofen",
        date: "2022",
        imageSrc: "dist/android-cert.jpeg",
        description: "Intensive bootcamp covering Android development fundamentals",
        skills: ["Android", "Java", "Spring Boot", "MySQL", "Heroku"]
    }
];