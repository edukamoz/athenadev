/**
 * Configuração e utilitários para comunicação com a API
 * Centraliza todas as chamadas HTTP e gerenciamento de tokens
 */

// Configuração da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

// Tipos para as respostas da API
export interface ApiResponse<T> {
    success: boolean
    data?: T
    message?: string
    error?: string
}

export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    level: number
    totalScore: number
    gamesCompleted: number
    joinedAt: string
    status: "active" | "inactive" | "banned"
}

export interface Game {
    id: string
    title: string
    description: string
    image: string
    difficulty: "Iniciante" | "Intermediário" | "Avançado"
    duration: number // em minutos
    category: string
    rating: number
    players: number
    isNew?: boolean
    status: "active" | "maintenance" | "disabled"
    requirements?: Record<string, any>
}

export interface UserProgress {
    id: string
    userId: string
    gameId: string
    progress: number // 0-100
    score: number
    startedAt: string
    completedAt?: string
    timeSpent: number // em minutos
    status: "not_started" | "in_progress" | "completed"
}

export interface Achievement {
    id: string
    name: string
    description: string
    icon: string
    points: number
    requirements: Record<string, any>
    unlockedAt?: string
}

export interface RankingPlayer {
    id: string
    name: string
    avatar: string
    score: number
    level: number
    gamesCompleted: number
    position: number
    trend: "up" | "down" | "stable"
}

// Classe para gerenciar chamadas da API
class ApiClient {
    private baseURL: string
    private token: string | null = null

    constructor(baseURL: string) {
        this.baseURL = baseURL
        // Só carrega o token no cliente
        if (typeof window !== "undefined") {
            this.loadToken()
        }
    }

    private loadToken() {
        if (typeof window !== "undefined") {
            this.token = localStorage.getItem("auth_token")
        }
    }

    setToken(token: string | null) {
        this.token = token
        if (typeof window !== "undefined") {
            if (token) {
                localStorage.setItem("auth_token", token)
            } else {
                localStorage.removeItem("auth_token")
            }
        }
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
        // Verificar se estamos no cliente
        if (typeof window === "undefined") {
            throw new Error("API calls can only be made on the client side")
        }

        const url = `${this.baseURL}${endpoint}`

        // Criar headers como Record<string, string> para evitar erro de tipo
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        }

        // Adicionar headers customizados se existirem
        if (options.headers) {
            if (options.headers instanceof Headers) {
                options.headers.forEach((value, key) => {
                    headers[key] = value
                })
            } else if (Array.isArray(options.headers)) {
                options.headers.forEach(([key, value]) => {
                    headers[key] = value
                })
            } else {
                Object.assign(headers, options.headers)
            }
        }

