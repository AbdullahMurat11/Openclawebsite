import { Mail, Code, Calendar, Search, Home, Bot } from "lucide-react"

export function Agents() {
  const agents = [
    {
      name: "Clawford",
      role: "Admin Agent",
      icon: Bot,
      description: "Your system administrator. Coordinates other agents, manages tasks, and ensures smooth operations.",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      name: "Octavio",
      role: "Programmer",
      icon: Code,
      description: "Handles code generation, GitHub integrations, and technical automation tasks.",
      color: "bg-emerald-500/10 text-emerald-400"
    },
    {
      name: "Marlin",
      role: "Proactive Agent",
      icon: Calendar,
      description: "Anticipates your needs, schedules follow-ups, and keeps projects moving forward.",
      color: "bg-orange-500/10 text-orange-400"
    },
    {
      name: "Shelly",
      role: "Personal Assistant",
      icon: Mail,
      description: "Manages your email, calendar, and communications. Your digital executive assistant.",
      color: "bg-pink-500/10 text-pink-400"
    },
    {
      name: "Clamson",
      role: "Research Agent",
      icon: Search,
      description: "Conducts web research, gathers market intelligence, and compiles reports.",
      color: "bg-cyan-500/10 text-cyan-400"
    },
    {
      name: "Patrick",
      role: "Home Automation",
      icon: Home,
      description: "Integrates with smart home systems for office automation and environment control.",
      color: "bg-amber-500/10 text-amber-400"
    }
  ]

  return (
    <section id="agents" className="border-y border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Meet Your Team</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            A crew of specialized AI agents
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            Each agent is trained for specific tasks and can collaborate with others to solve complex problems for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${agent.color}`}>
                <agent.icon className="h-7 w-7" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-foreground">{agent.name}</h3>
                <p className="text-sm font-medium text-accent">{agent.role}</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
