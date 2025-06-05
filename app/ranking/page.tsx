import { RankingList } from "@/components/ranking-list"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, TrendingUp, Calendar } from "lucide-react"

/**
 * Página de Ranking - Exibe classificações e estatísticas
 * Mostra rankings globais, semanais e por categoria
 */
export default function RankingPage() {
  // Dados mockados do ranking global
  const globalRanking = [
    {
      id: "1",
      name: "CodeMaster2024",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 15420,
      level: 67,
      gamesCompleted: 45,
      position: 1,
      trend: "stable" as const,
    },
    {
      id: "2",
      name: "PythonNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 14890,
      level: 62,
      gamesCompleted: 42,
      position: 2,
      trend: "up" as const,
    },
    {
      id: "3",
      name: "JSWizard",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 14350,
      level: 58,
      gamesCompleted: 38,
      position: 3,
      trend: "down" as const,
    },
    {
      id: "4",
      name: "ReactHero",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 13920,
      level: 55,
      gamesCompleted: 36,
      position: 4,
      trend: "up" as const,
    },
    {
      id: "5",
      name: "AlgoExpert",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 13580,
      level: 53,
      gamesCompleted: 34,
      position: 5,
      trend: "stable" as const,
    },
  ]

  // Dados mockados do ranking semanal
  const weeklyRanking = [
    {
      id: "6",
      name: "NewCoder123",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 2840,
      level: 25,
      gamesCompleted: 12,
      position: 1,
      trend: "up" as const,
    },
    {
      id: "7",
      name: "FastLearner",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 2650,
      level: 22,
      gamesCompleted: 11,
      position: 2,
      trend: "up" as const,
    },
    {
      id: "8",
      name: "CodeRookie",
      avatar: "/placeholder.svg?height=40&width=40",
      score: 2420,
      level: 20,
      gamesCompleted: 10,
      position: 3,
      trend: "stable" as const,
    },
  ]

  // Estatísticas gerais
  const stats = [
    {
      title: "Total de Jogadores",
      value: "12,847",
      icon: Users,
      change: "+234 esta semana",
      changeType: "positive" as const,
    },
    {
      title: "Jogos Completados",
      value: "45,692",
      icon: Trophy,
      change: "+1,205 esta semana",
      changeType: "positive" as const,
    },
    {
      title: "Média de Pontos",
      value: "8,450",
      icon: TrendingUp,
      change: "+125 pontos",
      changeType: "positive" as const,
    },
    {
      title: "Tempo Médio",
      value: "42 min",
      icon: Calendar,
      change: "-3 min esta semana",
      changeType: "positive" as const,
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ranking de Jogadores</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Veja como você se compara com outros jogadores e acompanhe seu progresso na comunidade AthenaDev.
        </p>
      </div>

      {/* Estatísticas gerais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <IconComponent className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={stat.changeType === "positive" ? "text-green-400" : "text-red-400"}>
                    {stat.change}
                  </span>
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ranking Global */}
        <div>
          <RankingList players={globalRanking} title="Ranking Global" showTrend={true} />
        </div>

        {/* Ranking Semanal */}
        <div>
          <RankingList players={weeklyRanking} title="Top da Semana" showTrend={true} />
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Como Funciona o Ranking</CardTitle>
            <CardDescription>Entenda como calculamos sua posição no ranking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">Pontuação</h3>
                <p className="text-sm text-muted-foreground">Ganhe pontos completando jogos e desafios</p>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/50">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">Consistência</h3>
                <p className="text-sm text-muted-foreground">Jogue regularmente para manter sua posição</p>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">Comunidade</h3>
                <p className="text-sm text-muted-foreground">Ajude outros jogadores para ganhar bônus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
