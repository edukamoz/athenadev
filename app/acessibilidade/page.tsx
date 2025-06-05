import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Ear, Hand, Brain, Keyboard, Monitor, Volume2, Type } from "lucide-react"

/**
 * Página de Acessibilidade - Recursos e informações sobre acessibilidade
 * Detalha os recursos de acessibilidade disponíveis na plataforma
 */
export default function AcessibilidadePage() {
  // Recursos de acessibilidade
  const accessibilityFeatures = [
    {
      category: "Visual",
      icon: Eye,
      color: "blue",
      features: [
        {
          name: "Alto Contraste",
          description: "Modo de alto contraste para melhor legibilidade",
          status: "available",
        },
        {
          name: "Zoom de Texto",
          description: "Suporte para zoom até 200% sem perda de funcionalidade",
          status: "available",
        },
        {
          name: "Cores Seguras para Daltonismo",
          description: "Paleta de cores acessível para pessoas com daltonismo",
          status: "available",
        },
        {
          name: "Indicadores Visuais",
          description: "Feedback visual claro para todas as interações",
          status: "available",
        },
      ],
    },
    {
      category: "Auditiva",
      icon: Ear,
      color: "green",
      features: [
        {
          name: "Legendas em Vídeos",
          description: "Todos os vídeos incluem legendas descritivas",
          status: "available",
        },
        {
          name: "Transcrições de Áudio",
          description: "Transcrições completas para conteúdo em áudio",
          status: "available",
        },
        {
          name: "Alertas Visuais",
          description: "Notificações visuais para substituir alertas sonoros",
          status: "available",
        },
        {
          name: "Controle de Volume",
          description: "Controles granulares de volume para todos os sons",
          status: "available",
        },
      ],
    },
    {
      category: "Motora",
      icon: Hand,
      color: "purple",
      features: [
        {
          name: "Navegação por Teclado",
          description: "Navegação completa usando apenas o teclado",
          status: "available",
        },
        {
          name: "Teclas de Atalho",
          description: "Atalhos personalizáveis para ações frequentes",
          status: "available",
        },
        {
          name: "Tempo Ajustável",
          description: "Controles de tempo flexíveis para interações",
          status: "available",
        },
        {
          name: "Clique Assistido",
          description: "Opções de clique alternativas e assistidas",
          status: "planned",
        },
      ],
    },
    {
      category: "Cognitiva",
      icon: Brain,
      color: "orange",
      features: [
        {
          name: "Interface Simplificada",
          description: "Modo de interface simplificada com menos distrações",
          status: "available",
        },
        {
          name: "Instruções Claras",
          description: "Linguagem simples e instruções passo a passo",
          status: "available",
        },
        {
          name: "Progresso Visual",
          description: "Indicadores claros de progresso e localização",
          status: "available",
        },
        {
          name: "Pausas Automáticas",
          description: "Pausas automáticas em conteúdo com movimento",
          status: "planned",
        },
      ],
    },
  ]

  // Tecnologias assistivas suportadas
  const assistiveTechnologies = [
    {
      name: "Leitores de Tela",
      icon: Volume2,
      description: "NVDA, JAWS, VoiceOver, TalkBack",
      compatibility: "Totalmente compatível",
    },
    {
      name: "Navegação por Teclado",
      icon: Keyboard,
      description: "Tab, Enter, Setas, Esc",
      compatibility: "Totalmente compatível",
    },
    {
      name: "Ampliadores de Tela",
      icon: Monitor,
      description: "ZoomText, MAGic, Zoom nativo",
      compatibility: "Totalmente compatível",
    },
    {
      name: "Software de Reconhecimento de Voz",
      icon: Type,
      description: "Dragon NaturallySpeaking, Ditado do Windows",
      compatibility: "Parcialmente compatível",
    },
  ]

  // Função para obter a cor da badge de status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
            Disponível
          </Badge>
        )
      case "planned":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
            Planejado
          </Badge>
        )
      case "development":
        return (
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
            Em Desenvolvimento
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/30">
            Não Disponível
          </Badge>
        )
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Eye className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Recursos de Acessibilidade</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos comprometidos em tornar a AthenaDev acessível para todos os usuários, independentemente de suas
          habilidades ou limitações.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Nosso compromisso */}
        <Card>
          <CardHeader>
            <CardTitle>Nosso Compromisso com a Acessibilidade</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              A AthenaDev acredita que a educação em programação deve ser acessível a todos. Seguimos as diretrizes de
              acessibilidade WCAG 2.1 nível AA e trabalhamos continuamente para melhorar a experiência de todos os
              nossos usuários.
            </p>
            <p className="text-muted-foreground">
              Nossa plataforma foi projetada com acessibilidade em mente desde o início, incorporando recursos que
              atendem a uma ampla gama de necessidades e preferências.
            </p>
          </CardContent>
        </Card>

        {/* Recursos por categoria */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Recursos de Acessibilidade</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {accessibilityFeatures.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
                      Acessibilidade {category.category}
                    </CardTitle>
                    <CardDescription>
                      Recursos para usuários com necessidades {category.category.toLowerCase()}s
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground">{feature.name}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                          <div className="ml-2 flex-shrink-0">{getStatusBadge(feature.status)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tecnologias assistivas */}
        <Card>
          <CardHeader>
            <CardTitle>Tecnologias Assistivas Suportadas</CardTitle>
            <CardDescription>Nossa plataforma é compatível com as principais tecnologias assistivas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assistiveTechnologies.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{tech.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {tech.compatibility}
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Atalhos de teclado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Keyboard className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Atalhos de Teclado
            </CardTitle>
            <CardDescription>Navegue pela plataforma usando apenas o teclado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Navegação Geral</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tab</span>
                    <span className="text-foreground">Próximo elemento</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shift + Tab</span>
                    <span className="text-foreground">Elemento anterior</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enter</span>
                    <span className="text-foreground">Ativar elemento</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Esc</span>
                    <span className="text-foreground">Fechar modal/menu</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Jogos</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setas</span>
                    <span className="text-foreground">Navegar no jogo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Espaço</span>
                    <span className="text-foreground">Pausar/Continuar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">R</span>
                    <span className="text-foreground">Reiniciar nível</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">H</span>
                    <span className="text-foreground">Mostrar ajuda</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Como ativar recursos */}
        <Card>
          <CardHeader>
            <CardTitle>Como Ativar os Recursos de Acessibilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. Configurações da Conta</h3>
                <p className="text-muted-foreground">
                  Acesse seu perfil e vá para "Configurações" → "Acessibilidade" para personalizar sua experiência.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">2. Configurações do Navegador</h3>
                <p className="text-muted-foreground">
                  Muitos recursos podem ser ativados diretamente nas configurações de acessibilidade do seu navegador.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">3. Sistema Operacional</h3>
                <p className="text-muted-foreground">
                  Recursos como alto contraste e zoom podem ser configurados nas configurações de acessibilidade do seu
                  sistema operacional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback e suporte */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback e Suporte</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Estamos sempre trabalhando para melhorar a acessibilidade de nossa plataforma. Se você encontrar barreiras
              de acessibilidade ou tiver sugestões de melhorias, entre em contato conosco:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Email de Acessibilidade:</strong> acessibilidade@athenadev.com
              </p>
              <p>
                <strong>Telefone:</strong> +55 (11) 9999-9999
              </p>
              <p>
                <strong>Formulário de Feedback:</strong> Disponível na página de contato
              </p>
            </div>
            <p className="text-muted-foreground mt-4">
              Respondemos a todas as solicitações relacionadas à acessibilidade dentro de 48 horas.
            </p>
          </CardContent>
        </Card>

        {/* Conformidade */}
        <Card>
          <CardHeader>
            <CardTitle>Conformidade e Padrões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">WCAG 2.1 Nível AA</h3>
                <p className="text-muted-foreground">
                  Nossa plataforma segue as Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1 nível AA.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Lei Brasileira de Inclusão</h3>
                <p className="text-muted-foreground">
                  Estamos em conformidade com a Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei 13.146/2015).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Avaliações Regulares</h3>
                <p className="text-muted-foreground">
                  Realizamos auditorias de acessibilidade regulares e testes com usuários reais para garantir que nossos
                  padrões sejam mantidos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
