"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Closed Claw Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground">Closed Claw</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#agents" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            AI Agents
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#features" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#agents" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                Log in
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
