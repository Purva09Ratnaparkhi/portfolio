export const projects = [
  {
    icon: '🤖',
    type: 'Agentic Code Review System',
    title: 'CritiqueAI',
    description:
      'AI-powered multi-language GitHub PR reviewer using LangGraph agents for security analysis, performance auditing, style validation, and test coverage assessment. Integrates Semgrep, tree-sitter, and GitHub APIs to generate structured reviews and automated inline comments.',
    tags: ['LangGraph', 'Semgrep', 'GitHub API', 'Tree-sitter', 'Pydantic', 'Python'],
    link: 'https://huggingface.co/spaces/advait09/CritiqueAI',
    github: 'https://github.com/Purva09Ratnaparkhi/CritiqueAI',
  },
  {
    icon: '🔗',
    type: 'Agentic RAG System',
    title: 'RAGForge',
    description:
      'RAG pipeline with hybrid retrieval (BM25 + FAISS + RRF), HyDE-based query rewriting, cross-encoder reranking, and LangGraph agents for adaptive routing. Implements document chunking, metadata filtering, context compression, and retrieval evaluation using RAGAS to improve answer relevance and factual grounding.',
    tags: ['LangChain', 'LangGraph', 'FAISS', 'HyDE', 'RAGAS', 'Python'],
    link: 'https://huggingface.co/spaces/Purva09/RAGForge',
    github: 'https://github.com/Purva09Ratnaparkhi/RAGForge',
  },
  {
    icon: '🎓',
    type: 'AI Learning Platform · Published',
    title: 'SkillTrax',
    description:
      'AI-powered interview preparation platform featuring automated question generation, skill gap analysis, mock interview feedback through facial and voice analysis, personalized learning roadmaps, YouTube-based learning recommendations, and an interactive Flask-powered dashboard designed to accelerate technical interview readiness.',
    tags: ['Flask', 'LLMs', 'Scikit-learn', 'Computer Vision', 'Springer'],
    link: 'https://huggingface.co/spaces/advait09/SkillTrax',
    github: 'https://github.com/Purva09Ratnaparkhi/Skilltrax',
  },
  {
    icon: '🔐',
    type: 'Cybersecurity · Behavioral Biometrics',
    title: 'KeyStroke Auth',
    description:
      'Developed a keystroke dynamics authentication system that analyzes typing behavior, including key hold times and flight times, to verify user identity. Leveraged machine learning models to distinguish genuine users from impostors, adding an additional behavioral security layer beyond traditional password-based authentication.',
    tags: ['Python', 'Machine Learning', 'Cyber Security', 'Behavioral Biometrics', 'Scikit-learn', 'Authentication'],
    link: 'https://huggingface.co/spaces/advait09/keystroke-based-verifier',
    github: 'https://github.com/AdvaitMhalungekar/Keystroke-Rhythm-Based-User-Verifier',
  },
  {
    icon: '💧',
    type: 'Digital Twin · Industrial AI',
    title: 'AquaTwin',
    description:
      'AI-powered digital twin for industrial water treatment systems. Simulates water treatment processes, predicts optimal chemical dosing, models fouling and resin degradation, detects anomalies, and provides real-time operational insights through a Flask dashboard and ML-driven optimization engine.',
    tags: ['Digital Twin', 'Machine Learning', 'XGBoost', 'Flask', 'MLflow', 'Time Series'],
    github: 'https://github.com/Purva09Ratnaparkhi/Water-Hardness-Treatment-Plant-Digital-Twin',
  },
  {
    icon: '⚔️',
    type: 'Algorithm Visualization Platform',
    title: 'Algorithm Battlefield Arena',
    description:
      'Interactive platform for benchmarking and visualizing algorithms across Sorting, Searching, Graph, Dynamic Programming, and String Matching domains. Enables head-to-head algorithm battles with real-time performance analysis, execution benchmarking, complexity comparison, and custom test case generation for enhanced DSA learning.',
    tags: ['Python', 'Flask', 'Data Structures', 'Algorithms', 'Benchmarking', 'Visualization'],
    link: 'https://huggingface.co/spaces/Purva09/algorithm-battlefield',
    github: 'https://github.com/Purva09Ratnaparkhi/Algorithm-battlefield',
  },
];

