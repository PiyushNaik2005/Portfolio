// ============================================================
// PORTFOLIO CONFIG — Edit this file to update the entire site
// ============================================================

export const siteConfig = {
  name: "Piyush Naik",
  title: "AI/ML Engineering Student",
  university: "YCCE — B.Tech Artificial Intelligence & Machine Learning (Graduating 2027)",
  taglines: [
    "Computer Vision",
    "Explainable AI",
    "SQL Analytics",
    "Data Storytelling",
    "Deep Learning",
  ],
  headline: "Building Intelligent Systems.\nTurning Data Into Insights.",
  subheadline:
    "AI/ML Engineering student bridging deep learning & computer vision with high-performance SQL analytics and data pipelines.",
  elevatorPitch:
    "I'm a pre-final-year AI/ML engineering student at YCCE (graduating 2027), passionate about building practical deep-learning applications and turning raw data into actionable insights. My work spans computer vision systems with explainability layers, advanced SQL analytics for telemetry data, and end-to-end Python data pipelines — all grounded in real project experience.",

  github: "https://github.com/PiyushNaik2005",
  linkedin: "https://www.linkedin.com/in/piyush-naik-49569825b/",
  email: "piyushnaik2005@gmail.com",
  resumePath: "/resume.pdf",

  targetRoles: [
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Python Developer",
    "Data Analyst",
  ],

  formspreeEndpoint: "https://formspree.io/f/mqpapepa",

  metaDescription:
    "Piyush Naik — AI/ML Engineering student at YCCE specialising in computer vision, explainable AI, deep learning, SQL analytics, and Python data pipelines.",
  ogImage: "/og-image.png",
};

