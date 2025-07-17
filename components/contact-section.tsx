"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, Github, Linkedin, MapPin, Send, Download } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export function ContactSection() {
  const t = useTranslations()

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "junaidshaikh3967@gmail.com",
      href: "mailto:junaidshaikh3967@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/zjunaidz",
      href: "https://github.com/zjunaidz",
      color: "text-purple-500"
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/zjunaidz",
      href: "https://linkedin.com/in/zjunaidz",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "India",
      href: "#",
      color: "text-green-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-3">💬</span>
                Let&apos;s connect
              </h3>
              <p className="text-muted-foreground">
                You can reach me through any of the channels below. I&apos;m always open to discussing new projects, ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="glass hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className={`p-3 rounded-full bg-muted ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 space-y-4"
            >
              <Link href="mailto:junaidshaikh3967@gmail.com">
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send me an email
                </Button>
              </Link>
              <Link target="_blank" href="https://drive.google.com/file/d/1pOkrEd4tO05OfRcXLzThkmSxAeV0seZP/view?usp=sharing">
                <Button variant="outline" className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </Link>
          </motion.div>
        </motion.div>

        {/* Terminal-style contact card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass bg-black/90 text-green-400 font-mono h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400">contact.sh</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-400">#!/bin/bash</span>
                </div>
                <div>
                  <span className="text-purple-400"># Contact Information</span>
                </div>
                <div>
                  <span className="text-yellow-400">EMAIL</span>=<span className="text-white">junaidshaikh3967@gmail.com</span>
                </div>
                <div>
                  <span className="text-yellow-400">GITHUB</span>=<span className="text-white">github.com/zjunaidz</span>
                </div>
                <div>
                  <span className="text-yellow-400">LINKEDIN</span>=<span className="text-white">linkedin.com/in/zjunaidz</span>
                </div>
                <div>
                  <span className="text-yellow-400">LOCATION</span>=<span className="text-white">India</span>
                </div>
                <div className="pt-4">
                  <span className="text-purple-400"># Languages</span>
                </div>
                <div>
                  <span className="text-yellow-400">SPEAKS</span>=<span className="text-white">(English 日本語)</span>
                </div>
                <div className="pt-4">
                  <span className="text-purple-400"># Status</span>
                </div>
                <div>
                  <span className="text-blue-400">echo</span> <span className="text-white"> Available for new opportunities </span>
                </div>
                <div className="pt-4">
                  <span className="text-green-400">$ ./contact.sh</span>
                </div>
                <div className="text-cyan-400">
                  ✓ Ready to collaborate on exciting projects!
                </div>
                <div className="flex items-center pt-2">
                  <span className="text-green-400">$ </span>
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-green-400 ml-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    </section >
  )
}