        // Adicionar token de autorização se disponível
        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers,
                // Adicionar configurações para CORS se necessário
                mode: "cors",
                credentials: "include",
            })

            // Verificar se a resposta é JSON válida
            const contentType = response.headers.get("content-type")
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error(`Servidor retornou resposta inválida. Status: ${response.status}`)
            }

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`)
            }

            return data
        } catch (error) {
            console.error("API request failed:", error)

            // Verificar se é erro de rede
            if (error instanceof TypeError && error.message === "Failed to fetch") {
                throw new Error("Não foi possível conectar ao servidor. Verifique sua conexão com a internet.")
            }

            throw error
        }
    }

    // Métodos de autenticação
    async register(name: string, email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
        return this.request("/auth/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
        })
    }

    async login(email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
        return this.request("/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        })
    }

    async logout(): Promise<ApiResponse<null>> {
        return this.request("/auth/logout", {
            method: "POST",
        })
    }

    async forgotPassword(email: string): Promise<ApiResponse<null>> {
        return this.request("/auth/forgot-password", {
            method: "POST",
            body: JSON.stringify({ email }),
        })
    }

    async resetPassword(token: string, password: string): Promise<ApiResponse<null>> {
        return this.request("/auth/reset-password", {
            method: "POST",
            body: JSON.stringify({ token, password }),
        })
    }

    async verifyToken(): Promise<ApiResponse<User>> {
        return this.request("/auth/verify-token")
    }

    async getCurrentUser(): Promise<ApiResponse<User>> {
        return this.request("/auth/me")
    }

    // Métodos de jogos
    async getGames(params?: {
        page?: number
        limit?: number
        category?: string
        difficulty?: string
        search?: string
    }): Promise<ApiResponse<{ games: Game[]; total: number; page: number; totalPages: number }>> {
        const searchParams = new URLSearchParams()

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value.toString())
                }
            })
        }

        const query = searchParams.toString()
        return this.request(`/games${query ? `?${query}` : ""}`)
    }

    async getGame(id: string): Promise<ApiResponse<Game>> {
        return this.request(`/games/${id}`)
    }

    async getGameCategories(): Promise<ApiResponse<string[]>> {
        return this.request("/games/categories")
    }

    async getFeaturedGames(): Promise<ApiResponse<Game[]>> {
        return this.request("/games/featured")
    }

    // Métodos de progresso
    async getUserProgress(): Promise<ApiResponse<UserProgress[]>> {
        return this.request("/progress")
    }

    async getGameProgress(gameId: string): Promise<ApiResponse<UserProgress>> {
        return this.request(`/progress/${gameId}`)
    }

    async updateGameProgress(gameId: string, progress: number, score?: number): Promise<ApiResponse<UserProgress>> {
        return this.request(`/progress/${gameId}`, {
            method: "POST",
            body: JSON.stringify({ progress, score }),
        })
    }

    async completeGame(gameId: string, finalScore: number): Promise<ApiResponse<UserProgress>> {
        return this.request(`/progress/${gameId}/complete`, {
            method: "POST",
            body: JSON.stringify({ finalScore }),
        })
    }

    // Métodos de ranking
    async getGlobalRanking(page = 1, limit = 10): Promise<ApiResponse<{ players: RankingPlayer[]; total: number }>> {
        return this.request(`/ranking/global?page=${page}&limit=${limit}`)
    }

    async getWeeklyRanking(page = 1, limit = 10): Promise<ApiResponse<{ players: RankingPlayer[]; total: number }>> {
        return this.request(`/ranking/weekly?page=${page}&limit=${limit}`)
    }

    async getCategoryRanking(
        category: string,
        page = 1,
        limit = 10,
    ): Promise<ApiResponse<{ players: RankingPlayer[]; total: number }>> {
        return this.request(`/ranking/by-category/${category}?page=${page}&limit=${limit}`)
    }

    // Métodos de conquistas
    async getAchievements(): Promise<ApiResponse<Achievement[]>> {
        return this.request("/achievements")
    }

    async getUserAchievements(): Promise<ApiResponse<Achievement[]>> {
        return this.request("/achievements/user")
    }

    async unlockAchievement(achievementId: string): Promise<ApiResponse<Achievement>> {
        return this.request(`/achievements/${achievementId}/unlock`, {
            method: "POST",
        })
    }
}

// Instância global da API
export const apiClient = new ApiClient(API_BASE_URL)

// Utilitários para tratamento de erros
export const handleApiError = (error: any): string => {
    if (error.message) {
        return error.message
    }

    if (typeof error === "string") {
        return error
    }

    return "Ocorreu um erro inesperado. Tente novamente."
}

// Utilitários para formatação
export const formatScore = (score: number): string => {
    return score.toLocaleString("pt-BR")
}

export const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
        return `${minutes} min`
    }

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60

    if (remainingMinutes === 0) {
        return `${hours}h`
    }

    return `${hours}h ${remainingMinutes}min`
}

export const calculateLevel = (score: number): number => {
    return Math.floor(Math.sqrt(score / 100)) + 1
}
