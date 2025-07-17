"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, Terminal } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import Link from "next/link"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Terminal cursor animation */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute top-20 right-20 text-green-500"
      >
        <Terminal className="w-8 h-8" />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Welcome to my portfolio
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-relaxed"
          >
            Junaid
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-light mb-6 text-muted-foreground"
          >
            Backend Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafting robust, scalable backend solutions with expertise in microservices, cloud architecture, and high-performance systems.
          </motion.p>

          {/* <motion.p
            variants={itemVariants}
            className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Link target="_blank" href="https://drive.google.com/file/d/1pOkrEd4tO05OfRcXLzThkmSxAeV0seZP/view?usp=sharing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/zjunaidz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/zjunaidz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
