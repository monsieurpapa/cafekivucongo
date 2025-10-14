import "server-only"

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
}

export type Language = keyof typeof dictionaries

export const getDictionary = async (locale: Language) => {
  try {
    // Fallback to default language if the requested locale is not supported
    if (!dictionaries[locale]) {
      console.warn(`Dictionary for locale "${locale}" not found, falling back to "fr"`)
      return dictionaries.fr()
    }
    return dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error)
    // Fallback to French if there's an error
    return dictionaries.fr()
  }
}
