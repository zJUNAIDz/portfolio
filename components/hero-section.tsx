import { getContent, ui, type Locale } from "@/lib/i18n"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Socials } from "./socials"

export function HeroSection({ locale }: { locale: Locale }) {
  const { heroContent, personalInfo } = getContent(locale)
  const t = ui[locale]
  const year = new Date().getFullYear()

  return (
    <section
      id="home"
      className="bg-spec-grid border-b hairline px-6 py-14 sm:px-10 md:py-20"
    >
      {/* Masthead bar */}
      <div className="flex items-baseline justify-between border-b hairline pb-3">
        <span className="eyebrow text-muted-foreground">{heroContent.index}</span>
        <span className="font-mono text-xs text-muted-foreground">{year}</span>
      </div>

      {/* Identity */}
      <div className="mt-10">
        <p className="font-mono text-sm text-muted-foreground">
          {personalInfo.nameJp}
        </p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {personalInfo.title}
        </p>
      </div>

      {/* Spec rows */}
      <dl className="mt-8 grid max-w-lg grid-cols-1 gap-x-10 font-mono text-xs sm:grid-cols-2">
        <div className="flex items-baseline justify-between gap-4 border-b hairline py-2">
          <dt className="text-muted-foreground">{t.location}</dt>
          <dd>{personalInfo.location}</dd>
        </div>

      </dl>

      {/* Intro */}
      <p className="mt-10 max-w-2xl text-base leading-relaxed sm:text-lg">
        {heroContent.intro}
      </p>
      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
        {heroContent.tagline}
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Link
          aria-label="View resume"
          href={personalInfo.resumeUrl}
          target="_blank"
          className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          {t.viewResume}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Socials />
      </div>
    </section>
  )
}
