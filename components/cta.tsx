import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-background p-8 md:p-16">
          {/* Background effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -bottom-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Ready to bring AI to your business?
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Join the waitlist for early access to OpenClaw. Be among the first small businesses 
              to harness the power of local AI agents.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                Schedule a Demo
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required. We&apos;ll notify you when we&apos;re ready to ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
