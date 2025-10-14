"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { supportedLanguages } from "@/middleware"

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLang: string) => {
    if (lang === newLang) return

    // Replace the language segment in the URL
    let newPathname = pathname.replace(`/${lang}`, `/${newLang}`)

    // Handle edge cases where the language segment might not be properly detected
    if (newPathname === pathname) {
      // This might happen if the pathname doesn't contain the language segment
      // Extract the path after the language segment
      const pathWithoutLang = pathname.substring(pathname.indexOf("/", 1) || pathname.length)
      newPathname = `/${newLang}${pathWithoutLang}`
    }

    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map((language) => (
          <DropdownMenuItem
            key={language}
            onClick={() => switchLanguage(language)}
            className={lang === language ? "font-bold" : ""}
          >
            {language === "en" ? "English" : "Français"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
