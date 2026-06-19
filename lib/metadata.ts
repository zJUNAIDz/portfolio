import type { Locale } from "@/lib/i18n";
import { Metadata } from "next";

const SITE_URL = "https://zjunaidz.me";

const languageAlternates = {
  "en-US": `${SITE_URL}/`,
  ja: `${SITE_URL}/ja`,
  "x-default": `${SITE_URL}/`,
};

const copy = {
  en: {
    title: "Junaid Shaikh - Full-Stack Web Developer",
    description:
      "Backend-focused fullstack developer. Async job pipelines, type-safe APIs, and AI/LLM workflows on TypeScript, Node, and Postgres.",
    ogTitle: "Junaid Shaikh - Full-Stack Web Developer",
    ogLocale: "en_US",
    canonical: `${SITE_URL}/`,
  },
  ja: {
    title: "シェク・ジュナエッド - フルスタックウェブデベロッパー",
    description:
      "バックエンド志向のフルスタック開発者。TypeScript・Node・Postgres を軸に、非同期ジョブパイプライン、型安全な API、AI/LLM ワークフローを構築します。",
    ogTitle: "シェク・ジュナエッド - フルスタックウェブデベロッパー",
    ogLocale: "ja_JP",
    canonical: `${SITE_URL}/ja`,
  },
} satisfies Record<Locale, Record<string, string>>;

export function getMetadata(locale: Locale): Metadata {
  const c = copy[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.description,
    applicationName: "zjunaidz Portfolio",
    authors: [{ name: "Junaid Shaikh", url: SITE_URL }],
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
      canonical: c.canonical,
      languages: languageAlternates,
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
      title: c.ogTitle,
      description: c.description,
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
          alt: c.ogTitle,
        },
      ],
      type: "website",
      locale: c.ogLocale,
      url: c.canonical,
      siteName: "zjunaidz",
    },
    twitter: {
      card: "summary_large_image",
      title: c.ogTitle,
      description: c.description,
      images: ["/api/og"],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

// Backward-compat for any existing imports of the English root metadata.
export const rootMetadata: Metadata = getMetadata("en");
