"use client"

import { heroContent, personalInfo } from "@/data/portfolio-data"
import { Paperclip } from "lucide-react"
import Link from "next/link"
import { Socials } from "./socials"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 z-10">
        <div
          className="max-w-4xl mx-auto text-center"
        >
          {/* Name */}
          <h1

            className="text-4xl md:text-7xl font-bold mb-4 flex flex-col"
          >
            <span className="text-primary text-lg opacity-75">{personalInfo.nameJp}</span>
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2

            className="text-xl md:text-2xl text-muted-foreground mb-6 flex flex-col"
          >
            <span className="text-primary text-lg opacity-75">{personalInfo.titleJp}</span>
            {personalInfo.title}
          </h2>

          {/* Description */}
          <p

            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {heroContent.description}
          </p>

          {/* Action Buttons */}
          <div

            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link aria-label="View resume" href={personalInfo.resumeUrl} target="_blank">
                <Paperclip className="w-4 h-4 mr-2" />
                View Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <Socials />
        </div>
      </div>
    </section>
  )
}
