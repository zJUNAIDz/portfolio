import {
  Building2,
  Cloud,
  Code2,
  Database,
  Github,
  Globe,
  LeetcodeIcon,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  XTwitterIcon,
} from "@/components/icons";

export const personalInfo = {
  name: "Junaid Shaikh",
  nameJp: "シェク ジュナエッド",
  title: "Full-Stack Developer",
  titleJp: "フルスタックWebエンジニア",
  email: "junaidshaikh3967@gmail.com",
  location: "India",
  sns: [
    {
      label: "Github",
      Icon: Github,
      url: "https://github.com/zjunaidz",
    },
    {
      label: "LeetCode",
      Icon: LeetcodeIcon,
      url: "https://leetcode.com/u/zjunaidz",
    },
    {
      label: "LinkedIn",
      Icon: Linkedin,
      url: "https://linkedin.com/in/zjunaidz",
    },
    {
      label: "XTwitter",
      Icon: XTwitterIcon,
      url: "https://x.com/zjunaidz",
    },
    {
      label: "Email",
      Icon: Mail,
      url: "mailto:junaidshaikh3967@gmail.com",
    },
  ],
  github: "https://github.com/zjunaidz",
  leetcode: "https://leetcode.com/u/zjunaidz",
  linkedin: "https://linkedin.com/in/zjunaidz",
  instagram: "https://instagram.com/zjunaidz",
  twitter: "https://twitter.com/zjunaidz",
  resumeUrl:
    "https://drive.google.com/drive/folders/1m0d2gpdHphka4_CY8xJ5aMEa1r4tnQWM?usp=sharing",
};

export const heroContent = {
  subtitle: "Full-Stack Developer",
  description:
    "Recent Grad from India, Building full-stack web apps with a backend bias, tinkering on Linux, learning Japanese, and pretending Leetcode is fun.",
};

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
        "Node.js/Bun.js",
        "React.js",
        "Next.js",
        "Express.js",
        "Hono.js",
        "Gin",
        "PrismaORM",
        "DrizzleORM",
        "Mastra.ai",
        "tRPC",
        "TanStack Query",
        "Zustand",
        "Redux/Toolkit",
        "Tailwind CSS",
        "Websocket/Socket.io",
        "WebRTC",
      ],
    },
    databases: {
      label: "Databases",
      icon: Database,
      skills: ["PostgreSQL/MySQL", "MongoDB", "Redis", "SQLite"],
    },
    otherTechs: {
      label: "Other Technologies",
      icon: Cloud,
      skills: [
        "Basic AWS",
        "Docker",
        "Git",
        "Bash",
        "Postman",
        "PG Admin",
        "Burp Suite",
        "GNU/Linux",
      ],
    },
  },
};

export const experienceContent = {
  title: "Professional Experience",
  description:
    "A summary of my career journey and contributions as a developer",
  experiences: [
    {
      company: "Slaab.ai",
      position: "Junior Full-Stack Developer",
      location: "Remote, India",
      duration: "May 2025 - July 2025",
      type: "Full-time",
      description:
        "Worked on an internal, pre-launch AI-powered SEO platform intended for B2B customers, focused on automated website audits, keyword research, and content analysis. Contributed primarily to backend systems and agentic workflows, while also shipping frontend features and performance improvements during active development.",
      achievements: [
        "Designed and implemented the backend architecture for an AI-driven SEO audit system during early-stage product development.",
        "Built agentic LLM workflows using Mastra.ai to coordinate crawl analysis, SERP evaluation, audit reasoning, and actionable fix generation.",
        "Integrated DataForSEO, FireCrawl, and Puppeteer to collect crawl data, keyword intelligence, and page-level signals for downstream analysis.",
        "Implemented an async, job-based execution model using BullMQ to safely handle long-running audits with retries, idempotency, and failure isolation.",
        "Used PostgreSQL as a persistent store for job state and intermediate results to support retries and client polling.",
        "Developed REST APIs for initiating audits and querying progress and results during internal testing.",
        "Reworked an existing UI by introducing structured client and server state management, reducing render overhead and improving responsiveness.",
      ],
      technologies: [
        "TypeScript",
        "Node.js / Bun.js",
        "Hono.js",
        "React.js / Next.js",
        "TanStack Query",
        "Zustand",
        "PostgreSQL (Supabase)",
        "Mastra.ai",
        "DataForSEO API",
        "FireCrawl",
        "Puppeteer",
        "BullMQ",
        "Docker",
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
      description: "A Discord-like chat application.",
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
      description: "A simple Notion-like application.",
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
      description: "A simple Game Explorer.",
      tech: ["React.js", "Zustand", "Tailwind CSS", "RAWG API"],
      github: "https://github.com/zjunaidz/game-hub",
      demo: "https://igdb.zjunaidz.me",
    },
    {
      title: "Simple Go API",
      description: "Simple REST API.",
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
