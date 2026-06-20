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
  nameJp: "シェク・ジュナエッド",
  title: "Backend-focused Fullstack Developer",
  titleJp: "バックエンド志向のフルスタック開発者",
  email: "junaidshaikh3967@gmail.com",
  location: "Mumbai, IN",
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
  index: "INDEX",
  // Short, confident, with a bit of voice. No self-deprecation.
  intro:
    "I build backends that hold up under load: async job pipelines, type-safe APIs, and LLM workflows on a TypeScript / Node / Postgres stack. I care about the unglamorous parts, like idempotency, crash recovery, and data that stays correct when things go sideways.",
  tagline: "Architected a production-bound AI platform backend from scratch. Now looking for the next hard problem.",
};

export const aboutContent = {
  index: "00",
  title: "About",
  meta: "whoami",
  // 1–2 tight paragraphs, confident with personality.
  bio: [
    "I'm a recent Information Technology grad from the University of Mumbai (8.38 CGPI) who fell hard for the backend. Most people see the UI; I think about what's happening behind it: the queue draining jobs, the transaction holding a write together, the worker recovering from a crash without losing state.",
    "At Slaab.ai I architected the backend of an AI SEO platform from scratch and learned what \"production-bound\" actually demands. The rest of the time I'm on Linux breaking and fixing my own setup, chipping away at Japanese (JLPT N3), and grinding LeetCode while pretending it's fun.",
  ],
  facts: [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Focus", value: "Backend systems · async job processing · APIs" },
    { label: "Daily driver", value: "Linux (Fedora) · Neovim-curious" },
    { label: "Learning", value: "日本語 (JLPT N3)" },
    { label: "Education", value: "BSc IT, University of Mumbai · 8.38 CGPI" },
  ],
  interests: [
    "Distributed Systems",
    "Async Job Processing",
    "API Design",
    "Databases & Indexing",
    "AI / LLM Workflows",
    "Linux & Self-hosting",
  ],
};

export const skillsContent = {
  index: "03",
  title: "Skills",
  meta: "stack.toml",
  description: "What I reach for when I build.",
  categories: {
    languages: {
      label: "Languages",
      icon: Code2,
      skills: ["TypeScript / JavaScript", "Go", "Core Java", "C / C++ (basic)"],
    },
    backend: {
      label: "Backend",
      icon: Cloud,
      skills: [
        "Node.js / Bun",
        "Hono.js",
        "Express.js",
        "tRPC",
        "BullMQ / Redis Queues",
        "Mastra.ai (agents)",
        "WebSocket / Socket.io",
      ],
    },
    frontend: {
      label: "Frontend",
      icon: Globe,
      skills: [
        "React.js",
        "Next.js",
        "TanStack Query",
        "Zustand",
        "Redux / RTK",
        "Tailwind CSS",
      ],
    },
    data: {
      label: "Data & Caching",
      icon: Database,
      skills: [
        "PostgreSQL",
        "Prisma",
        "Drizzle",
        "sqlc",
        "MongoDB",
        "Redis",
        "SQLite",
      ],
    },
    devops: {
      label: "DevOps & Tooling",
      icon: Monitor,
      skills: [
        "Docker / Podman",
        "Nginx",
        "AWS (EC2, ECS, S3, RDS, Lambda)",
        "Git / GitHub",
        "Linux / Bash",
      ],
    },
  },
};

