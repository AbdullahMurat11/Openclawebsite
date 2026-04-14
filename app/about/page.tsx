import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Cloud, AlertTriangle, CheckCircle, Cpu, Shield, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About - Closed Claw",
  description: "Learn why traditional AI agents cost too much and how Closed Claw delivers local AI on Raspberry Pi with no token costs.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              The Problem With{" "}
              <span className="text-primary">AI Token Costs</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Small businesses are being priced out of AI automation. 
              We built Closed Claw to change that.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Why Traditional AI Agents Are Expensive
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Most AI agent platforms charge you for every single interaction. Every email drafted, 
                every document analyzed, every task automated - it all costs tokens. And those tokens 
                add up fast.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <DollarSign className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Pay-Per-Use Adds Up</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A typical small business using AI for emails and admin can spend $200-500/month on tokens alone. 
                      That&apos;s $2,400-6,000 per year.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <Cloud className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cloud Dependency</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your data goes to external servers. If the service goes down or changes pricing, 
                      your business operations are at risk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Privacy Concerns</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sensitive business data, customer information, and proprietary processes 
                      all flow through third-party systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">Typical Annual AI Costs</h3>
              <p className="mt-2 text-sm text-muted-foreground">For a small business using cloud AI agents</p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">Email automation</span>
                  <span className="font-semibold text-foreground">$1,200/year</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">Document processing</span>
                  <span className="font-semibold text-foreground">$800/year</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">Customer support</span>
                  <span className="font-semibold text-foreground">$1,500/year</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">Project management</span>
                  <span className="font-semibold text-foreground">$600/year</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-foreground">Total Annual Cost</span>
                  <span className="text-xl font-bold text-destructive">$4,100+/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Our Solution: Local AI on Raspberry Pi
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We deliver a Raspberry Pi with a powerful local LLM already installed and configured. 
              Once you buy it, there are no more token costs. The AI runs entirely on your hardware.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">One-Time Purchase</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pay $1,000 once for the hardware with pre-installed AI. No monthly fees, 
                      no per-use charges, no surprises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Runs 100% Locally</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The AI model runs entirely on your Raspberry Pi. Your data never leaves 
                      your premises. Works even without internet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Complete Data Privacy</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Customer data, business secrets, financial information - it all stays on 
                      your device. Total peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Optional Updates</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Get the latest AI model improvements for just $60/year. Completely optional - 
                      your device keeps working without it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-xl" />
                <Image
                  src="/images/raspberry-pi.png"
                  alt="Closed Claw Raspberry Pi Device"
                  width={400}
                  height={300}
                  className="relative rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              The Math Is Simple
            </h2>
            <p className="mt-6 text-muted-foreground">
              See how much you save over time with Closed Claw
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Cloud AI */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-foreground">Cloud AI Agents</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pay-per-token model</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 1</span>
                  <span className="font-semibold text-foreground">$4,100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 2</span>
                  <span className="font-semibold text-foreground">$8,200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 3</span>
                  <span className="font-semibold text-foreground">$12,300</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-semibold text-foreground">5-Year Total</span>
                  <span className="text-2xl font-bold text-destructive">$20,500</span>
                </div>
              </div>
            </div>

            {/* Closed Claw */}
            <div className="rounded-2xl border-2 border-primary bg-card p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Best Value
              </div>
              <h3 className="text-xl font-bold text-foreground">Closed Claw</h3>
              <p className="mt-2 text-sm text-muted-foreground">One-time purchase</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 1 (Hardware)</span>
                  <span className="font-semibold text-foreground">$1,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 2 (Updates)</span>
                  <span className="font-semibold text-foreground">$60</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Year 3 (Updates)</span>
                  <span className="font-semibold text-foreground">$60</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-semibold text-foreground">5-Year Total</span>
                  <span className="text-2xl font-bold text-primary">$1,240</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-sm text-muted-foreground">You save</p>
                <p className="text-3xl font-bold text-primary">$19,260</p>
                <p className="text-sm text-muted-foreground">over 5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ready to Break Free From Token Costs?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Join the small businesses already saving thousands with local AI. 
              Pre-order your Closed Claw device today.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/#pricing">
                  Pre-order Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
