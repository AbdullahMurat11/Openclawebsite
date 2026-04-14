import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, getAdminEmail } from "@/lib/auth"
import { ArrowRight, Settings, LayoutDashboard, Cpu, MessageSquare, Users } from "lucide-react"

export default async function WelcomePage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME)
  
  if (authCookie?.value !== AUTH_COOKIE_VALUE) {
    redirect("/login")
  }

  const userEmail = getAdminEmail()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
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
          <form action="/auth/signout" method="post">
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl text-center">
          {/* Welcome Message */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Welcome back!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Signed in as <span className="font-medium text-foreground">{userEmail}</span>
            </p>
          </div>

          {/* Chat with Agent - Primary Action */}
          <Link 
            href="/chat"
            className="group mb-8 flex items-center justify-between rounded-xl border-2 border-primary bg-primary/5 p-6 transition-all hover:bg-primary/10 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <MessageSquare className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-foreground">Chat with your Agent</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Start a conversation and get things done
                </p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Navigation Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dashboard Card */}
            <Link 
              href="/dashboard"
              className="group rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Dashboard</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                View analytics and manage your account.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Devices Card */}
            <Link 
              href="/dashboard"
              className="group rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Devices</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Connect and manage your Raspberry Pi devices.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Manage Devices
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Settings Card */}
            <Link 
              href="/dashboard"
              className="group rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Settings</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Configure your preferences and account settings.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Open Settings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Waitlist Admin Card */}
            <Link 
              href="/admin/waitlist"
              className="group rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Waitlist</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                View and manage waitlist signups.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                View Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
