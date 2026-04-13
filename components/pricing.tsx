import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  const features = [
    "Pre-configured Raspberry Pi hardware",
    "All 6 AI agents pre-installed",
    "Local LLM optimized for edge computing",
    "Complete setup documentation",
    "Email and calendar integration",
    "Project management tools",
    "30-day money-back guarantee"
  ]

  const updateFeatures = [
    "Latest AI model updates",
    "New agent capabilities",
    "Security patches",
    "Priority support access"
  ]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Simple Pricing</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Anti-enterprise pricing for real businesses
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            No monthly subscriptions, no per-token fees. Just straightforward pricing that respects your budget.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Hardware Package */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-card p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                Most Popular
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">OpenClaw Box</h3>
              <p className="mt-2 text-muted-foreground">Complete hardware + software package</p>
              
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$1,000</span>
                <span className="text-muted-foreground">one-time</span>
              </div>

              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Pre-order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Update Plan */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground">Update Plan</h3>
            <p className="mt-2 text-muted-foreground">Keep your agents current</p>
            
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">$60</span>
              <span className="text-muted-foreground">/year</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Optional - your box works forever without it</p>

            <ul className="mt-8 space-y-4">
              {updateFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Check className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" variant="outline" className="mt-8 w-full border-border text-foreground hover:bg-secondary">
              Add to Order
            </Button>

            {/* Comparison */}
            <div className="mt-8 rounded-xl bg-secondary/50 p-4">
              <p className="text-sm font-medium text-foreground">Compare to enterprise AI:</p>
              <p className="mt-1 text-xs text-muted-foreground">
                GPT-4 API costs ~$0.03/1K tokens. A business using 100K tokens/day would spend ~$1,000/month. 
                OpenClaw pays for itself in the first month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
