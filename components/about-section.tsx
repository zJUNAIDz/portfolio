"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { aboutContent } from "@/data/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {aboutContent.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Passionate Backend Developer specializing in building scalable, high-performance systems. 
            I love designing robust APIs, optimizing database performance, and architecting cloud-native solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">What I am Learning</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutContent.interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Traits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.personalTraits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-3 flex justify-center">
                        <trait.icon size={28} />
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{trait.title}</h4>
                      <p className="text-xs text-muted-foreground">{trait.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
