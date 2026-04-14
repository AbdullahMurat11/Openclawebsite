import { NextResponse, type NextRequest } from 'next/server'
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE } from '@/lib/auth'

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({
    request,
  })

  // Check for simple auth cookie
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME)
  const isAuthenticated = authCookie?.value === AUTH_COOKIE_VALUE

  // Protect dashboard, welcome, and chat routes
  if (
    (request.nextUrl.pathname.startsWith('/dashboard') || 
     request.nextUrl.pathname.startsWith('/welcome') ||
     request.nextUrl.pathname.startsWith('/chat')) &&
    !isAuthenticated
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return response
}
