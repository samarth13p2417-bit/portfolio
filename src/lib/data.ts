// ============================================================================
// Portfolio Data - Centralized content for Samarth Choudhary's portfolio
// ============================================================================

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  tagline: string;
  roles: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  github: string;
  demo: string;
  features: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const personalInfo: PersonalInfo = {
  name: "Samarth Choudhary",
  title: "Data Analyst",
  email: "samarth13p2417@gmail.com",
  phone: "+91 9325714431",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/samarth13p2417-bit",
  linkedin: "https://www.linkedin.com/in/samarth-choudhary-057b36279",
  summary:
    "Enthusiastic B.Tech Data Science student with knowledge of Python, SQL, Machine Learning, Data Analysis, and Data Visualization. Experienced in developing data-driven projects and extracting meaningful insights from datasets. Seeking opportunities to apply analytical skills, solve real-world problems, and contribute to organizational growth while enhancing professional expertise.",
  tagline:
    "Transforming Data Into Intelligent Solutions Through AI, Analytics & Modern Development",
  roles: [
    "Data Science Student",
    "Machine Learning Enthusiast",
    "AI Developer",
    "Vibe Coder",
    "Web Developer",
  ],
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Dart", level: 55 },
    ],
  },
  {
    title: "Data Science",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 65 },
      { name: "Data Analytics", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Feature Engineering", level: 70 },
      { name: "Predictive Analytics", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "Flutter", level: 55 },
      { name: "Flask", level: 70 },
      { name: "Streamlit", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: "tool",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "Google Colab", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Android Studio", level: 55 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "FaceTrack AI",
    description:
      "AI-powered real-time facial landmark tracking and identity recognition system. Built utilizing computer vision models and neural network algorithms to extract facial coordinates, compute high-accuracy landmark mappings, and support secure system access controls.",
    technologies: [
      "Python",
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
      "Deep Learning",
      "NumPy",
    ],
    year: "2026",
    github: "https://github.com/samarth13p2417-bit/FaceTrack-AI",
    demo: "#",
    features: [
      "Real-time Landmark Tracking",
      "Facial Mesh Generation",
      "Deep Learning Recognition",
      "High FPS Optimization",
    ],
  },
  {
    id: 2,
    title: "Credit Card Fraud Detection",
    description:
      "Machine Learning based fraud detection platform using multiple classification models with real-time prediction and analytics dashboard. Developed a fraud detection system using multiple ML models and data analytics techniques to identify suspicious credit card transactions with high accuracy.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "Pandas",
      "Scikit-Learn",
    ],
    year: "2026",
    github: "#",
    demo: "#",
    features: [
      "Multiple ML Models",
      "Real-time Prediction",
      "Analytics Dashboard",
      "Data Visualization",
    ],
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description:
      "Predict customer retention and identify churn risks using advanced machine learning models and business analytics. Built comprehensive analysis pipeline with feature engineering and model evaluation.",
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Matplotlib",
      "Scikit-Learn",
    ],
    year: "2025",
    github: "#",
    demo: "#",
    features: [
      "Churn Risk Analysis",
      "Business Analytics",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    id: 4,
    title: "School Management System",
    description:
      "Complete digital school administration platform with attendance tracking, academic management, and comprehensive reporting modules for efficient educational institution management.",
    technologies: ["Python", "Flask", "SQL", "HTML/CSS", "JavaScript"],
    year: "2025",
    github: "#",
    demo: "#",
    features: [
      "Attendance Tracking",
      "Academic Management",
      "Reporting Modules",
      "User Roles",
    ],
  },
  {
    id: 5,
    title: "3D Car Showroom Website",
    description:
      "Interactive vehicle showcase platform with modern UI and immersive browsing experience. Developed multiple websites and applications including a 3D car showroom to enhance user experience.",
    technologies: [
      "JavaScript",
      "Three.js",
      "HTML/CSS",
      "3D Modeling",
      "Web Design",
    ],
    year: "2024",
    github: "#",
    demo: "#",
    features: [
      "3D Models",
      "Interactive Showcase",
      "Modern UI",
      "Immersive Experience",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Infeanet Digital Solution & Web Media",
    location: "Pune, Maharashtra",
    role: "Web Development Intern",
    duration: "June 2024 – August 2024",
    responsibilities: [
      "Contributed to website and application development projects as a full-time intern",
      "Gained hands-on experience in designing user-friendly interfaces and supporting technical implementation",
      "Collaborated with team members to deliver efficient digital solutions and enhance overall project performance",
      "Worked on frontend design, UI optimization, and client requirement analysis",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Data Science",
    institution:
      "Department of Technology, Pune University (Savitribai Phule Pune University)",
    duration: "2023 – 2027 (Pursuing)",
    grade: "Pursuing",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Sinhagad Institute, Pune",
    duration: "2020 – 2023",
    grade: "82.15%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Secondary School, Pune",
    duration: "2020",
    grade: "78.80%",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Cricket Tournament Winner",
    description:
      "Won inter-college cricket tournament demonstrating leadership and team spirit",
    icon: "trophy",
  },
  {
    title: "Highest Run Scorer Award",
    description:
      "Recognized as the highest run scorer in competitive cricket matches",
    icon: "award",
  },
  {
    title: "IEEE Volunteer",
    description:
      "Active volunteer in IEEE events, contributing to technical community growth",
    icon: "users",
  },
  {
    title: "ML Project Developer",
    description:
      "Developed multiple machine learning projects with real-world applications",
    icon: "cpu",
  },
  {
    title: "Technical Workshops",
    description:
      "Participated in and organized multiple technical workshops and seminars",
    icon: "book",
  },
  {
    title: "Hackathon Participation",
    description:
      "Participated in national level hackathons showcasing problem-solving skills",
    icon: "code",
  },
];

export const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Online Platform",
    date: "2025",
    link: "#",
  },
  {
    title: "Python for Data Science",
    issuer: "Online Platform",
    date: "2024",
    link: "#",
  },
  {
    title: "Data Visualization with Power BI",
    issuer: "Online Platform",
    date: "2024",
    link: "#",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Online Platform",
    date: "2024",
    link: "#",
  },
];

export const stats: Stat[] = [
  { value: 10, label: "Projects Completed", suffix: "+" },
  { value: 15, label: "Technologies Learned", suffix: "+" },
  { value: 4, label: "Certifications", suffix: "" },
  { value: 1, label: "Internship Experience", suffix: "" },
];
