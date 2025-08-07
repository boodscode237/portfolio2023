export const portfolioData = {
  profile: {
    name: "Brice Donald",
    title: "AI & NLP Researcher",
    email: "b.abodo@yandex.com",
    imageUrl: "https://i.ibb.co/LQjg4QJ/linkedin-profile.jpg",
    summary:
      "A highly motivated and detail-oriented AI researcher with a strong academic background and a passion for leveraging data to solve real-world problems. Currently pursuing a Master's in Artificial Intelligence at ITMO University, specializing in Natural Language Processing. Proficient in Python, machine learning frameworks, and NLP techniques, with hands-on experience in developing and fine-tuning models like DistilBERT and CatBoost.",
  },
  navigation: [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ],
  experience: [
    {
      date: "Oct 2024 - Present",
      title: "Researcher / Developer",
      company: "AI GIS Research, Saint Petersburg",
      description:
        "Developing a methodology for extracting and storing spatial data from unstructured text sources. My work involves researching geocoding methods, designing a data extraction model, creating an object classifier, and deploying a vector spatial database. I am also preparing scientific articles for publication and presentation at conferences.",
    },
    {
      date: "Feb 2024 - Aug 2024",
      title: "Software Development Intern",
      company: "VAVT",
      description:
        "Developed a multi-class text classification model for sentiment analysis using FFN, Conv1D, and DistilBERT. Achieved over 80% accuracy by leveraging data augmentation techniques (back-translation) to expand a dataset from ~600 to 12,000 records. Utilized Python, PyTorch, Keras, and various LLM APIs (Gemini, GPT-4).",
    },
    {
      date: "Sep 2023 - Feb 2024",
      title: "Data Science Intern",
      company: "Rabota.ru, Saint Petersburg",
      description:
        "Engineered an AI-powered salary prediction model. Analyzed over 1 million job vacancies using PySpark and Hadoop. Implemented and evaluated CatBoost, Ridge, and kNN regression models, selecting CatBoost which achieved a MAPE of 0.247. This improved prediction accuracy by 11% and reduced data processing time by 30%.",
    },
  ],
  publications: [
    {
      title:
        "Enhanced Text Classification Using DistilBERT with Low-Rank Adaptation",
      venue: "Published",
      year: "2024",
      description:
        "This paper details the development of a sentiment analysis model, comparing FFN, Conv1D, and a fine-tuned DistilBERT transformer. It highlights the effectiveness of data augmentation through back-translation in improving model robustness and performance. https://ispranproceedings.elpub.ru/jour/article/view/1941",
    },
    {
      title:
        "A Framework for Geodata Extraction from Unstructured Textual Sources",
      venue: "In Preparation",
      year: "2025",
      description:
        "Presents a novel methodology for identifying, extracting, and storing geospatial information from plain text. The work contributes to the fields of navigation, urban planning, and large-scale data analysis.",
    },
  ],
  projects: [
    {
      title: "AI Salary Prediction",
      description:
        "Created an interpretable salary prediction model using CatBoost, Ridge, and kNN. Analyzed data from over 10,000 job listings to provide accurate salary estimates, enhancing the user experience on the job platform.",
      tech: ["CatBoost", "PySpark", "Hadoop", "FastAPI"],
    },
    {
      title: "Food Allergy Detection from Ingredient Lists",
      description:
        "Developed an NLP-based model to detect potential food allergens by scanning ingredient lists. The system integrates with external APIs for real-time risk analysis, providing a crucial tool for user safety.",
      tech: ["NLP", "API Integration", "Python"],
    },
  ],
  education: [
    {
      degree: "PhD in Artificial Intelligence",
      institution: "ITMO University, Saint Petersburg",
      year: "2025 - 2028",
      description:
        "Advancing Cross-Lingual Transfer Learning for Low-Resource French Medical NLP'.",
    },
    {
      degree: "Master's Degree in Artificial Intelligence",
      institution: "ITMO University, Saint Petersburg",
      year: "2023 - 2025",
      description:
        "Specializing in NLP and Computer Vision. Research Topic: 'Development and Optimization of a Large Language Model (LLM) for the French Language'.",
    },
    {
      degree: "Bachelor's Degree in Information Technology",
      institution:
        "Russian State Vocational Pedagogical University, Yekaterinburg",
      year: "2019-2023",
      description: "IT in Education(EduTech)",
    },
  ],
  skills: {
    "Programming & Data": [
      "Python",
      "PySpark",
      "SQL",
      "Pandas",
      "NumPy",
      "Git",
    ],
    "Machine Learning": [
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "CatBoost",
    ],
    "Natural Language Processing": [
      "BERT",
      "GPT",
      "DistilBERT",
      "RNN/LSTM",
      "LangChain",
      "Hugging Face",
    ],
    "Big Data & Databases": [
      "Hadoop",
      "PostgreSQL",
      "MSSQL",
      "MongoDB",
      "Docker",
    ],
    Languages: ["English (Native)", "French (Native)", "Russian (Advanced)"],
  },
};
