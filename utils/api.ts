/**
 * Utilitários para comunicação com APIs
 * Centraliza as funções de requisições HTTP e manipulação de dados
 *
 * NOTA: Este arquivo serve apenas como referência para implementação futura.
 * Atualmente, todos os dados são mockados localmente.
 */

/**
 * Tipos TypeScript para as respostas da API
 */

export interface Game {
  id: string
  title: string
  description: string
  image: string
  difficulty: "Iniciante" | "Intermediário" | "Avançado"
  duration: string
  players: number
  rating: number
  category: string
  isNew?: boolean
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

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar: string
  level: number
  totalScore: number
  gamesCompleted: number
  joinedAt: string
}

/**
 * Utilitários para manipulação de dados
 */

/**
 * Formata pontuação para exibição
 */
export const formatScore = (score: number): string => {
  return score.toLocaleString("pt-BR")
}

/**
 * Formata duração em minutos para texto legível
 */
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

/**
 * Calcula nível baseado na pontuação
 */
export const calculateLevel = (score: number): number => {
  return Math.floor(Math.sqrt(score / 100)) + 1
}

/**
 * Valida email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida senha (mínimo 8 caracteres, pelo menos 1 número e 1 letra)
 */
export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
  return passwordRegex.test(password)
}
