import { getContent, type Locale } from "@/lib/i18n"
import { Section } from "./section"

export function ExperienceSection({ locale }: { locale: Locale }) {
  const { experienceContent } = getContent(locale)
  return (
    <Section
      id="experience"
      index={experienceContent.index}
      title={experienceContent.title}
      meta={experienceContent.meta}
      description={experienceContent.description}
    >
      <div className="space-y-14">
        {experienceContent.experiences.map((experience) => (
          <article key={experience.company}>
            {/* Header row */}
            <div className="flex flex-col gap-1 border-b hairline pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {experience.company}
                </h3>
                <span className="text-muted-foreground">
                  {experience.position}
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {experience.duration} · {experience.location}
              </div>
            </div>

            <p className="mt-5 max-w-3xl leading-relaxed text-foreground/90">
              {experience.summary}
            </p>

            {/* Achievements */}
            <ul className="mt-6 space-y-3">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border hairline px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
