import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/4 right-10 h-4 w-4 rounded-full bg-accent/40" />
        <div className="absolute bottom-1/3 left-20 h-6 w-6 rounded-full bg-accent/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              ClosedClaw
            </h1>
            <p className="mt-4 text-xl text-primary-foreground/90 md:text-2xl">
              Empowering Innovation, Transforming Lives.
            </p>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-primary-foreground/70 lg:mx-0">
              Your plug-and-forget AI device that automates administrative tasks. 
              No technical knowledge required - runs 24/7 with complete privacy.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/login">
                <Button size="lg" className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right image - cityscape placeholder */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-primary-foreground/20 shadow-2xl">
              <Image
                src="/images/hero-device.jpg"
                alt="ClosedClaw Device"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary-foreground px-4 py-2 shadow-lg">
              <p className="text-sm font-medium text-primary">Plug & Forget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
