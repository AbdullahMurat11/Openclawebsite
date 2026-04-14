"use client"

import { useState } from "react"
import { Github, Linkedin, ArrowRight, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const developers = [
  {
    name: "Abdullah Murat Gokalp",
    role: "CEO & Product Strategist",
    image: "/developers/abdullah.jpg",
    github: "https://github.com/AbdullahMurat11",
    linkedin: "#",
    description: "Leading product vision and business strategy for ClosedClaw."
  },
  {
    name: "Dean Smith",
    role: "CTO & System Architect",
    image: "/developers/member2.jpg",
    github: "#",
    linkedin: "#",
    description: "Building the technical infrastructure and AI systems."
  },
  {
    name: "Alex Tan",
    role: "Marketing Lead",
    image: "/developers/member3.jpg",
    github: "#",
    linkedin: "#",
    description: "Driving growth and market positioning strategies."
  },
]

export function Developers() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setMessage({ type: "success", text: data.message })
      setEmail("")
    } catch (error) {
      setMessage({ 
        type: "error", 
        text: error instanceof Error ? error.message : "Something went wrong" 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="developers" className="border-t border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Meet the Developers
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            The passionate team behind OpenCLA, building the future of AI automation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-primary/10 text-3xl font-bold text-primary">
                  {dev.name.charAt(0)}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground">{dev.name}</h3>
                <p className="text-sm text-muted-foreground">{dev.role}</p>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Waitlist */}
        <div className="mt-20 rounded-2xl border border-border bg-background p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
              Join the Waitlist
            </h3>
            <p className="mt-3 text-muted-foreground text-pretty">
              Be the first to know when we launch. Get early access and exclusive updates.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted border-border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
              <Button 
                type="submit" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
            {message && (
              <div className={`mt-4 flex items-center justify-center gap-2 text-sm ${
                message.type === "success" ? "text-green-600" : "text-red-500"
              }`}>
                {message.type === "success" && <CheckCircle className="h-4 w-4" />}
                {message.text}
              </div>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              No spam, ever. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
