"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { experienceContent } from "@/data/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {experienceContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {experienceContent.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceContent.experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experienceContent.experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-24 bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
              
              <div className="ml-16">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-1">
                          {experience.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}

          {/* Note for more experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground italic">
              * You can help me add one more experience (¬‿¬)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
