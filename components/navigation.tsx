"use client"

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const path = usePathname();
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
              {navItems.map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
