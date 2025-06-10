"use client"

import { useState, useEffect } from "react"
import { apiClient, type RankingPlayer, handleApiError } from "@/lib/api"

interface UseRankingOptions {
    type: "global" | "weekly" | "category"
    category?: string
    page?: number
    limit?: number
}

interface UseRankingReturn {
    players: RankingPlayer[]
    isLoading: boolean
    error: string | null
    total: number
    refetch: () => Promise<void>
}

export function useRanking(options: UseRankingOptions): UseRankingReturn {
    const [players, setPlayers] = useState<RankingPlayer[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [total, setTotal] = useState(0)

    const fetchRanking = async () => {
        try {
            setIsLoading(true)
            setError(null)

            let response

            switch (options.type) {
                case "global":
                    response = await apiClient.getGlobalRanking(options.page, options.limit)
                    break
                case "weekly":
                    response = await apiClient.getWeeklyRanking(options.page, options.limit)
                    break
                case "category":
                    if (!options.category) {
                        throw new Error("Categoria é obrigatória para ranking por categoria")
                    }
                    response = await apiClient.getCategoryRanking(options.category, options.page, options.limit)
                    break
                default:
                    throw new Error("Tipo de ranking inválido")
            }

            if (response.success && response.data) {
                setPlayers(response.data.players)
                setTotal(response.data.total)
            } else {
                setError(response.message || "Erro ao carregar ranking")
            }
        } catch (err) {
            setError(handleApiError(err))
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRanking()
    }, [options.type, options.category, options.page, options.limit])

    return {
        players,
        isLoading,
        error,
        total,
        refetch: fetchRanking,
    }
}
