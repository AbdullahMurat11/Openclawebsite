import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
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
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Local AI agents for small businesses. Run powerful automation on Raspberry Pi 
              with complete data privacy and no token costs after purchase.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#agents" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Closed Claw. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for small businesses, by small business advocates.
          </p>
        </div>
      </div>
    </footer>
  )
}
