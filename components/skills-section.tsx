import { getContent, type Locale } from "@/lib/i18n"
import { Section } from "./section"

export function SkillsSection({ locale }: { locale: Locale }) {
  const { skillsContent } = getContent(locale)
  return (
    <Section
      id="skills"
      index={skillsContent.index}
      title={skillsContent.title}
      meta={skillsContent.meta}
      description={skillsContent.description}
    >
      <div className="border-t hairline">
        {Object.entries(skillsContent.categories).map(([key, category]) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-3 border-b hairline py-5 md:grid-cols-4"
          >
            <div className="flex items-center gap-2.5 text-foreground/90">
              <category.icon className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{category.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 md:col-span-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border hairline px-2.5 py-1 font-mono text-xs text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
