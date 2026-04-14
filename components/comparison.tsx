import { Check, X } from "lucide-react"

export function Comparison() {
  const features = [
    { name: "Non-technical setup", closedclaw: true, zapier: false, copilot: false },
    { name: "Low cost to run", closedclaw: true, zapier: true, copilot: false },
    { name: "Proactive agents", closedclaw: true, zapier: false, copilot: false },
    { name: "Enhanced security", closedclaw: true, zapier: false, copilot: false },
    { name: "Administrative tasks", closedclaw: true, zapier: true, copilot: false },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Competitive Edge</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            What makes us unique?
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            Most of our competitors are cloud-based and carry inherent security risks.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">ClosedClaw</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Zapier</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {features.map((feature, index) => (
                  <tr key={index} className="bg-card">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.closedclaw ? (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                          <X className="h-4 w-4 text-red-500" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.zapier ? (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                          <X className="h-4 w-4 text-red-500" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.copilot ? (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                          <X className="h-4 w-4 text-red-500" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
