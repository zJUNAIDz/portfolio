import { ExperienceSection } from '@/components/experience-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
