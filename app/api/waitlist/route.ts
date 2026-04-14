import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json")

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function getWaitlist(): Promise<{ emails: { email: string; joinedAt: string }[] }> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return { emails: [] }
  }
}

async function saveWaitlist(data: { emails: { email: string; joinedAt: string }[] }) {
  await ensureDataDir()
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(data, null, 2))
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

    const waitlist = await getWaitlist()

    // Check if email already exists
    if (waitlist.emails.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "Email already on waitlist" },
        { status: 409 }
      )
    }

    // Add new email
    waitlist.emails.push({
      email: email.toLowerCase(),
      joinedAt: new Date().toISOString(),
    })

    await saveWaitlist(waitlist)

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
  try {
    const waitlist = await getWaitlist()
    return NextResponse.json({
      count: waitlist.emails.length,
      emails: waitlist.emails,
    })
  } catch (error) {
    console.error("Waitlist GET error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
