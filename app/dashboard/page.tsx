import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, getAdminEmail } from "@/lib/auth"
import { ArrowLeft, User } from "lucide-react"

export default async function DashboardPage() {
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
          <div className="flex items-center gap-4">
            <Link href="/welcome">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
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
          </div>
          <Link 
            href="/welcome" 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            title={userEmail}
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-card p-12 shadow-sm">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to your Dashboard
            </h1>
            <p className="mt-4 text-muted-foreground">
              You are logged in as <span className="font-medium text-foreground">{userEmail}</span>
            </p>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h2 className="text-lg font-semibold text-foreground">Your Closed Claw Setup</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your AI agents are ready to help you automate your business tasks.
                Connect your Raspberry Pi device to get started.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
