"use client"

import { skillsContent } from "@/data/portfolio-data"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {skillsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {skillsContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:mx-20">
          {Object.entries(skillsContent.categories).map(([key, category], index) => (
            <div key={key}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-primary">
                      <category.icon size={22} />
                    </span>
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill}>
                        <Badge
                          variant="outline"
                          className="hover:bg-primary/10 transition-colors text-sm"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
