"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Gamepad2, Home, BookOpen, Trophy, UserPlus, Mail, User, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

/**
 * Componente Header - Cabeçalho principal da aplicação
 * Contém navegação principal, logo e controles de usuário
 * Implementa acessibilidade completa e navegação responsiva
 */
export function Header() {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Função para fechar o menu ao navegar
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Função para fazer logout
  const handleLogout = async () => {
    await logout()
    closeMenu()
  }

  // Itens de navegação principal
  const navigationItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/jogos", label: "Jogos", icon: Gamepad2 },
    { href: "/ranking", label: "Ranking", icon: Trophy },
    { href: "/sobre", label: "Sobre", icon: BookOpen },
    { href: "/contato", label: "Contato", icon: Mail },
  ]

  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo e nome da marca */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
              aria-label="AthenaDev - Página inicial"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-foreground">AthenaDev</span>
            </Link>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Navegação principal">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors"
                  aria-label={`Navegar para ${item.label}`}
                >
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Controles do cabeçalho */}
          <div className="flex items-center space-x-2">
            {isAuthenticated && user ? (
              // Menu do usuário autenticado
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={`Avatar de ${user.name}`} />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">
                        Nível {user.level} • {user.totalScore} pontos
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/perfil" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/configuracoes" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Botão de login para usuários não autenticados
              <Button variant="default" size="sm" className="hidden md:flex items-center space-x-1" asChild>
                <Link href="/auth">
                  <UserPlus className="w-4 h-4" aria-hidden="true" />
                  <span>Entrar</span>
                </Link>
              </Button>
            )}

            {/* Botão do menu mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t"
            role="navigation"
            aria-label="Menu de navegação mobile"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors"
                    onClick={closeMenu}
                    aria-label={`Navegar para ${item.label}`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              {/* Ações do usuário no menu mobile */}
              {isAuthenticated && user ? (
                <>
                  <div className="px-3 py-2 border-t mt-2 pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={`Avatar de ${user.name}`} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">Nível {user.level}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/perfil"
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    <User className="w-4 h-4" aria-hidden="true" />
                    <span>Perfil</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors w-full text-left"
                  >
                    <LogOut className="w-4 h-4" aria-hidden="true" />
                    <span>Sair</span>
                  </button>
                </>
              ) : (
                <Link
                  href="/auth"
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors mt-2"
                  onClick={closeMenu}
                >
                  <UserPlus className="w-4 h-4" aria-hidden="true" />
                  <span>Entrar</span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
