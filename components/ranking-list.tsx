import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"

/**
 * Interface para definir um jogador no ranking
 */
interface RankingPlayer {
  id: string
  name: string
  avatar: string
  score: number
  level: number
  gamesCompleted: number
  position: number
  trend: "up" | "down" | "stable"
}

/**
 * Props do componente RankingList
 */
interface RankingListProps {
  players: RankingPlayer[]
  title: string
  showTrend?: boolean
}

/**
 * Componente RankingList - Lista de ranking de jogadores
 * Exibe classificação dos jogadores com informações detalhadas
 */
export function RankingList({ players, title, showTrend = false }: RankingListProps) {
  // Função para obter o ícone da posição
  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" aria-hidden="true" />
      case 3:
        return <Award className="w-5 h-5 text-amber-600" aria-hidden="true" />
      default:
        return (
          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
            {position}
          </div>
        )
    }
  }

  // Função para obter a cor do badge de nível
  const getLevelColor = (level: number) => {
    if (level >= 50) return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    if (level >= 30) return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    if (level >= 15) return "bg-green-500/20 text-green-400 border-green-500/30"
    return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  // Função para obter o ícone de tendência
  const getTrendIcon = (trend: RankingPlayer["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-400" aria-hidden="true" />
      case "down":
        return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" aria-hidden="true" />
      default:
        return <div className="w-4 h-4 rounded-full bg-muted" aria-hidden="true" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-primary" aria-hidden="true" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="space-y-1">
          {players.map((player) => (
            <div
              key={player.id}
              className={`flex items-center space-x-4 p-4 hover:bg-muted/50 transition-colors ${
                player.position <= 3 ? "bg-muted/30" : ""
              }`}
            >
              {/* Posição */}
              <div className="flex items-center justify-center w-8">{getPositionIcon(player.position)}</div>

              {/* Avatar e informações do jogador */}
              <div className="flex items-center space-x-3 flex-1">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={player.avatar || "/placeholder.svg"} alt={`Avatar de ${player.name}`} />
                  <AvatarFallback>{player.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-foreground truncate">{player.name}</h3>
                    {showTrend && getTrendIcon(player.trend)}
                  </div>

                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className={getLevelColor(player.level)}>
                      Nível {player.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{player.gamesCompleted} jogos</span>
                  </div>
                </div>
              </div>

              {/* Pontuação */}
              <div className="text-right">
                <div className="font-bold text-lg text-primary">{player.score.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">pontos</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
