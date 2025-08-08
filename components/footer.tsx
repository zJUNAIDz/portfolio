"use client"

import { motion } from "framer-motion"
import { footerContent, personalInfo } from "@/data/portfolio-data"
import Link from "next/link"

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
          <div className="flex gap-6">
            {footerContent.links.map((link, index) => (
              <Link
                aria-label={`Social link ${link.label}`}
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <span>どうぞよろしくお願いします</span>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} <Link aria-label="Junaid Shaikh's GitHub" href={personalInfo.github}>Junaid Shaikh</Link>.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
