"use client"

import { useState, useEffect } from "react"
import { apiClient, type Achievement, handleApiError } from "@/lib/api"

interface UseAchievementsReturn {
    achievements: Achievement[]
    userAchievements: Achievement[]
    isLoading: boolean
    error: string | null
    unlockAchievement: (achievementId: string) => Promise<boolean>
    refetch: () => Promise<void>
}

export function useAchievements(): UseAchievementsReturn {
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [userAchievements, setUserAchievements] = useState<Achievement[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchAchievements = async () => {
        try {
            setIsLoading(true)
            setError(null)

            const [allResponse, userResponse] = await Promise.all([
                apiClient.getAchievements(),
                apiClient.getUserAchievements(),
            ])

            if (allResponse.success && allResponse.data) {
                setAchievements(allResponse.data)
            }

            if (userResponse.success && userResponse.data) {
                setUserAchievements(userResponse.data)
            }

            if (!allResponse.success) {
                setError(allResponse.message || "Erro ao carregar conquistas")
            }
        } catch (err) {
            setError(handleApiError(err))
        } finally {
            setIsLoading(false)
        }
    }

    const unlockAchievement = async (achievementId: string): Promise<boolean> => {
        try {
            const response = await apiClient.unlockAchievement(achievementId)

            if (response.success && response.data) {
                // Adicionar à lista de conquistas do usuário
                setUserAchievements((prev) => [...prev, response.data!])
                return true
            }
            return false
        } catch (err) {
            console.error("Erro ao desbloquear conquista:", err)
            return false
        }
    }

    useEffect(() => {
        fetchAchievements()
    }, [])

    return {
        achievements,
        userAchievements,
        isLoading,
        error,
        unlockAchievement,
        refetch: fetchAchievements,
    }
}
