"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { personalInfo, heroContent } from "@/data/portfolio-data"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 flex flex-col"
          >
            <span className="text-primary text-lg opacity-75">{personalInfo.nameJp}</span>
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 flex flex-col"
          >
            <span className="text-primary text-lg opacity-75">{personalInfo.titleJp}</span>
            {personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {heroContent.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href={personalInfo.cvUrl} target="_blank">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center gap-6"
          >
            <Link
              href={personalInfo.github}
              target="_blank"
              className="p-3 rounded-full border hover:bg-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="p-3 rounded-full border hover:bg-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
