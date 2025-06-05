"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * Provedor de tema personalizado
 * Encapsula o NextThemesProvider para facilitar o uso
 * Gerencia o estado global do tema da aplicação
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
