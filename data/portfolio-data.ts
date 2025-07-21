import {
  Building2,
  Cloud,
  Code2,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Wrench,
} from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Junaid Shaikh",
  nameJp: "シェク ジュナエッド",
  title: "Full-Stack Developer",
  titleJp: "フルスタック開発者",
  email: "junaidshaikh3967@gmail.com",
  location: "India",
  github: "https://github.com/zjunaidz",
  linkedin: "https://linkedin.com/in/zjunaidz",
  resumeUrl:
    "https://drive.google.com/file/d/1OD9is1AeAwSCDW6gmeQJfQhpyt45FleL/view?usp=sharing",
};

// Hero Section
export const heroContent = {
  badge: "Welcome to my portfolio",
  subtitle: "Full-Stack Developer",
  description:
    "A recent graduate based in India learning and building full stack applications with a focus on backend systems and infrastructure. I use Fedora btw :p",
};

// About Section
export const aboutContent = {
  title: "About Me",
  interests: [
    "Distributed Systems",
    "Cloud Architecture",
    "Microservices",
    "API Design",
    "Performance Optimization",
    "System Scalability",
  ],
  personalTraits: [
    {
      title: "Linux Enthusiast",
      description: "Still learning the ins and outs of Linux",
      icon: Monitor,
    },
    {
      title: "日本語学習者",
      description: "Learning Japanese Language and culture",
      icon: MapPin,
    },
    {
      title: "Performance & Security",
      description:
        "Enjoys learning performance and security aspects of systems",
      icon: Code2,
    },
    {
      title: "Problem Solver",
      description: "Building solutions",
      icon: Wrench,
    },
  ],
};

// Skills Section
export const skillsContent = {
  title: "Skills & Technologies",
  description: "Technologies and tools I use to build stuff",
  categories: {
    backendLanguages: {
      label: "Backend Languages",
      icon: Code2,
      skills: ["TypeScript", "JavaScript", "Go", "Core Java", "Basic C++"],
    },
    webFrameworks: {
      label: "Web Frameworks",
      icon: Globe,
      skills: [
        "Node.js",
        "React.js",
        "Next.js",
        "Express.js",
        "Hono.js",
        "Gin",
      ],
    },
    databases: {
      label: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "DynamoDB"],
    },
    cloudDevOps: {
      label: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Basic AWS", "Docker"],
    },
    systemsTools: {
      label: "Systems & Tools",
      icon: Wrench,
      skills: ["Git", "Bash", "Postman", "Burp Suite"],
    },
    operatingSystems: {
      label: "Operating Systems",
      icon: Monitor,
      skills: ["Ubuntu", "Fedora", "Windows"],
    },
  },
};

// Experience Section
export const experienceContent = {
  title: "Experience",
  description: "My professional journey as a backend developer",
  experiences: [
    {
      company: "Slaab.ai",
      position: "Junior Full-Stack Web Developer",
      location: "Remote, India",
      duration: "May 2025 - Present",
      type: "Full-time",
      description:
        "Junior Developer building Agentic AI solutions with Mastra.ai (An Agentic AI framework for Typescript)",
      achievements: [
        "Build Backend for AI Agentic solutions from scratch",
        "Integrate the backend REST API with frontend",
        "Implement entire State management system on frontend",
      ],
      technologies: [
        "TypeScript",
        "Node.js/Bun.js",
        "Hono.js",
        "Next.js",
        "React.js",
        "TanStack Query",
        "Zustand",
        "PostgreSQL",
        "Supabase",
        "Mastra.ai",
      ],
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
  ],
};

// Projects Section
export const projectsContent = {
  title: "Featured Projects",
  description: "A showcase of some of my projects",
  projects: [
    {
      title: "Simple Go API",
      description:
        "High-performance API built with Go and LibSQL, built this to learn Go and Gin.",
      tech: ["Go", "Gin", "LibSQL", "Docker"],
      github: "https://github.com/zjunaidz/simple-go-api",
    },
    {
      title: "Notion knock-off",
      description:
        "A simple Notion-like application built with Next.js and Prisma.",
      tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/zjunaidz/notion-lite",
      demo: "https://potion.zjunaidz.me",
    },
    {
      title: "Game Explorer",
      description: "A simple Game Explorer build using Reactjs and RAWG API.",
      tech: ["React", "Zustand", "Tailwind CSS", "RAWG API"],
      github: "https://github.com/zjunaidz/game-hub",
      demo: "https://igdb.zjunaidz.me",
    },
    {
      title: "Relaycat - A Discord-like Chat App",
      description:
        "A Discord-like chat application built with modern web technologies.",
      tech: [
        "Next.js",
        "Socket.io",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Tanstack query",
        "Tailwind CSS",
      ],
      github: "https://github.com/zjunaidz/relaycat",
    },
  ],
};

// Contact Section
export const contactContent = {
  title: "Get In Touch",
  description:
    "Let's discuss how we can work together to build something amazing. I'm always open to new opportunities and interesting projects.",
  contactInfo: [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/zjunaidz",
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zjunaidz",
      href: personalInfo.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ],
};

// Footer
export const footerContent = {
  links: [
    { icon: Github, href: personalInfo.github },
    { icon: Linkedin, href: personalInfo.linkedin },
    { icon: Mail, href: `mailto:${personalInfo.email}` },
  ],
};
