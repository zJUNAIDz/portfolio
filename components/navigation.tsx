"use client"

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const path = usePathname();
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/", active: path === "/" },
    { label: "Devlog", href: "/devlogs", active: path === "/devlogs" },
  ]

  return (
    <>
      <nav className={`z-50 transition-all duration-300 border-b`} >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item) => {
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
                        } catch (err) {
                          router.push(item.href)
                        }
                      }}
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        item.active ? "text-primary underline underline-offset-3" : "text-foreground/70"
                      )}
                    >
                      {item.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium hover:text-primary transition-colors",
                      item.active ? "text-primary underline underline-offset-3" : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
