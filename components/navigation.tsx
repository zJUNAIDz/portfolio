"use client"

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const path = usePathname();
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/", active: path === "/" },
    { label: "Devlog", href: "/devlogs", active: path.startsWith("/devlogs") },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b hairline bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
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

            if (item.label === "Devlog") {
              return (
                <a
                  key={item.label}
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
              <Link key={item.label} href={item.href} className={className}>
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
