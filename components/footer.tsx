import { footerContent, personalInfo } from "@/data/portfolio-data"
import { ArrowUpRight } from "lucide-react"
import { Socials } from "./socials"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="px-6 py-14 sm:px-10 md:py-20">
      <div className="flex items-baseline justify-between border-b hairline pb-3">
        <h2 className="flex items-baseline gap-3">
          <span className="eyebrow text-muted-foreground">
            {footerContent.index}
          </span>
          <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {footerContent.title}
          </span>
        </h2>
        <span className="hidden font-mono text-xs text-muted-foreground sm:block">
          {footerContent.meta}
        </span>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="max-w-md leading-relaxed text-foreground/90">
            {footerContent.blurb}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group mt-6 inline-flex items-baseline gap-2 text-lg font-medium tracking-tight underline-offset-4 hover:underline sm:text-xl"
          >
            {personalInfo.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="md:col-span-2 md:justify-self-end">
          <p className="eyebrow mb-3 text-muted-foreground">Elsewhere</p>
          <Socials />
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t hairline pt-5 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {personalInfo.name}</span>
        <span>Built with Next.js · No copyrights, bruh.</span>
      </div>
    </footer>
  )
}
