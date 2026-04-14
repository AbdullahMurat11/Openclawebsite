import { Check } from "lucide-react"
import Image from "next/image"

export function Solution() {
  const features = [
    "Plug-and-forget AI device",
    "Automates administrative tasks",
    "Requires no technical knowledge to setup",
    "Uses 6 agents isolated for security",
    "Runs 24/7, requires no prompting",
    "Can modify access and scope"
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
              Our Solution
            </p>
            <p className="mt-4 text-muted-foreground text-pretty">
              A revolutionary AI device that transforms how small businesses handle administrative work.
            </p>
            
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Device Image */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted p-8">
              <Image
                src="/images/device.jpg"
                alt="ClosedClaw Device"
                fill
                className="object-contain"
              />
            </div>
            {/* Device label */}
            <div className="absolute -bottom-4 right-8 rounded-lg bg-primary px-4 py-2 shadow-lg">
              <p className="text-sm font-medium text-primary-foreground">ClosedClaw Box</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
