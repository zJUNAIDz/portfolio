import * as en from "@/data/portfolio-data";
import * as ja from "@/data/portfolio-data.ja";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ja";
}

/**
 * Returns the full content bundle for a locale. Non-translatable data (icons,
 * urls, ids) lives in the English module and is re-used by the Japanese module,
 * so both bundles share identical shapes.
 */
export function getContent(locale: Locale) {
  const dict = locale === "ja" ? ja : en;
  return {
    personalInfo: dict.personalInfo,
    heroContent: dict.heroContent,
    aboutContent: dict.aboutContent,
    experienceContent: dict.experienceContent,
    skillsContent: dict.skillsContent,
    projectsContent: dict.projectsContent,
    footerContent: dict.footerContent,
  };
}

/** Hardcoded UI micro-labels that live in components, not in the content data. */
export const ui = {
  en: {
    navHome: "Home",
    navDevlog: "Devlog",
    location: "LOCATION",
    coord: "COORD",
    viewResume: "View résumé",
    interests: "Interests",
    source: "Source",
    liveDemo: "Live demo",
    elsewhere: "Elsewhere",
    builtWith: "Built with Next.js · No copyrights, bruh.",
    switchTo: "日本語",
    switchToAria: "View this page in Japanese",
  },
  ja: {
    navHome: "ホーム",
    navDevlog: "開発ログ",
    location: "所在地",
    coord: "座標",
    viewResume: "履歴書を見る",
    interests: "興味・関心",
    source: "ソース",
    liveDemo: "デモ",
    elsewhere: "その他のリンク",
    builtWith: "Next.js で構築 · 著作権なし。",
    switchTo: "EN",
    switchToAria: "View this page in English",
  },
} satisfies Record<Locale, Record<string, string>>;
