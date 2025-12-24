import { ExperienceSkeleton, FooterSkeleton, HeroSkeleton, NavigationSkeleton, ProjectsSkeleton, SkillsSkeleton } from '@/components/skeletons'
import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/navigation').then(mod => mod.Navigation), {
  loading: () => <NavigationSkeleton />,
})
const HeroSection = dynamic(() => import('@/components/hero-section').then(mod => mod.HeroSection), {
  loading: () => <HeroSkeleton />,
})
const ExperienceSection = dynamic(() => import('@/components/experience-section').then(mod => mod.ExperienceSection), {
  loading: () => <ExperienceSkeleton />,
})
const SkillsSection = dynamic(() => import('@/components/skills-section').then(mod => mod.SkillsSection), {
  loading: () => <SkillsSkeleton />,
})
const ProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => mod.ProjectsSection), {
  loading: () => <ProjectsSkeleton />,
})
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer), {
  loading: () => <FooterSkeleton />,
})

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