export const skillGroups = [
  {
    category: "Machine Learning & Deep Learning",
    icon: "Brain",
    color: "violet",
    skills: ["PyTorch", "CNNs", "EfficientNet-B0", "MTCNN", "Grad-CAM", "scikit-learn"],
  },
  {
    category: "Data & Analytics",
    icon: "Database",
    color: "cyan",
    skills: ["Python", "Pandas", "NumPy", "Advanced SQL", "Window Functions", "CTEs", "Data Normalization"],
  },
  {
    category: "Visualization & Delivery",
    icon: "BarChart2",
    color: "emerald",
    skills: ["Streamlit", "Matplotlib", "Data-Storytelling Dashboards"],
  },
  {
    category: "Databases & Tools",
    icon: "Wrench",
    color: "amber",
    skills: ["MySQL", "MySQL Workbench", "Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    id: "deepfake-detection",
    flagship: true,
    title: "AI-Powered Video Deepfake Detection System with Explainable AI",
    shortTitle: "Deepfake Detection",
    tagline: "Computer Vision · Explainable AI · Responsible AI",
    badges: ["PyTorch", "EfficientNet-B0", "MTCNN", "Grad-CAM", "Streamlit", "Computer Vision"],
    accentColor: "violet",
    description:
      "A Python deep-learning system that ingests uploaded video, detects faces frame-by-frame using MTCNN, classifies them as authentic or synthetic with EfficientNet-B0, and generates Grad-CAM heatmaps for visual explanations — aggregated into a video-level authenticity verdict.",
    overview:
      "This project tackles the growing challenge of synthetic media (deepfakes) by combining state-of-the-art face detection, transfer-learned image classification, and gradient-based visual explainability into a single end-to-end pipeline deployed as a Streamlit web app.",
    problemStatement:
      "Deepfake videos pose significant risks to public trust, media integrity, and personal security. Existing detection tools are often black-boxes that provide no insight into *why* a video is flagged as manipulated.",
    objectives: [
      "Detect and localize faces in video frames at scale",
      "Classify each face crop as real or fake using a fine-tuned deep CNN",
      "Provide pixel-level visual explanations (Grad-CAM) for every prediction",
      "Aggregate frame-level predictions into a robust video-level verdict",
      "Deliver results through an intuitive Streamlit interface",
    ],
    pipeline: [
      { step: "Video Upload", icon: "Upload", desc: "User uploads an MP4/AVI via Streamlit UI" },
      { step: "Frame Extraction", icon: "Film", desc: "OpenCV samples frames at configurable FPS" },
      { step: "Face Detection", icon: "ScanFace", desc: "MTCNN detects and crops all faces per frame" },
      { step: "Classification", icon: "Cpu", desc: "EfficientNet-B0 (transfer-learned) classifies each crop" },
      { step: "Explainability", icon: "Eye", desc: "Grad-CAM generates spatial attention heatmaps" },
      { step: "Aggregation", icon: "BarChart2", desc: "Frame scores pooled into a video-level verdict" },
    ],
    keyFeatures: [
      "End-to-end pipeline from raw video to verdict in a single upload",
      "MTCNN for robust multi-face detection across varied lighting",
      "EfficientNet-B0 backbone fine-tuned on a deepfake dataset",
      "Grad-CAM overlays highlight which facial regions triggered the detection",
      "Streamlit UI with frame-level breakdown and confidence scores",
    ],
    challenges: [
      "Balancing inference speed vs. accuracy on CPU-only environments",
      "Handling compressed/low-quality videos where artifacts are subtle",
      "Aggregation strategy for frames with mixed predictions",
    ],
    futureImprovements: [
      "Add audio-visual correlation detection (lip-sync analysis)",
      "Support real-time webcam stream analysis",
      "Export detailed PDF report per video",
      "Benchmark across standard datasets (FaceForensics++, DFDC)",
    ],
    disclaimer:
      "Responsible AI Note: Predictions reflect current model architecture, training data, and video quality limitations. Results should be treated as decision-support, not definitive proof of authenticity. This tool is intended for research and educational use.",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "esports-analyzer",
    flagship: false,
    title: "eSports Tactical Match & Telemetry Analyzer",
    shortTitle: "eSports Analyzer",
    tagline: "SQL Analytics · Data Engineering · Performance KPIs",
    badges: ["MySQL", "Python", "Pandas", "NumPy", "Matplotlib", "Relational Modeling"],
    accentColor: "emerald",
    description:
      "A normalized MySQL database and Python analytics pipeline that models competitive match telemetry across 4 related tables, derives tactical KPIs using SQL window functions, and visualizes performance trends through a multi-panel Matplotlib dashboard.",
    overview:
      "Built to explore advanced SQL and data engineering skills in a domain-rich context — competitive gaming telemetry — this project demonstrates schema design, analytical SQL, and Python-based data storytelling.",
    problemStatement:
      "Raw eSports match logs are unstructured and offer no built-in insight into player momentum, round efficiency, or economy impact. This project structures that data relationally and extracts actionable tactical intelligence.",
    objectives: [
      "Design a 3NF-normalized MySQL schema for match/player/round telemetry",
      "Use window functions (LAG, LEAD, DENSE_RANK) for momentum and ranking",
      "Build a Python/Pandas pipeline for cleaning, NULL handling, and custom KPIs",
      "Visualize K/D ratio, efficiency rating, win rate, and economy impact",
    ],
    pipeline: [],
    keyFeatures: [
      "4-table 3NF schema: matches, players, rounds, economy_events",
      "SQL window functions for per-round momentum deltas and efficiency rankings",
      "Custom KPI formulas: K/D ratio, efficiency rating, clutch rate",
      "Python/Pandas pipeline for NULL imputation and data normalization",
      "Multi-panel Matplotlib dashboard: win rate trends, economy impact, heat maps",
    ],
    challenges: [
      "Designing a schema flexible enough for multiple game modes",
      "Handling NULL/missing rounds in incomplete match logs",
      "Balancing SQL-side computation vs. Python-side for performance",
    ],
    futureImprovements: [
      "Interactive Plotly/Dash dashboard for drill-down analysis",
      "Ingest live match data via API",
      "Predictive model for round-win probability",
    ],
    disclaimer: "",
    githubUrl: "https://github.com/PiyushNaik2005/esports-tactical-analyzer",
    demoUrl: "",
  },
  {
    id: "netflix-eda",
    flagship: false,
    title: "Netflix Content Trends Analysis",
    shortTitle: "Netflix EDA",
    tagline: "Exploratory Data Analysis · Data Storytelling · Python",
    badges: ["Python", "Pandas", "Matplotlib", "EDA", "Data Storytelling"],
    accentColor: "cyan",
    description:
      "An exploratory data analysis of 8,800+ Netflix titles revealing content-type splits, rating distributions, duration trends, country production share, and the post-2015 content growth surge — presented as a clean data-storytelling narrative.",
    overview:
      "This project demonstrates end-to-end EDA discipline: data loading, cleaning, feature engineering, and multi-angle visual storytelling using a real public dataset.",
    problemStatement:
      "Streaming platform content strategy is opaque to outside observers. EDA over the Netflix catalog surfaces patterns in content investment, geographic production trends, and audience-rating distribution.",
    objectives: [
      "Profile and clean a dataset of 8,800+ titles",
      "Quantify Movie vs TV Show split and rating distributions",
      "Identify duration trends across content types and years",
      "Map top content-producing countries",
      "Highlight the post-2015 platform growth surge",
    ],
    pipeline: [],
    keyFeatures: [
      "Comprehensive null analysis and data cleaning with Pandas",
      "Movie vs TV Show ratio visualization",
      "Year-over-year content addition timeline with growth annotations",
      "Country-level heatmap of production volume",
      "Rating distribution breakdown (G, PG, TV-MA, etc.)",
    ],
    challenges: [
      "Mixed date formats and missing values in the original dataset",
      "Country field containing multi-country entries requiring parsing",
    ],
    futureImprovements: [
      "Sentiment analysis on Netflix title descriptions",
      "Interactive Plotly dashboard",
      "Correlation analysis with IMDb ratings",
    ],
    disclaimer: "",
    githubUrl: "https://github.com/PiyushNaik2005/netflix-data-visualization",
    demoUrl: "",
  },
];
