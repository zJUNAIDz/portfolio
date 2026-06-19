import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import type { Locale } from "@/lib/i18n"

export function Home({ locale }: { locale: Locale }) {
  return (
    <main className="relative">
      <div className="mx-auto max-w-5xl border-x hairline">
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <ExperienceSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <Footer locale={locale} />
      </div>
    </main>
  )
}
