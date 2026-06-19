import { getContent, ui, type Locale } from "@/lib/i18n"
import { Section } from "./section"

export function AboutSection({ locale }: { locale: Locale }) {
  const { aboutContent } = getContent(locale)
  const t = ui[locale]
  return (
    <Section
      id="about"
      index={aboutContent.index}
      title={aboutContent.title}
      meta={aboutContent.meta}
    >
      <div className="grid gap-10 md:grid-cols-5">
        {/* Bio */}
        <div className="space-y-5 md:col-span-3">
          {aboutContent.bio.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {para}
            </p>
          ))}

          {/* Interests */}
          <div className="pt-2">
            <p className="eyebrow mb-3 text-muted-foreground">{t.interests}</p>
            <div className="flex flex-wrap gap-2">
              {aboutContent.interests.map((item) => (
                <span
                  key={item}
                  className="border hairline px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Facts table */}
        <dl className="md:col-span-2">
          {aboutContent.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-3 gap-3 border-b hairline py-3 font-mono text-xs first:border-t"
            >
              <dt className="text-muted-foreground">{fact.label}</dt>
              <dd className="col-span-2 text-foreground/90">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
