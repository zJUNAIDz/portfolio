"use client"

import { ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const path = usePathname();
  const router = useRouter();

  const locale = path === "/ja" || path.startsWith("/ja/") ? "ja" : "en";
  const t = ui[locale];

  // The home route is the only localized page; map the locale switch to its
  // counterpart and keep non-localized routes (devlogs) pointing at /ja home.
  const switchHref = locale === "ja" ? "/" : "/ja";

  const homeHref = locale === "ja" ? "/ja" : "/";
  const homeActive = path === "/" || path === "/ja";

  const navItems = [
    { label: t.navHome, href: homeHref, active: homeActive },
    { label: t.navDevlog, href: "/devlogs", active: path.startsWith("/devlogs") },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b hairline bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link
          href={homeHref}
          className="font-mono text-sm font-medium tracking-tight"
        >
          zjunaidz<span className="text-muted-foreground">.me</span>
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const className = cn(
              "font-mono text-xs uppercase tracking-widest transition-colors hover:text-foreground",
              item.active ? "text-foreground" : "text-muted-foreground"
            )

            if (item.label === t.navDevlog) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    try {
                      const last = sessionStorage.getItem("lastDevlog")
                      const dest = last && last.startsWith("/devlogs") ? last : item.href
                      router.push(dest)
                    } catch {
                      router.push(item.href)
                    }
                  }}
                  className={className}
                >
                  {item.label}
                </a>
              )
            }

            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            )
          })}

          <Link
            href={switchHref}
            aria-label={t.switchToAria}
            className="border hairline px-2 py-1 font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {t.switchTo}
          </Link>
        </div>
      </div>
    </nav>
  )
}
