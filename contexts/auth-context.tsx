"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { apiClient, type User, handleApiError } from "@/lib/api"

interface AuthContextType {
    user: User | null
    isLoading: boolean
    isAuthenticated: boolean
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
    register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
    logout: () => Promise<void>
    forgotPassword: (email: string) => Promise<{ success: boolean; error?: string }>
    resetPassword: (token: string, password: string) => Promise<{ success: boolean; error?: string }>
    refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    const isAuthenticated = !!user

    // Aguardar hidratação
    useEffect(() => {
        setMounted(true)
    }, [])

    // Verificar token ao carregar a aplicação (apenas no cliente)
    useEffect(() => {
        if (mounted) {
            checkAuthStatus()
        }
    }, [mounted])

    const checkAuthStatus = async () => {
        // Só executar no cliente
        if (typeof window === "undefined") {
            setIsLoading(false)
            return
        }

        try {
            // Verificar se há token no localStorage
            const token = localStorage.getItem("auth_token")
            if (!token) {
                setIsLoading(false)
                return
            }

            const response = await apiClient.verifyToken()
            if (response.success && response.data) {
                setUser(response.data)
            } else {
                // Token inválido, limpar
                apiClient.setToken(null)
                setUser(null)
            }
        } catch (error) {
            console.error("Erro ao verificar autenticação:", error)
            // Token inválido ou erro de rede
            apiClient.setToken(null)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true)
            const response = await apiClient.login(email, password)

            if (response.success && response.data) {
                const { user: userData, token } = response.data
                apiClient.setToken(token)
                setUser(userData)
                return { success: true }
            } else {
                return { success: false, error: response.message || "Erro ao fazer login" }
            }
        } catch (error) {
            return { success: false, error: handleApiError(error) }
        } finally {
            setIsLoading(false)
        }
    }

    const register = async (name: string, email: string, password: string) => {
        try {
            setIsLoading(true)
            const response = await apiClient.register(name, email, password)

            if (response.success && response.data) {
                const { user: userData, token } = response.data
                apiClient.setToken(token)
                setUser(userData)
                return { success: true }
            } else {
                return { success: false, error: response.message || "Erro ao criar conta" }
            }
        } catch (error) {
            return { success: false, error: handleApiError(error) }
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        try {
            await apiClient.logout()
        } catch (error) {
            console.error("Erro ao fazer logout:", error)
        } finally {
            apiClient.setToken(null)
            setUser(null)
        }
    }

    const forgotPassword = async (email: string) => {
        try {
            const response = await apiClient.forgotPassword(email)

            if (response.success) {
                return { success: true }
            } else {
                return { success: false, error: response.message || "Erro ao enviar email de recuperação" }
            }
        } catch (error) {
            return { success: false, error: handleApiError(error) }
        }
    }

    const resetPassword = async (token: string, password: string) => {
        try {
            const response = await apiClient.resetPassword(token, password)

            if (response.success) {
                return { success: true }
            } else {
                return { success: false, error: response.message || "Erro ao redefinir senha" }
            }
        } catch (error) {
            return { success: false, error: handleApiError(error) }
        }
    }

    const refreshUser = async () => {
        try {
            const response = await apiClient.getCurrentUser()
            if (response.success && response.data) {
                setUser(response.data)
            }
        } catch (error) {
            console.error("Erro ao atualizar dados do usuário:", error)
        }
    }

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        refreshUser,
    }

    // Não renderizar até estar hidratado
    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        )
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
