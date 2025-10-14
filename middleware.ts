import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Make sure the defaultLanguage is set to French
export const supportedLanguages = ["fr", "en"]
export const defaultLanguage = "fr"

// In the getLocale function, ensure French is always prioritized
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // Force French to be the default regardless of browser settings
  return match(languages, supportedLanguages, defaultLanguage)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next()
  }

  // Check if the pathname already has a language
  const pathnameHasLanguage = supportedLanguages.some(
    (language) => pathname.startsWith(`/${language}/`) || pathname === `/${language}`,
  )

  if (pathnameHasLanguage) return NextResponse.next()

  // Redirect if there is no language in the pathname
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}
