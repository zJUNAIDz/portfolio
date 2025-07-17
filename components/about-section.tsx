"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Rocket, Monitor, Zap, Wrench, MapPin } from "lucide-react"

export function AboutSection() {
  const interests = [
    "Distributed Systems",
    "Cloud Architecture",
    "Microservices",
    "API Design",
    "Performance Optimization",
    "System Scalability"
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          {/* <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Passionate Full-Stack Developer with 2+ years of experience building scalable, high-performance systems. I specialize in designing robust APIs, optimizing database performance, and architecting cloud-native solutions that handle millions of requests.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Rocket className="mr-3 text-primary" size={24} />
                  What I love
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2 flex justify-center text-primary">
                    <Monitor size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">Linux Enthusiast</h4>
                  <p className="text-sm text-muted-foreground">
                    Terminal is my second home
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2 flex justify-center text-primary">
                    <MapPin size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">日本語学習者</h4>
                  <p className="text-sm text-muted-foreground">
                    Learning Japanese culture
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2 flex justify-center text-primary">
                    <Zap size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizing for speed
                  </p>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2 flex justify-center text-primary">
                    <Wrench size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    Building solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
