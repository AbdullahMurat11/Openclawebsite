import { NextResponse } from "next/server"
import { AUTH_COOKIE_NAME } from "@/lib/auth"

export async function POST(request: Request) {
  const url = new URL("/", request.url)
  const response = NextResponse.redirect(url)
  
  // Clear the auth cookie
  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0, // Expire immediately
    path: "/",
  })

  return response
}
