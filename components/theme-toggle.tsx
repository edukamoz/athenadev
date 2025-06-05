"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

/**
 * Componente ThemeToggle - Alternador de tema claro/escuro
 * Permite ao usuário alternar entre os modos de visualização
 * Implementa acessibilidade e feedback visual adequado
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Garante que o componente seja renderizado apenas no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Evita hidration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9 p-0" disabled aria-label="Carregando alternador de tema">
        <div className="w-4 h-4 animate-pulse bg-muted rounded" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
      title={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" aria-hidden="true" />
      )}
    </Button>
  )
}
