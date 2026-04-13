export function Stats() {
  const stats = [
    {
      value: "36.5M+",
      label: "Small Businesses in the US",
      description: "The backbone of the American economy"
    },
    {
      value: "$761B",
      label: "AI Market by 2027",
      description: "Projected spending in AI services"
    },
    {
      value: "2.2B",
      label: "Active AI Agents by 2030",
      description: "Expected growth from 28.6M in 2025"
    },
    {
      value: "46%",
      label: "Private Employment",
      description: "Jobs created by small businesses"
    }
  ]

  return (
    <section className="border-y border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Market Opportunity</h2>
          <p className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Small businesses are being left behind in the AI revolution
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
