import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

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
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-card p-12 shadow-sm">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to your Dashboard
            </h1>
            <p className="mt-4 text-muted-foreground">
              You are logged in as <span className="font-medium text-foreground">{user.email}</span>
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
