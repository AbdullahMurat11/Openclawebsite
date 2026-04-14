"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2, CheckCircle } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("You're on the list! We'll be in touch soon.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="border-t border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-background p-8 md:p-16">
          {/* Background effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -bottom-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Ready to bring AI to your business?
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Join the waitlist for early access to Closed Claw. Be among the first small businesses 
              to harness the power of local AI agents.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-xs"
                required
                disabled={status === "loading"}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>

            {status === "success" && (
              <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{message}</span>
              </div>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-500">{message}</p>
            )}

            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required. We&apos;ll notify you when we&apos;re ready to ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
