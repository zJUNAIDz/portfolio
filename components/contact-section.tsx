"use client"

import { motion } from "framer-motion"
import { Send, Download } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { contactContent, personalInfo } from "@/data/portfolio-data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {contactContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactContent.contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="hover:shadow-md transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 hover:text-primary transition-colors"
                    >
                      <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">
                          {item.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.value}
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <Button size="lg" asChild className="flex-1">
              <Link href={`mailto:${personalInfo.email}`}>
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="flex-1">
              <Link href={personalInfo.resumeUrl} target="_blank">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
