// ---- Edit your content here ----

export const LINKS = {
  github: "https://github.com/BHARATH-KUMR",
  linkedin: "https://linkedin.com/in/bharath-kmr/",
  // TODO: replace with your real email address
  email: "mailto:your-email@example.com",
};

export const TYPED_WORDS = ["Django.", "React.", "WebSockets.", "REST APIs.", "PostgreSQL."];

export const STATS = [
  { to: 6, suffix: "+", decimals: 0, label: "Full-stack projects" },
  { to: 1.7, suffix: " yrs", decimals: 1, label: "R&D apprenticeship" },
  { to: 8.55, suffix: "", decimals: 2, label: "CGPA, B.E. EEE" },
];

export const PROJECTS = [
  {
    name: "ExamHub",
    slug: "examhub",
    flag: "Flagship",
    desc: "A production exam platform with role-based Teacher/Student access, timed exams, automatic grading, leaderboards and analytics — deployed live on Railway.",
    tags: ["Django", "PostgreSQL", "Railway", "Auth"],
    repo: "https://github.com/bharath-kumr/examhub",
    live: "https://examhub-app.up.railway.app",
    a: "#7c7cff",
    b: "#4fe3f0",
  },
  {
    name: "Lav",
    slug: "lav",
    flag: "Flagship",
    desc: "An AI chat app with real-time token streaming over WebSockets, persistent conversation history and Google Gemini API integration.",
    tags: ["Django", "WebSockets", "Gemini API", "PostgreSQL"],
    repo: null,
    live: null,
    a: "#4fe3f0",
    b: "#f08bff",
  },
  {
    name: "Blog API",
    slug: "blog-api",
    desc: "A Django REST Framework + React Vite blog platform with JWT auth and automatic token refresh through Axios interceptors.",
    tags: ["Django REST", "React", "JWT"],
    repo: "https://github.com/bharath-kumr/Blog_API",
    live: null,
    a: "#f08bff",
    b: "#7c7cff",
  },
  {
    name: "Besant Lodge",
    slug: "hotel-management",
    desc: "A hotel management system rebuilt from a CLI Python/MySQL tool into a full Django REST + React Vite application.",
    tags: ["Django REST", "React Vite", "MySQL"],
    repo: "https://github.com/bharath-kumr/HotelManagementSystem",
    live: null,
    a: "#7c7cff",
    b: "#f08bff",
  },
  {
    name: "Realtime Chat App",
    slug: "realtime-chat",
    desc: "A chat app with Django Channels and a React frontend, split across Render and Netlify, with JWT auth.",
    tags: ["Django Channels", "React", "JWT"],
    repo: "https://github.com/bharath-kumr/Realtime-chatApp",
    live: null,
    a: "#4fe3f0",
    b: "#7c7cff",
  },
];

export const SKILLS_TOP = [
  "Python", "Django", "Django REST Framework", "JavaScript", "React.js", "React Vite",
  "WebSockets", "Django Channels", "REST APIs", "JWT Auth",
];

export const SKILLS_BOTTOM = [
  "PostgreSQL", "MySQL", "SQLite", "Docker", "Git", "GitHub",
  "Gemini API", "OpenAI API", "Railway", "Netlify", "Render", "VS Code",
];

export const TIMELINE = [
  {
    title: "Graduate Apprentice Trainee",
    meta: "Timken Research & Technology · Mahindra City, Chennai · 1.7 years",
    text: "R&D work in bearing and manufacturing engineering — the analytical grounding behind how I debug software today.",
  },
  {
    title: "B.E., Electrical & Electronics Engineering",
    meta: "Sethu Institute of Technology, Chennai · 2024 · CGPA 8.55",
    text: "Started teaching myself full-stack development alongside coursework.",
  },
  {
    title: "Full Stack with Python",
    meta: "Besant Technologies · Credential BDZ115966",
    text: "Certification covering the Django + React stack behind every project here.",
  },
];

export const CERTS = [
  { title: "Full Stack with Python", meta: "Besant Technologies · Credential ID BDZ115966" },
  { title: "PLC Programming", meta: "TPM-TechMax" },
];
