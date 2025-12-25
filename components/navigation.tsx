"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "./icons"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    // { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    // { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent border-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className="text-xl font-bold"
            >
              Junaid
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {mounted ? (
                  theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
                ) : null}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {mounted ? (
                  theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
                ) : null}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="relative bg-background border-b">
            <div className="container mx-auto px-4 py-8 pt-20">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