export const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', devicon: 'python/python-original.svg', desc: 'My preferred language for scripting, automation, and AI/ML integration due to its readability and powerful libraries.' },
      { name: 'Java', devicon: 'java/java-original.svg', desc: 'Strong OOP fundamentals, used for building robust backend applications and data structures coursework.' },
      { name: 'C', devicon: 'c/c-original.svg', desc: 'Systems programming foundation — memory management, pointers, and low-level computing concepts.' },
      { name: 'C++', devicon: 'cplusplus/cplusplus-original.svg', desc: 'Used for competitive programming and performance-critical applications with STL proficiency.' },
      { name: 'HTML / CSS', devicon: 'html5/html5-original.svg', desc: 'Semantic markup and modern CSS including Flexbox, Grid, animations, and responsive design.' },
      { name: 'SQL', devicon: 'mysql/mysql-original.svg', desc: 'Database querying, schema design, joins, aggregations, and performance optimization.' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: '📦',
    skills: [
      { name: 'Flask', devicon: 'flask/flask-original.svg', desc: 'Lightweight Python web framework used for building REST APIs and ML model serving endpoints.' },
      { name: 'FastAPI', devicon: 'fastapi/fastapi-original.svg', desc: 'Modern, high-performance web framework for building APIs with Python, based on standard type hints.' },
      { name: 'React', devicon: 'react/react-original.svg', desc: 'Component-based UI development with hooks, state management, and modern frontend patterns.' },
      { name: 'Scikit-learn', devicon: 'scikitlearn/scikitlearn-original.svg', desc: 'Go-to library for classical ML — classification, regression, clustering, and model evaluation.' },
      { name: 'LangChain', mono: 'LC', desc: 'Building LLM-powered applications with chains, agents, retrievers, and prompt engineering.' },
      { name: 'LangGraph', mono: 'LG', desc: 'Designing stateful, multi-step agentic workflows with conditional routing and tool use.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git', devicon: 'git/git-original.svg', desc: 'Version control, branching strategies, collaborative workflows, and CI/CD integration.' },
      { name: 'VS Code', devicon: 'vscode/vscode-original.svg', desc: 'Primary IDE with extensive extension ecosystem for Python, JS, and AI development.' },
      { name: 'Hugging Face', mono: '🤗', desc: 'Model hub for transformers, tokenizers, datasets, and deploying ML models via Spaces.' },
      { name: 'Firebase', devicon: 'firebase/firebase-plain.svg', desc: 'Real-time database, authentication, hosting, and cloud functions for full-stack apps.' },
      { name: 'Supabase', mono: 'SB', desc: 'Open-source Firebase alternative with PostgreSQL, auth, and real-time subscriptions.' },
      { name: 'MLflow', mono: 'ML', desc: 'Experiment tracking, model registry, and deployment pipeline management for ML projects.' },
    ],
  },
  {
    id: 'concepts',
    label: 'Gen AI/ML Concepts',
    icon: '🧠',
    skills: [
      { name: 'LLMs', mono: 'LL', desc: 'Working with large language models, including fine-tuning, prompt design, and local or cloud-based inference deployment.' },
      { name: 'RAG', mono: 'RG', desc: 'Retrieval-Augmented Generation — designing hybrid search, vector store retrieval, reranking, and context injection.' },
      { name: 'Vector Databases', mono: 'VD', desc: 'Indexing, searching, and managing high-dimensional vector embeddings with databases like FAISS, Chroma, or Pinecone.' },
      { name: 'Agentic AI', mono: 'AA', desc: 'Designing stateful, autonomous system behaviors and orchestrating multi-agent systems.' },
      { name: 'Prompt Engineering', mono: 'PE', desc: 'Structuring prompts and system instructions to optimize performance, handle edge cases, and ensure model safety.' },
      { name: 'AI Agents', mono: 'AG', desc: 'Building smart agents utilizing custom tools, persistent memory, and complex planning loops to solve tasks.' },
    ],
  },
];

export const timeline = [
  {
    type: 'edu',
    badge: 'Education',
    date: '2021 – 2024',
    role: 'Diploma in Computer Technology',
    org: 'Government Polytechnic Nashik',
    desc: 'Completed diploma with distinction — 93.12%',
  },
  {
    type: 'edu',
    badge: 'Education',
    date: '2024 – 2027',
    role: 'B.Tech in AI & Data Science',
    org: 'Vishwakarma Institute of Technology, Pune',
    desc: 'Currently pursuing B.Tech in AI & Data Science — CGPA 9.16',
  },
  {
    type: 'exp',
    badge: 'Experience',
    date: 'Aug 2025 – May 2026',
    role: 'Campus Incharge',
    org: 'I2IOC TPO VIT',
    desc: 'Coordinated student opportunities and outreach, bridging student talent with industry at VIT\'s training and placement cell.',
  },
  {
    type: 'exp',
    badge: 'Experience',
    date: 'Sep 2025 – Nov 2025',
    role: 'AI Engineer Intern',
    org: 'Anulom Technologies Pvt. Ltd., Pune',
    desc: 'Built document classification pipeline for mortgage applications using OCR + LLMs, reducing manual sorting by 80%.',
  },
  {
    type: 'project',
    badge: 'Project',
    date: 'Feb 2026 – May 2026',
    role: 'SkillTrax',
    org: 'Sponsored Project · AIAdventures LLP',
    desc: 'Developed an AI-powered interview preparation and learning platform as a sponsored engagement with AIAdventures LLP. Features include automated question generation, skill gap analysis, mock interview feedback, and personalized learning roadmaps.',
  },
];

export const achievements = [
  {
    emoji: '🏦',
    title: 'Citi Bridge Training Program 2026',
    org: 'Citibank · Competitive Selection',
    desc: "Selected for Citi's elite program involving technical training, real-world problem solving, and direct industry exposure.",
  },
  {
    emoji: '🏆',
    title: 'Domain Winner — Women Safety',
    org: 'Morpheus Hack 2026 · SIT Lonavala',
    desc: 'Led development of an AI-powered women safety solution, secured top position in category at a major intercollegiate hackathon.',
  },
  {
    emoji: '🏅',
    title: 'LPF Scholar',
    org: 'Lila Poonawalla Foundation • Merit Scholarship',
    desc: "Selected as an LPF Scholar for academic excellence. Received mentorship, leadership training, and career development support.",
  },
];

export const publications = [
  {
    title: 'SkillTrax: Personalized AI-Based Learning Pathway Generator',
    journal: 'Springer Link',
    desc: 'Research on dynamic learner models, personalized learning roadmaps, and content routing frameworks using generative models to automate personalized skill pathways.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-06703-6_38',
  },
  {
    title: 'Improving Algorithmic Grasping using Sustainable and Explainable Gamified Performance Metrics',
    journal: 'Springer Link',
    desc: 'Research on gamification and explainability in reinforcement learning and robotic grasping, introducing explainable performance indexes for sustainability analysis.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-27160-0_15',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];
