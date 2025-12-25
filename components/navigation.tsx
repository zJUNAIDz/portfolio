"use client"

import Link from "next/link"

export function Navigation() {

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
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
                  className="text-md hover:text-primary transition-colors"
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
