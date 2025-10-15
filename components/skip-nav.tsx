"use client"

export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-coffee-dark focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-caramel focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
