import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function NavigationSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Skeleton className="h-8 w-24" />
        <div className="hidden md:flex items-center space-x-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="md:hidden">
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-16 w-64 md:w-96 mb-4" />
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-8 w-48 md:w-64 mb-6" />
          <div className="space-y-2 mb-12 w-full max-w-2xl">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%] mx-auto" />
            <Skeleton className="h-4 w-[80%] mx-auto" />
          </div>
          <div className="flex gap-4 mb-12">
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ExperienceSkeleton() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-12 w-48 mb-6" />
          <Skeleton className="h-4 w-full max-w-2xl" />
          <Skeleton className="h-4 w-[80%] max-w-2xl mt-2" />
        </div>

        <div className="max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <div className="md:ml-16">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-5 w-32" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[95%]" />
                      <Skeleton className="h-4 w-[90%]" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-32 mb-3" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-4 w-[85%]" />
                      </div>
                    </div>
                    <div>
                      <Skeleton className="h-4 w-32 mb-3" />
                      <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-14" />
                        <Skeleton className="h-5 w-18" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsSkeleton() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-12 w-32 mb-6" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:mx-20">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <Skeleton key={j} className="h-6 w-20" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSkeleton() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-12 w-48 mb-6" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-14" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 flex-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FooterSkeleton() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </footer>
  )
}
