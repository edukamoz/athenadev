import { GameCard } from "@/components/game-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, SortAsc } from "lucide-react"

/**
 * Página de Jogos - Lista todos os jogos disponíveis
 * Permite filtrar, pesquisar e navegar pelos jogos educativos
 */
export default function JogosPage() {
  // Dados mockados dos jogos
  const games = [
    {
      id: "https://flexboxfroggy.com/",
      title: "Flexbox",
      description: "Aprenda os fundamentos da lógica de programação através de desafios interativos e puzzles.",
      image: "/images/flexbox-css.png?height=200&width=300",
      difficulty: "Iniciante" as const,
      duration: "30 min",
      players: 1250,
      rating: 4.8,
      category: "Fundamentos",
      isNew: true,
    },
    {
      id: "2",
      title: "Duelo Player VS Player (PVP)",
      description: "Explore o mundo do JavaScript resolvendo missões e criando projetos práticos.",
      image: "/images/duelo-pvp.png?height=200&width=300",
      difficulty: "Intermediário" as const,
      duration: "45 min",
      players: 890,
      rating: 4.6,
      category: "JavaScript",
    },
    {
      id: "3",
      title: "7 Erros",
      description: "Domine estruturas de dados e algoritmos complexos com exercícios práticos.",
      image: "/images/7erros.png?height=200&width=300",
      difficulty: "Avançado" as const,
      duration: "60 min",
      players: 450,
      rating: 4.7,
      category: "Algoritmos",
    },
  ]

  // Categorias disponíveis
  const categories = ["Todos", "Fundamentos", "JavaScript", "Python", "React", "Algoritmos", "Banco de Dados"]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Jogos Educativos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore nossa coleção de jogos interativos e aprenda programação de forma divertida e envolvente.
        </p>
      </div>

      {/* Filtros e busca */}
      <div className="mb-8 space-y-4">
        {/* Barra de pesquisa */}
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Input placeholder="Pesquisar jogos..." className="pl-10" aria-label="Pesquisar jogos" />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Categorias */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex items-center space-x-2 ml-auto">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="w-4 h-4 mr-2" aria-hidden="true" />
              Ordenar
            </Button>
          </div>
        </div>
      </div>

      {/* Grid de jogos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" disabled>
            Anterior
          </Button>
          <Badge variant="default">1</Badge>
          <Badge variant="outline">2</Badge>
          <Badge variant="outline">3</Badge>
          <Button variant="outline">Próximo</Button>
        </div>
      </div>
    </div>
  )
}
