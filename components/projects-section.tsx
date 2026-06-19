import { getContent, ui, type Locale } from "@/lib/i18n"
import { ArrowUpRight } from "lucide-react"
import { Github } from "@/components/icons"
import { Section } from "./section"

export function ProjectsSection({ locale }: { locale: Locale }) {
  const { projectsContent } = getContent(locale)
  const t = ui[locale]
  return (
    <Section
      id="projects"
      index={projectsContent.index}
      title={projectsContent.title}
      meta={projectsContent.meta}
      description={projectsContent.description}
    >
      <div className="border-t hairline">
        {projectsContent.projects.map((project) => (
          <article
            key={project.id}
            className="grid gap-6 border-b hairline py-10 md:grid-cols-12"
          >
            {/* Meta column */}
            <div className="md:col-span-3">
              <span className="font-mono text-3xl text-foreground/25">
                {project.id}
              </span>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {project.period}
              </p>
              <div className="mt-4 flex flex-col items-start gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-foreground/70 transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  {t.source}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-xs text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {t.liveDemo}
                  </a>
                )}
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-9">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-muted-foreground">{project.subtitle}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-foreground/90">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border hairline px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 font-mono text-sm text-muted-foreground">
        {projectsContent.outro}
      </p>
    </Section>
  )
}
