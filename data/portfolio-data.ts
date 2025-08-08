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
  title: "Full-Stack Web Developer",
  titleJp: "フルスタックWebエンジニア",
  email: "junaidshaikh3967@gmail.com",
  location: "India",
  github: "https://github.com/zjunaidz",
  linkedin: "https://linkedin.com/in/zjunaidz",
  instagram: "https://instagram.com/zjunaidz",
  twitter: "https://twitter.com/zjunaidz",
  resumeUrl:
    "https://drive.google.com/file/d/1OD9is1AeAwSCDW6gmeQJfQhpyt45FleL/view?usp=sharing",
};

// Hero Section
export const heroContent = {
  subtitle: "Full-Stack Developer",
  description:
    "A recent graduate based in India, learning and building full-stack web applications with a focus on backend systems and infrastructure. Also learning Japanese Language and currently at almost N4 . I use Fedora btw :p",
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
      title: "Linux & Web Development Enthusiast",
      description: "Exploring Linux systems and building web applications",
      icon: Monitor,
    },
    {
      title: "日本語学習者",
      description:
        "Learning Japanese Language and culture. Currently at N5 level.",
      icon: MapPin,
    },
  ],
};

// Skills Section
export const skillsContent = {
  title: "Skills & Technologies",
  description: "Technologies and tools I use to build stuff",
  categories: {
    languages: {
      label: "Programming Languages",
      icon: Code2,
      skills: [
        "Javascript/TypeScript",
        "Go",
        "Core Java",
        "Basic C/C++",
        "Basic Lua",
      ],
    },
    frameworks: {
      label: "Frameworks & Technologies",
      icon: Globe,
      skills: [
        "Node.js",
        "React.js",
        "Next.js",
        "Express.js",
        "Hono.js",
        "Gin",
        "Prisma",
        "Mastra.ai",
        "tRPC",
        "TanStack Query",
        "Zustand",
        "Tailwind CSS",
        "Shadcn UI",
        "socket.io",
      ],
    },
    databases: {
      label: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
    },
    cloudDevOps: {
      label: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Basic AWS", "Docker"],
    },
    systemsTools: {
      label: "Systems & Tools",
      icon: Wrench,
      skills: [
        "VS Code",
        "Git",
        "Bash",
        "Postman",
        "PG Admin",
        "Burp Suite",
        "Ubuntu",
        "Fedora",
      ],
    },
  },
};

// Experience Section
export const experienceContent = {
  title: "Professional Experience",
  description:
    "A summary of my career journey and contributions as a developer",
  experiences: [
    {
      company: "Slaab.ai",
      position: "Junior Full-Stack Web Developer",
      location: "Remote, India",
      duration: "May 2025 - July 2025",
      type: "Full-time",
      description:
        "Contributed to the development of AI powered web application called SEO Agent using Mastra.ai, Implemented features like SEO Site Audit, Keyword Research, and Content Generation, etc. with the help of Mastra.ai workflows and DataForSEO API.",
      achievements: [
        "Built backend system for the AI-driven(llm api calls with some smart logic) application.",
        "Developed RESTful APIs to integrate backend services with frontend application.",
        "Implemented state management solutions on the frontend using Zustand for application state and TanStack Query for server state management.",
        "Optimized application performance, reduced re-renders and improved user experience.",
      ],
      technologies: [
        "TypeScript",
        "Node.js/Bun.js",
        "Hono.js",
        "Next.js",
        "React.js",
        "TanStack Query",
        "Zustand",
        "Supabase DB  (PostgreSQL)",
        "Mastra.ai",
        "DataForSEO API",
        "BullMQ",
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
      title: "Relaycat - A Discord-like Chat App",
      description:
        "A Discord-like chat application built with modern web technologies.",
      tech: [
        "Next.js",
        "Node.js",
        "Hono.js",
        "Socket.io",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS",
      ],
      github: "https://github.com/zjunaidz/relaycat",
    },
    {
      title: "Notion knock-off",
      description:
        "A simple Notion-like application built with Next.js and Prisma.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Zustand",
        "Prisma",
        "PostgreSQL",
        "Convex",
      ],
      github: "https://github.com/zjunaidz/notion-lite",
      demo: "https://potion.zjunaidz.me",
    },
    {
      title: "Game Explorer",
      description: "A simple Game Explorer build using React.js and RAWG API.",
      tech: ["React.js", "Zustand", "Tailwind CSS", "RAWG API"],
      github: "https://github.com/zjunaidz/game-hub",
      demo: "https://igdb.zjunaidz.me",
    },
    {
      title: "Simple Go API",
      description:
        "High-performance API built with Go and LibSQL, built this to learn Go and Gin.",
      tech: ["Go", "Gin", "LibSQL", "Docker"],
      github: "https://github.com/zjunaidz/gin-rest-api",
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
    { label: "GitHub", icon: Github, href: personalInfo.github },
    { label: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin },
    { label: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
  ],
};