export const experienceContent = {
  index: "01",
  title: "Experience",
  meta: "git log --reverse",
  description: "Where I've shipped real systems.",
  experiences: [
    {
      company: "Slaab.ai",
      position: "Full-Stack Developer",
      location: "Remote, India",
      duration: "May 2025 – Jul 2025",
      type: "Full-time",
      summary:
        "Architected and built the backend from scratch for a production-bound AI SEO platform covering automated audits, keyword research, and AI content generation. I owned the systems work end to end and shipped the frontend alongside it.",
      achievements: [
        "Designed the backend architecture from zero: 14 REST endpoints, a tRPC layer, and 200+ TypeScript modules spanning audit, content, and agent domains.",
        "Built a 10-stage agentic audit pipeline orchestrating LLM reasoning over external data (SERP, Lighthouse, security headers, crawl) to turn raw site data into scored, actionable fixes.",
        "Engineered an async, queue-based execution model (BullMQ + Redis) to run multi-minute audits off the request path, with fault-tolerant workers, graceful shutdown, and Postgres-backed job state for crash recovery.",
        "Wrote idempotent integrations with DataForSEO, FireCrawl, and Google Lighthouse, normalizing large-scale crawl/SERP data and tracking per-job token & API usage to keep LLM cost in check.",
        "Implemented a conversational SEO agent with persistent memory and tool-calling, plus a 3-stage article writer (outline → section generation → humanization).",
        "Shipped the Next.js 15 / React 19 frontend: Supabase SSR auth with session middleware, TanStack Query data layer, Zustand state, and live job-progress polling that recovers in-flight jobs across reloads.",
      ],
      technologies: [
        "TypeScript",
        "Bun / Node.js",
        "Hono.js",
        "tRPC",
        "PostgreSQL (Supabase)",
        "BullMQ / Redis",
        "Mastra.ai",
        "Next.js 15 / React 19",
        "TanStack Query",
        "Zustand",
        "Docker",
      ],
      icon: Building2,
    },
  ],
};

