import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground">Authentication Error</h1>
        <p className="mt-2 text-muted-foreground">
          Something went wrong during authentication. Please try again.
        </p>
        <Link href="/login">
          <Button className="mt-4">Back to Login</Button>
        </Link>
      </div>
    </div>
  )
}
