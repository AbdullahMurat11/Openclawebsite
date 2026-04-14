import { NextResponse } from "next/server"
import { validateCredentials, AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!validateCredentials(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    const response = NextResponse.json({ success: true })
    
    // Set authentication cookie
    response.cookies.set(AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return response
  } catch {
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    )
  }
}
