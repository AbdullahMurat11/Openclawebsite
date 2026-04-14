export function Market() {
  const marketData = [
    { value: "$15B", label: "Total Addressable Market", size: "large" },
    { value: "$8B", label: "Serviceable Addressable Market", size: "medium" },
    { value: "$3B", label: "Serviceable Obtainable Market", size: "small" },
  ]

  const targetAudience = [
    "Small to medium enterprises",
    "Startups in need of digital transformation",
    "Non-technical founders"
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Opportunity</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Unlocking Market Potential
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Concentric Circles */}
          <div className="relative mx-auto flex items-center justify-center">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-center">
                  <span className="block text-3xl font-bold text-primary">$15B</span>
                  <span className="text-xs text-muted-foreground">TAM</span>
                </span>
              </div>
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-primary/20">
                <div className="absolute flex items-center justify-center" style={{ top: '35%' }}>
                  <span className="text-center">
                    <span className="block text-2xl font-bold text-primary">$8B</span>
                    <span className="text-xs text-muted-foreground">SAM</span>
                  </span>
                </div>
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/40">
                  <span className="text-center">
                    <span className="block text-xl font-bold text-primary-foreground">$3B</span>
                    <span className="text-xs text-primary-foreground/80">SOM</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Market Stats & Target Audience */}
          <div>
            <div className="space-y-6">
              {marketData.map((item, index) => (
                <div key={index} className="rounded-xl border border-border bg-background p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{item.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-primary p-6">
              <h3 className="text-lg font-semibold text-primary-foreground">Target Audience</h3>
              <ul className="mt-4 space-y-2">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-primary-foreground/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
