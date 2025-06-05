import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TeamSection } from "@/components/team-section"
import { Gamepad2, Target, Heart, Lightbulb, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

/**
 * Página Sobre - Informações sobre a AthenaDev
 * Apresenta missão, visão, valores e equipe da empresa
 */
export default function SobrePage() {
  // Valores da empresa
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos constantemente novas formas de tornar o aprendizado mais eficaz e divertido.",
    },
    {
      icon: Heart,
      title: "Inclusão",
      description: "Criamos experiências acessíveis para todos, independente de habilidades ou limitações.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Valorizamos a colaboração e o crescimento conjunto de nossa comunidade de aprendizes.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometemo-nos com a qualidade em cada jogo e experiência que desenvolvemos.",
    },
  ]

  // Estatísticas da empresa
  const stats = [
    { number: "50,000+", label: "Estudantes Ativos" },
    { number: "25+", label: "Jogos Disponíveis" },
    { number: "15+", label: "Linguagens Suportadas" },
    { number: "98%", label: "Satisfação dos Usuários" },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Sobre a AthenaDev</h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Somos uma plataforma educacional dedicada a transformar o aprendizado de programação em uma experiência
          divertida, interativa e acessível para todos.
        </p>
      </div>

      {/* Missão e Visão */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Democratizar o ensino de programação através de jogos educativos inovadores, tornando o aprendizado
              acessível, envolvente e eficaz para pessoas de todas as idades e níveis de experiência.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Nossa Visão</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Ser a principal plataforma global de ensino de programação através de jogos, inspirando uma nova geração
              de desenvolvedores e contribuindo para um futuro mais tecnológico e inclusivo.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Estatísticas */}
      <div className="bg-muted/50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">Nosso Impacto</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Valores */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">Nossos Valores</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* História */}
      <div className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Nossa História</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed">
                A AthenaDev nasceu em 2023 da visão de um grupo de educadores e desenvolvedores apaixonados por
                tecnologia e ensino. Percebemos que muitas pessoas tinham dificuldade em aprender programação através de
                métodos tradicionais, e decidimos criar uma abordagem revolucionária.
              </p>

              <p className="text-base leading-relaxed">
                Inspirados pela deusa grega Atena, símbolo da sabedoria e estratégia, desenvolvemos uma plataforma que
                combina gamificação com pedagogia moderna. Nosso objetivo era tornar o aprendizado de programação tão
                envolvente quanto um jogo, mas tão eficaz quanto um curso universitário.
              </p>

              <p className="text-base leading-relaxed">
                Hoje, orgulhamo-nos de ter criado uma comunidade global de aprendizes que descobrem o poder da
                programação através da diversão e da colaboração. Continuamos inovando e expandindo nossa plataforma
                para atender às necessidades de um mundo cada vez mais digital.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção da Equipe */}
      <TeamSection />

      {/* Call to Action */}
      <div className="text-center mt-16 bg-muted/50 py-16 px-4 rounded-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-4">Faça Parte da Nossa Jornada</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de estudantes que já descobriram uma nova forma de aprender programação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/jogos" className="flex items-center space-x-2">
              <span>Começar a Aprender</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
