import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Navigation } from '@/components/navigation'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}
