import { Metadata } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://zjunaidz.me"),
  title: "Junaid Shaikh - Full-Stack Web Developer",
  description:
    "Backend-focused fullstack developer. Async job pipelines, type-safe APIs, and AI/LLM workflows on TypeScript, Node, and Postgres.",
  applicationName: "zjunaidz Portfolio",
  authors: [{ name: "Junaid Shaikh", url: "https://zjunaidz.me" }],
  creator: "Junaid Shaikh",
  publisher: "Junaid Shaikh",
  keywords: [
    "Junaid Shaikh",
    "zjunaidz",
    "Junaid Shaikh web developer",
    "Full-Stack Developer",
    "Backend Developer in India",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
  ],
  alternates: {
    canonical: "https://zjunaidz.me/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Junaid Shaikh - Full-Stack Web Developer",
    description:
      "Backend-focused fullstack developer. Async job pipelines, type-safe APIs, and AI/LLM workflows on TypeScript, Node, and Postgres.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Junaid Shaikh - Full-Stack Developer",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://zjunaidz.me",
    siteName: "zjunaidz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Shaikh - Full-Stack Developer",
    description:
      "Backend-focused fullstack developer. Async job pipelines, type-safe APIs, and AI/LLM workflows on TypeScript, Node, and Postgres.",
    images: ["/api/og"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};
