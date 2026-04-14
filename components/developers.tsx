import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

const developers = [
  {
    name: "Abdullah Murat Gokalp",
    role: "Full Stack Developer",
    image: "/developers/abdullah.jpg",
    github: "https://github.com/AbdullahMurat11",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "AI Engineer",
    image: "/developers/member2.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Backend Developer",
    image: "/developers/member3.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Frontend Developer",
    image: "/developers/member4.jpg",
    github: "#",
    linkedin: "#",
  },
]

export function Developers() {
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
      </div>
    </section>
  )
}