// Projects Section
export const projectsContent = {
  index: "02",
  title: "Selected Work",
  meta: "~/projects",
  description:
    "Side projects where I got to make the hard calls myself: pagination strategy, real-time consistency, deployment, all of it.",
  projects: [
    {
      id: "001",
      title: "Relaycat",
      subtitle: "Discord-like real-time chat platform",
      period: "Aug 2023 – Mar 2024",
      summary:
        "A full Discord-style chat app with servers, channels, roles, real-time messaging, media uploads, and voice, built as a Turborepo monorepo with end-to-end type safety.",
      highlights: [
        "Turborepo monorepo (Bun/Hono API + Next.js client) with a shared Zod contract package enforcing type safety across 25 REST endpoints.",
        "Keyset pagination on UUIDv7 keys with composite indexes on hot foreign keys, so channel-history reads stay constant-time regardless of message volume.",
        "Guest/Mod/Admin RBAC enforced inside ACID transactions at the query layer; optimistic real-time messaging over Socket.io with TanStack Query cache mutations (instant edits/deletes, zero refetch).",
        "Presigned S3 uploads (7 media types, server-enforced limits), OAuth + verified-email auth via Better Auth, multi-stage Docker builds behind an Nginx TLS reverse proxy.",
      ],
      tech: [
        "Next.js",
        "Hono.js / Bun",
        "Socket.io",
        "Drizzle / Postgres",
        "Better Auth",
        "LiveKit",
        "TanStack Query",
        "MinIO (S3)",
        "Docker",
      ],
      github: "https://github.com/zjunaidz/relaycat",
    },
    {
      id: "002",
      title: "Notion Lite",
      subtitle: "Collaborative document workspace",
      period: "Nov 2023 – Dec 2023",
      summary:
        "A real-time, Notion-style workspace with live cursors, presence, and conflict-free concurrent editing, plus infinitely nested pages and the full publish/share flow.",
      highlights: [
        "Conflict-free collaborative editing via Yjs + Convex reactive queries, backed by a Cloudflare Worker + Durable Object for cursor/presence coordination.",
        "16 Convex serverless functions and 2 composite indexes powering infinitely nested page trees, recursive archive/restore, and orphan-safe re-parenting with server-side ownership enforcement.",
        "Publish/share flows with public preview routes; a 60+ component editor stack (BlockNote rich text, cover images, emoji icons, full-text search, dark/light, mobile-responsive).",
      ],
      tech: [
        "Next.js",
        "Convex",
        "Yjs",
        "Cloudflare Workers + Durable Objects",
        "Clerk",
        "BlockNote",
        "Tailwind CSS",
      ],
      github: "https://github.com/zjunaidz/notion-lite",
      demo: "https://potion.zjunaidz.me",
    },
    {
      id: "003",
      title: "Game Explorer",
      subtitle: "Game-discovery SPA over the RAWG API",
      period: "Apr 2023 – Jun 2023",
      summary:
        "A responsive discovery app over RAWG's 880K+ game catalog, with multi-criteria filtering, infinite scroll, and a caching strategy that all but eliminates redundant fetches.",
      highlights: [
        "Multi-criteria filtering (genre, platform, sort, search) + infinite-scroll pagination across 25+ components and 11 custom hooks.",
        "Pre-seeded genre/platform lists as TanStack Query initialData with a 24-hour staleTime, so filter sidebars get a zero-network first paint and never refetch within the cache window.",
        "Refactored a prop-drilled tree to a Zustand store + a generic ApiClient<T> over Axios; route-level code-splitting, dynamic SEO, and a multi-stage Docker build (Bun → Nginx).",
      ],
      tech: [
        "React",
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "Axios",
        "RAWG API",
        "Docker",
      ],
      github: "https://github.com/zjunaidz/game-hub",
      demo: "https://igdb.zjunaidz.me",
    },
    {
      id: "004",
      title: "Go REST API",
      subtitle: "Learning Go, the systems way",
      period: "2024",
      summary:
        "A compact REST API I built to get fluent in Go: clean handler structure, SQL over an ORM, containerized for deployment.",
      highlights: [
        "Idiomatic Go service with Gin, hand-written SQL against LibSQL, and a Dockerfile tuned for small images. A deliberate exercise in writing Go that reads like Go.",
      ],
      tech: ["Go", "Gin", "LibSQL", "Docker"],
      github: "https://github.com/zjunaidz/gin-rest-api",
    },
    {
      id: "005",
      title: "Redis Rate Limiter",
      subtitle: "Published npm library · token bucket in Lua",
      period: "2025",
      summary:
        "A published npm package that does rate limiting the way it should be done: the entire token-bucket decision runs inside Redis as an atomic Lua script, so every check is a single network round-trip with no race conditions. Drop-in RateLimiter class plus optional Hono middleware.",
      highlights: [
        "Token bucket implemented end-to-end in a Redis Lua script: read state, refill by elapsed time, cap, and decrement all happen atomically server-side, which kills the check-then-act race that breaks naive limiters under concurrency.",
        "One EVALSHA call per request: the script is cached in Redis, so each rate-limit check costs a single round-trip regardless of load, designed to sit on the hot path without becoming the bottleneck.",
        "Framework-agnostic RateLimiter core with an optional Hono middleware that returns a clean 429 JSON response; fully typed, configurable maxRequests / windowSizeInSeconds, shipped as ESM via tsup.",
        "Published to npm as @zjunaidz/rate-limiter, so it's installable, documented, and reusable in real projects, not a throwaway demo.",
      ],
      tech: [
        "TypeScript",
        "Redis",
        "Lua",
        "ioredis",
        "Hono.js",
        "tsup",
        "npm",
      ],
      github: "https://github.com/zJUNAIDz/redis-lua-rate-limiter",
    },
  ],
  outro:
    "There's more on my GitHub, and I'm always mid-build on something bigger.",
};

// Footer / contact
export const footerContent = {
  index: "04",
  title: "Get in touch",
  meta: "mailto:",
  blurb:
    "Open to backend / fullstack roles and interesting problems. The fastest way to reach me is email.",
  links: [
    { label: "GitHub", icon: Github, href: personalInfo.github },
    { label: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin },
    { label: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
  ],
};

// Kept for backward-compat with any existing imports.
export const contactContent = {
  title: "Get In Touch",
  description: footerContent.blurb,
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
