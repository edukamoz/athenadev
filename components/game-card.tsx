import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/**
 * Interface para definir as propriedades de um jogo
 */
interface Game {
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

/**
 * Props do componente GameCard
 */
interface GameCardProps {
  game: Game
}

/**
 * Componente GameCard - Card para exibir informações de um jogo
 * Apresenta detalhes do jogo de forma atrativa e acessível
 */
export function GameCard({ game }: GameCardProps) {
  // Função para determinar a cor da badge de dificuldade
  const getDifficultyColor = (difficulty: Game["difficulty"]) => {
    switch (difficulty) {
      case "Iniciante":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediário":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Avançado":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      {/* Imagem do jogo */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={`Imagem do jogo ${game.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay com botão de play */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="lg" className="shadow-lg" asChild>
            <Link href={`/jogos/${game.id}`}>
              <Play className="w-5 h-5 mr-2" aria-hidden="true" />
              Jogar Agora
            </Link>
          </Button>
        </div>

        {/* Badge de novo jogo */}
        {game.isNew && <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Novo</Badge>}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">{game.title}</CardTitle>
            <Badge variant="outline" className={getDifficultyColor(game.difficulty)}>
              {game.difficulty}
            </Badge>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            <span>{game.rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed mb-4">{game.description}</CardDescription>

        {/* Informações adicionais */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>{game.duration}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" aria-hidden="true" />
            <span>{game.players} jogadores</span>
          </div>
        </div>

        {/* Categoria */}
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs">
            {game.category}
          </Badge>
        </div>

        {/* Botão de ação */}
        <Button className="w-full" variant="outline" asChild>
          <Link href={`/jogos/${game.id}`}>Ver Detalhes</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
