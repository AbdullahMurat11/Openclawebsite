import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Now shipping on Raspberry Pi</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Your own AI team,{" "}
            <span className="text-primary">running locally</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Powerful AI automation on a Raspberry Pi. Buy once, use forever - no token costs 
            after purchase. Complete data privacy with local LLM processing.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
              Pre-order Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">100% Local Processing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Cpu className="h-5 w-5 text-primary" />
              <span className="text-sm">Runs on Raspberry Pi</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">$0</span>
              </div>
              <span className="text-sm">Zero Token Costs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
