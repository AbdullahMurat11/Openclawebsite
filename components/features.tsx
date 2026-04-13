import { Shield, Zap, DollarSign, Lock, Server, RefreshCw } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Complete Data Privacy",
      description: "All processing happens locally on your device. Your business data never leaves your premises."
    },
    {
      icon: DollarSign,
      title: "Zero Token Costs",
      description: "No per-request fees, no usage limits. Pay once for hardware and use it forever with unlimited queries."
    },
    {
      icon: Zap,
      title: "Always Available",
      description: "No internet dependency for core functions. Your AI assistant works even when connectivity is down."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Business owners&apos; top concern addressed. Your sensitive data stays protected on local hardware."
    },
    {
      icon: Server,
      title: "Simple Hardware",
      description: "Runs on affordable Raspberry Pi hardware. No expensive servers or cloud infrastructure required."
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates",
      description: "Optional $60/year update plan keeps your AI agents current with the latest capabilities."
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Why OpenClaw</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Enterprise AI power without enterprise costs
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            We believe small businesses deserve access to powerful AI automation without breaking the bank or compromising on security.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
