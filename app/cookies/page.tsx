import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, Shield, BarChart, Zap } from "lucide-react"

/**
 * Página Política de Cookies - Informações sobre uso de cookies
 * Explica como usamos cookies e tecnologias similares
 */
export default function CookiesPage() {
  // Tipos de cookies
  const cookieTypes = [
    {
      name: "Cookies Essenciais",
      icon: Zap,
      description: "Necessários para o funcionamento básico da plataforma",
      required: true,
      examples: [
        "Cookies de sessão para manter você logado",
        "Cookies de segurança para proteção contra ataques",
        "Cookies de preferências de idioma",
      ],
    },
    {
      name: "Cookies de Desempenho",
      icon: BarChart,
      description: "Ajudam-nos a entender como você usa o site",
      required: false,
      examples: [
        "Google Analytics para análise de tráfego",
        "Métricas de desempenho de jogos",
        "Dados de tempo de carregamento de páginas",
      ],
    },
    {
      name: "Cookies de Funcionalidade",
      icon: Settings,
      description: "Lembram suas preferências e configurações",
      required: false,
      examples: ["Preferências de tema (claro/escuro)", "Configurações de acessibilidade", "Progresso salvo em jogos"],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Cookie className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Política de Cookies</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Última atualização: 15 de dezembro de 2023</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introdução */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cookie className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />O que são Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site.
              Eles são amplamente usados para fazer os sites funcionarem de forma mais eficiente, bem como para fornecer
              informações aos proprietários do site.
            </p>
            <p className="text-muted-foreground">
              A AthenaDev usa cookies e tecnologias similares para melhorar sua experiência em nossa plataforma,
              personalizar conteúdo e analisar nosso tráfego.
            </p>
          </CardContent>
        </Card>

        {/* Tipos de cookies */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Tipos de Cookies que Usamos</h2>

          {cookieTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
                      {type.name}
                    </CardTitle>
                    <Badge variant={type.required ? "default" : "outline"}>
                      {type.required ? "Obrigatório" : "Opcional"}
                    </Badge>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Exemplos:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>{example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Como usamos cookies */}
        <Card>
          <CardHeader>
            <CardTitle>Como Usamos Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Funcionalidade essencial:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Manter você logado durante sua sessão</li>
                <li>Lembrar suas preferências de configuração</li>
                <li>Garantir a segurança de sua conta</li>
                <li>Fornecer recursos de acessibilidade</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Melhoria da experiência:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Personalizar conteúdo baseado em suas preferências</li>
                <li>Salvar seu progresso em jogos</li>
                <li>Adaptar a interface às suas necessidades</li>
                <li>Fornecer recomendações relevantes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Análise e melhoria:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Entender como você usa nossa plataforma</li>
                <li>Identificar problemas técnicos</li>
                <li>Medir a eficácia de nossos recursos</li>
                <li>Desenvolver novos recursos baseados no uso</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookies de terceiros */}
        <Card>
          <CardHeader>
            <CardTitle>Cookies de Terceiros</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Também usamos cookies de terceiros para nos ajudar a analisar e entender como você usa nossa plataforma:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground">Google Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Usado para analisar o tráfego do site e entender o comportamento dos usuários. Os dados são
                  anonimizados e agregados.
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground">Serviços de Autenticação</h4>
                <p className="text-sm text-muted-foreground">
                  Quando você faz login com Google ou GitHub, esses serviços podem definir seus próprios cookies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gerenciar cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Como Gerenciar Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Configurações do navegador:</h3>
              <p className="text-muted-foreground mb-2">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já
                estão em seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  <strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Preferências → Privacidade e segurança → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferências → Privacidade → Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Configurações → Cookies e permissões do site
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Nossas configurações:</h3>
              <p className="text-muted-foreground mb-4">
                Você pode gerenciar suas preferências de cookies diretamente em nossa plataforma:
              </p>
              <Button className="w-full sm:w-auto">
                <Settings className="w-4 h-4 mr-2" aria-hidden="true" />
                Gerenciar Preferências de Cookies
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Impacto de desabilitar cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-yellow-500" aria-hidden="true" />
              Impacto de Desabilitar Cookies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você escolher desabilitar cookies, algumas funcionalidades de nossa plataforma podem não funcionar
              corretamente:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Você pode precisar fazer login novamente a cada visita</li>
              <li>Suas preferências e configurações podem não ser salvas</li>
              <li>Alguns jogos podem não funcionar adequadamente</li>
              <li>A personalização de conteúdo pode ser limitada</li>
              <li>Recursos de acessibilidade podem não funcionar</li>
            </ul>
          </CardContent>
        </Card>

        {/* Atualizações */}
        <Card>
          <CardHeader>
            <CardTitle>Atualizações desta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por
              outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta política
              regularmente para se manter informado sobre como usamos cookies.
            </p>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle>Dúvidas sobre Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong> privacidade@athenadev.com
              </p>
              <p>
                <strong>Endereço:</strong> São Paulo, SP - Brasil
              </p>
              <p>
                <strong>Telefone:</strong> +55 (11) 9999-9999
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
