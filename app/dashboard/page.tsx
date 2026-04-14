"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const email = localStorage.getItem("userEmail")
    
    if (!isLoggedIn || isLoggedIn !== "true") {
      router.push("/login")
    } else {
      setUserEmail(email)
      setIsLoading(false)
    }
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
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
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{userEmail}</span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-card p-12 shadow-sm">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to Your Dashboard
            </h1>
            <p className="mt-4 text-muted-foreground">
              You are signed in as {userEmail}
            </p>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h2 className="text-lg font-semibold text-foreground">Your Closed Claw Setup</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your AI agents are ready to help you automate your business tasks.
                Connect your Raspberry Pi device to get started.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Button>Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
