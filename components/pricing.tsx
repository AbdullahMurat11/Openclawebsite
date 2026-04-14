import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$1,000",
      period: "upfront",
      monthly: "$10/Month",
      description: "Ideal for small businesses with limited amount of tasks",
      features: [
        "Regular models",
        "Software updates",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$1,000",
      period: "upfront",
      monthly: "$25/Month",
      description: "Ideal for businesses with heavy administrative needs",
      features: [
        "Access to newer models",
        "Software updates",
        "Priority email support"
      ],
      popular: true
    },
    {
      name: "Unlimited",
      price: "$1,000",
      period: "upfront",
      monthly: "$35/Month",
      description: "Ideal for medium-sized businesses with large teams",
      features: [
        "Access to all models",
        "Software updates",
        "24/7 chat support",
        "Dashboard analytics"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            One time purchase + subscription-based Revenue
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            Choose the plan that works best for your business needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border p-8 ${
                plan.popular 
                  ? "border-primary bg-primary text-primary-foreground" 
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-1 text-lg font-semibold ${plan.popular ? "text-primary-foreground/90" : "text-primary"}`}>
                  + {plan.monthly}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <Check className={`h-3 w-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className={`mt-8 w-full ${
                  plan.popular 
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
