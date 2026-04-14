import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background pt-20">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Main headline - large typography focus */}
        <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Closed<span className="text-primary">Claw</span>
        </h1>
        
        {/* Tagline */}
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl lg:text-3xl font-light">
          Empowering Innovation, Transforming Lives.
        </p>

        {/* Simple description */}
        <p className="mx-auto mt-8 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
          AI automation that works around the clock. No setup, no maintenance, complete privacy. 
          Your business runs smarter while you focus on what matters.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/login">
            <Button size="lg" className="group h-12 px-8 text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Subtle bottom accent line */}
        <div className="mt-20 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  )
}
