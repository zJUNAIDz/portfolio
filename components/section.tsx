import { ReactNode } from "react"

type SectionProps = {
  id: string
  index: string
  title: string
  meta?: string
  description?: string
  children: ReactNode
  className?: string
}

/**
 * Shared spec-sheet section frame: a numbered, mono-eyebrow header sitting on a
 * hairline rule, with an optional right-aligned monospace meta tag.
 */
export function Section({
  id,
  index,
  title,
  meta,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b hairline px-6 py-14 sm:px-10 md:py-20 ${className ?? ""}`}
    >
      <div className="flex items-baseline justify-between gap-4 border-b hairline pb-3">
        <h2 className="flex items-baseline gap-3">
          <span className="eyebrow text-muted-foreground">{index}</span>
          <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </span>
        </h2>
        {meta && (
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            {meta}
          </span>
        )}
      </div>

      {description && (
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}

      <div className="mt-10">{children}</div>
    </section>
  )
}
