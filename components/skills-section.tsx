"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code2, Globe, Database, Cloud, Wrench, Monitor } from "lucide-react"

export function SkillsSection() {
  const skillCategories = {
    backendLanguages: [
      "TypeScript", "JavaScript", "Go", "Java", "C++"
    ],
    webFrameworks: [
      "Node.js", "React.js", "Next.js", "Express.js", "Hono.js", "Gin"
    ],
    databases: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "DynamoDB"
    ],
    cloudDevOps: [
      "AWS", "Docker",
    ],
    systemsTools: [
      "Linux", "Git", "Bash", "Postman", "Burp Suite"
    ],
    operatingSystems: [
      "Ubuntu", "Fedora", "Debian"
    ]
  }

  const categoryConfig = {
    backendLanguages: { icon: Code2, label: "Backend Languages" },
    webFrameworks: { icon: Globe, label: "Web Frameworks" },
    databases: { icon: Database, label: "Databases" },
    cloudDevOps: { icon: Cloud, label: "Cloud & DevOps" },
    systemsTools: { icon: Wrench, label: "Systems & Tools" },
    operatingSystems: { icon: Monitor, label: "Operating Systems" }
  }

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build stuff
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">
                      {category === "backendLanguages" && <Code2 size={24} />}
                      {category === "webFrameworks" && <Globe size={24} />}
                      {category === "databases" && <Database size={24} />}
                      {category === "cloudDevOps" && <Cloud size={24} />}
                      {category === "systemsTools" && <Wrench size={24} />}
                      {category === "operatingSystems" && <Monitor size={24} />}
                    </span>
                    {categoryConfig[category as keyof typeof categoryConfig].label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="hover:bg-green-400 hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Terminal window mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="glass bg-black/90 text-green-400 font-mono">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400">zjunaidz@fedora:~$</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm">
                <div>$ whoami</div>
                <div className="text-blue-400">little_bit_of_this_little_bit_of_that_developer</div>
                <div>$ cat skills.txt</div>
                <div className="text-yellow-400">Trying and failing to build silly programs since 2020...</div>
                <div className="flex items-center">
                  <span>$ </span>
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
    </section>
  )
}
