"use client"

import { motion } from "framer-motion"
import { BarChart3, Building2, ExternalLink, Github, Rocket, Settings } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function ProjectsSection() {

  const projects = [
    {
      title: "Simple Go API",
      description: "High-performance API built with Go and LibSQL, built this to learn Go and Gin.",
      image: "/api/placeholder/400/250",
      tech: ["Go", "Gin", "LibSQL", "Docker",],
      github: "https://github.com/zjunaidz/simple-go-api",
      featured: true
    },
    {
      title: "Notion knock-off",
      description: "A not so Full-featured note-taking app with collaboration, and few other features.",
      image: "/api/placeholder/400/250",
      tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/zjunaidz/notion-lite",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Game Explorer ",
      description: "A simple Game Explorer build using Reactjs and RAWG API.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Zustand", "Tailwind CSS", "RAWG API"],
      github: "https://github.com/zjunaidz/game-hub",
      demo: "https://example.com",
      featured: false
    },
    {
      title: "Relaycat - A Discord-like Chat App",
      description: "A Discord-like chat application built with modern web technologies.",
      image: "/api/placeholder/400/250",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Zustand", "Tanstack query", "Tailwind CSS"],
      github: "https://github.com/zjunaidz/relaycat",
      demo: "https://example.com",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of backend systems and infrastructure projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={project.featured ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <Card className="h-full glass hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20 text-muted-foreground">
                      {index % 4 === 0 && <Rocket size={80} />}
                      {index % 4 === 1 && <Building2 size={80} />}
                      {index % 4 === 2 && <BarChart3 size={80} />}
                      {index % 4 === 3 && <Settings size={80} />}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="default" className="ml-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-left">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* {[
              // { label: "Projects", value: "5+", icon: FolderOpen },
              { label: "Commits", value: "1.5K+", icon: GitCommit },
              { label: "Languages", value: "3+", icon: Code },
              // { label: "Experience", value: "4+ yrs", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl mb-2 flex justify-center text-primary">
                  <stat.icon size={32} />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))} */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
