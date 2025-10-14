import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string | number) {
  return typeof price === "string"
    ? price
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
}
