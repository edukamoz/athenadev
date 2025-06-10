"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
    children: React.ReactNode
    redirectTo?: string
}

/**
 * Componente ProtectedRoute - Protege rotas que requerem autenticação
 * Redireciona usuários não autenticados para a página de login
 */
export function ProtectedRoute({ children, redirectTo = "/auth" }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push(redirectTo)
        }
    }, [isAuthenticated, isLoading, router, redirectTo])

    // Mostrar loading enquanto verifica autenticação
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        )
    }

    // Não renderizar nada se não estiver autenticado (redirecionamento em andamento)
    if (!isAuthenticated) {
        return null
    }

    return <>{children}</>
}
