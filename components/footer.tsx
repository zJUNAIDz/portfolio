"use client"

import { motion } from "framer-motion"
import { Socials } from "./socials"

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Links */}
          <Socials />
          {/* Copyright */}
          {/* There ain't no copyrights bruh */}
        </motion.div>
      </div>
    </footer>
  )
}
