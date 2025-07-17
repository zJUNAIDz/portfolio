"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4 items-center">
          {/* Logo and Description */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gradient mb-2">Junaid</h3>
            <p className="text-sm text-muted-foreground">
              Backend Software Engineer passionate about building scalable systems
            </p>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Junaid@example.com"
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >

            <p className="text-xs text-muted-foreground mt-1">
              © 2024 Junaid. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Terminal signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t text-center"
        >
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-green-500">$</span> echo Thanks for visiting!
          </div>
          <div className="font-mono text-xs text-muted-foreground mt-2 opacity-60 flex items-center justify-center gap-1">
            Built with Next.js, Tailwind CSS, Framer Motion &
            <Heart size={14} className="text-red-500 fill-current" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
