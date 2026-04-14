import { DollarSign, Building2, BriefcaseBusiness, Clock } from "lucide-react"
import Image from "next/image"

export function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: "Expensive to hire personal secretary",
      description: "Small businesses can't afford dedicated administrative staff"
    },
    {
      icon: Building2,
      title: "36M+ small businesses",
      description: "In the US alone need affordable automation solutions"
    },
    {
      icon: BriefcaseBusiness,
      title: "46% of private sector employment",
      description: "Small businesses are the backbone of the economy"
    },
    {
      icon: Clock,
      title: "Productivity loss due to admin tasks",
      description: "Hours wasted on repetitive administrative work"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative mx-auto max-w-md lg:max-w-none order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-primary/10">
              <Image
                src="/images/problem-team.jpg"
                alt="Business team looking at laptop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">The Challenge</h2>
            <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
              The Problem
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center rounded-xl bg-primary p-6 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                    <problem.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-primary-foreground">{problem.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
