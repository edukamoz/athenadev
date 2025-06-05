import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Code, Users, Trophy, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { InteractiveBackground } from "@/components/interactive-background"
import { TeamSection } from "@/components/team-section"

/**
 * Página inicial da AthenaDev
 * Apresenta a plataforma e seus principais recursos
 * Implementa design responsivo e acessível
 */
export default function HomePage() {
  // Principais recursos da plataforma
  const features = [
    {
      icon: Gamepad2,
      title: "Jogos Interativos",
      description:
        "Aprenda programação através de jogos envolventes e desafiadores que tornam o aprendizado divertido.",
    },
    {
      icon: Code,
      title: "Múltiplas Linguagens",
      description: "Explore diferentes linguagens de programação com exercícios práticos e projetos reais.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros desenvolvedores, compartilhe conhecimento e cresça junto com a comunidade.",
    },
    {
      icon: Trophy,
      title: "Sistema de Conquistas",
      description: "Acompanhe seu progresso com conquistas, rankings e certificados de conclusão.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Seção Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="hero-title">
        {/* Fundo interativo */}
        <InteractiveBackground />

        {/* Conteúdo da seção hero */}
        <div className="relative z-10 container mx-auto text-center max-w-4xl">
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Aprenda Programação <span className="text-primary">Jogando</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme seu aprendizado em uma aventura! Desenvolva suas habilidades de programação através de jogos
            interativos, desafios práticos e uma comunidade incrível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3 h-auto" asChild>
              <Link href="/jogos" className="flex items-center space-x-2">
                <Play className="w-5 h-5" aria-hidden="true" />
                <span>Começar a Jogar</span>
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto" asChild>
              <Link href="/sobre" className="flex items-center space-x-2">
                <span>Saiba Mais</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="features-title">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Por que escolher a AthenaDev?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece uma experiência única de aprendizado, combinando diversão e educação de forma
              eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
      <TeamSection />

      {/* Seção Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" aria-labelledby="cta-title">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Pronto para começar sua jornada?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a milhares de desenvolvedores que já estão aprendendo e se divertindo com nossos jogos educativos.
            É gratuito para começar!
          </p>

          <Button size="lg" className="text-lg px-8 py-3 h-auto" asChild>
            <Link href="/auth" className="flex items-center space-x-2">
              <span>Criar Conta Gratuita</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
