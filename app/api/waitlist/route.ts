import { NextResponse } from "next/server"

// In-memory store for waitlist (persists during server runtime)
// For production, you would use a database like Supabase
type WaitlistEntry = { email: string; joinedAt: string }

declare global {
  // eslint-disable-next-line no-var
  var waitlistStore: WaitlistEntry[] | undefined
}

// Initialize or get existing store
if (!global.waitlistStore) {
  global.waitlistStore = []
}

function getWaitlist(): WaitlistEntry[] {
  return global.waitlistStore || []
}

function addToWaitlist(entry: WaitlistEntry) {
  if (!global.waitlistStore) {
    global.waitlistStore = []
  }
  global.waitlistStore.push(entry)
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const waitlist = getWaitlist()

    // Check if email already exists
    if (waitlist.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "Email already on waitlist" },
        { status: 409 }
      )
    }

    // Add new email
    addToWaitlist({
      email: email.toLowerCase(),
      joinedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function GET() {
  const waitlist = getWaitlist()
  return NextResponse.json({
    count: waitlist.length,
    emails: waitlist,
  })
}
