"use client"

import { useState, useEffect } from "react"
import { apiClient, type Game, type UserProgress, handleApiError } from "@/lib/api"

interface UseGamesOptions {
    page?: number
    limit?: number
    category?: string
    difficulty?: string
    search?: string
}

interface UseGamesReturn {
    games: Game[]
    isLoading: boolean
    error: string | null
    total: number
    totalPages: number
    refetch: () => Promise<void>
}

export function useGames(options: UseGamesOptions = {}): UseGamesReturn {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [total, setTotal] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const fetchGames = async () => {
        try {
            setIsLoading(true)
            setError(null)

            const response = await apiClient.getGames(options)

            if (response.success && response.data) {
                setGames(response.data.games)
                setTotal(response.data.total)
                setTotalPages(response.data.totalPages)
            } else {
                setError(response.message || "Erro ao carregar jogos")
            }
        } catch (err) {
            setError(handleApiError(err))
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchGames()
    }, [options.page, options.limit, options.category, options.difficulty, options.search])

    return {
        games,
        isLoading,
        error,
        total,
        totalPages,
        refetch: fetchGames,
    }
}

interface UseGameReturn {
    game: Game | null
    isLoading: boolean
    error: string | null
    refetch: () => Promise<void>
}

export function useGame(gameId: string): UseGameReturn {
    const [game, setGame] = useState<Game | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchGame = async () => {
        try {
            setIsLoading(true)
            setError(null)

            const response = await apiClient.getGame(gameId)

            if (response.success && response.data) {
                setGame(response.data)
            } else {
                setError(response.message || "Erro ao carregar jogo")
            }
        } catch (err) {
            setError(handleApiError(err))
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (gameId) {
            fetchGame()
        }
    }, [gameId])

    return {
        game,
        isLoading,
        error,
        refetch: fetchGame,
    }
}

interface UseUserProgressReturn {
    progress: UserProgress[]
    isLoading: boolean
    error: string | null
    updateProgress: (gameId: string, progress: number, score?: number) => Promise<boolean>
    completeGame: (gameId: string, finalScore: number) => Promise<boolean>
    refetch: () => Promise<void>
}

export function useUserProgress(): UseUserProgressReturn {
    const [progress, setProgress] = useState<UserProgress[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProgress = async () => {
        try {
            setIsLoading(true)
            setError(null)

            const response = await apiClient.getUserProgress()

            if (response.success && response.data) {
                setProgress(response.data)
            } else {
                setError(response.message || "Erro ao carregar progresso")
            }
        } catch (err) {
            setError(handleApiError(err))
        } finally {
            setIsLoading(false)
        }
    }

    const updateProgress = async (gameId: string, progressValue: number, score?: number): Promise<boolean> => {
        try {
            const response = await apiClient.updateGameProgress(gameId, progressValue, score)

            if (response.success && response.data) {
                // Atualizar o progresso local
                setProgress((prev) => {
                    const index = prev.findIndex((p) => p.gameId === gameId)
                    if (index >= 0) {
                        const updated = [...prev]
                        updated[index] = response.data!
                        return updated
                    } else {
                        return [...prev, response.data!]
                    }
                })
                return true
            }
            return false
        } catch (err) {
            console.error("Erro ao atualizar progresso:", err)
            return false
        }
    }

    const completeGame = async (gameId: string, finalScore: number): Promise<boolean> => {
        try {
            const response = await apiClient.completeGame(gameId, finalScore)

            if (response.success && response.data) {
                // Atualizar o progresso local
                setProgress((prev) => {
                    const index = prev.findIndex((p) => p.gameId === gameId)
                    if (index >= 0) {
                        const updated = [...prev]
                        updated[index] = response.data!
                        return updated
                    } else {
                        return [...prev, response.data!]
                    }
                })
                return true
            }
            return false
        } catch (err) {
            console.error("Erro ao completar jogo:", err)
            return false
        }
    }

    useEffect(() => {
        fetchProgress()
    }, [])

    return {
        progress,
        isLoading,
        error,
        updateProgress,
        completeGame,
        refetch: fetchProgress,
    }
}
