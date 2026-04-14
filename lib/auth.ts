// Simple hardcoded authentication
const ADMIN_EMAIL = "abdullahmuratgokalp@gmail.com"
const ADMIN_PASSWORD = "Amerika1234"

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function getAdminEmail(): string {
  return ADMIN_EMAIL
}

export const AUTH_COOKIE_NAME = "auth_session"
export const AUTH_COOKIE_VALUE = "authenticated"
