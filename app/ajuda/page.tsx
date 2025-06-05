import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Gamepad2, User, Shield, Code, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

/**
 * Página Central de Ajuda - Suporte e documentação
 * Fornece recursos de ajuda, FAQs e guias para os usuários
 */
export default function AjudaPage() {
  // Categorias de ajuda
  const helpCategories = [
    {
      id: "getting-started",
      title: "Primeiros Passos",
      icon: BookOpen,
      description: "Guias básicos para começar a usar a plataforma",
    },
    {
      id: "games",
      title: "Jogos",
      icon: Gamepad2,
      description: "Dúvidas sobre jogos e desafios",
    },
    {
      id: "account",
      title: "Conta",
      icon: User,
      description: "Gerenciamento de conta e perfil",
    },
    {
      id: "security",
      title: "Segurança",
      icon: Shield,
      description: "Privacidade e segurança da conta",
    },
    {
      id: "technical",
      title: "Técnico",
      icon: Code,
      description: "Problemas técnicos e requisitos",
    },
  ]

  // FAQs por categoria
  const faqsByCategory = {
    "getting-started": [
      {
        question: "Como criar uma conta na AthenaDev?",
        answer:
          "Para criar uma conta, clique no botão 'Entrar' no canto superior direito da página, selecione 'Criar conta' e preencha o formulário com suas informações. Você também pode se cadastrar usando sua conta do GitHub ou Google.",
      },
      {
        question: "A plataforma é gratuita?",
        answer:
          "Sim, oferecemos uma versão gratuita com acesso a jogos básicos. Também temos planos premium com recursos adicionais, jogos avançados e certificados.",
      },
      {
        question: "Como começar meu primeiro jogo?",
        answer:
          "Após fazer login, acesse a página 'Jogos', escolha um jogo para iniciantes e clique em 'Jogar Agora'. Cada jogo inclui um tutorial introdutório para ajudá-lo a começar.",
      },
    ],
    games: [
      {
        question: "Os jogos funcionam em dispositivos móveis?",
        answer:
          "Sim, nossa plataforma é responsiva e a maioria dos jogos funciona em smartphones e tablets. Alguns jogos mais complexos podem ter uma experiência melhor em telas maiores.",
      },
      {
        question: "Como salvar meu progresso nos jogos?",
        answer:
          "Seu progresso é salvo automaticamente enquanto você está logado. Você pode continuar de onde parou mesmo se fechar o navegador ou mudar de dispositivo.",
      },
      {
        question: "Posso baixar os jogos para jogar offline?",
        answer:
          "Atualmente, nossos jogos funcionam apenas online. Estamos desenvolvendo versões offline de alguns jogos que estarão disponíveis em breve.",
      },
    ],
    account: [
      {
        question: "Como alterar minha senha?",
        answer:
          "Acesse seu perfil clicando no seu avatar no canto superior direito, vá para 'Configurações' e selecione a opção 'Alterar senha'. Você precisará informar sua senha atual e a nova senha.",
      },
      {
        question: "Como excluir minha conta?",
        answer:
          "Para excluir sua conta, acesse 'Configurações', role até o final da página e clique em 'Excluir conta'. Confirme sua decisão inserindo sua senha. Esta ação é irreversível.",
      },
      {
        question: "Posso mudar meu nome de usuário?",
        answer:
          "Sim, você pode alterar seu nome de usuário nas configurações do perfil. Lembre-se que seu nome de usuário aparece publicamente no ranking e em fóruns.",
      },
    ],
    security: [
      {
        question: "Como ativar a autenticação de dois fatores?",
        answer:
          "Acesse 'Configurações' > 'Segurança' e clique em 'Ativar autenticação de dois fatores'. Você pode escolher entre receber códigos por email ou usar um aplicativo autenticador.",
      },
      {
        question: "A AthenaDev coleta meus dados pessoais?",
        answer:
          "Coletamos apenas os dados necessários para fornecer nossos serviços, como seu email e progresso nos jogos. Você pode ler nossa Política de Privacidade para mais detalhes sobre como tratamos seus dados.",
      },
      {
        question: "O que fazer se suspeitar que minha conta foi invadida?",
        answer:
          "Altere sua senha imediatamente e entre em contato com nosso suporte através da página de Contato. Recomendamos ativar a autenticação de dois fatores para maior segurança.",
      },
    ],
    technical: [
      {
        question: "Quais navegadores são compatíveis com a plataforma?",
        answer:
          "A AthenaDev funciona melhor nos navegadores Chrome, Firefox, Safari e Edge em suas versões mais recentes. Navegadores mais antigos podem ter funcionalidade limitada.",
      },
      {
        question: "O que fazer se um jogo não carregar?",
        answer:
          "Primeiro, tente atualizar a página. Se o problema persistir, limpe o cache do navegador ou tente usar outro navegador. Se ainda não funcionar, entre em contato com nosso suporte.",
      },
      {
        question: "Posso usar a AthenaDev sem conexão com a internet?",
        answer:
          "Não, atualmente a AthenaDev requer uma conexão com a internet para funcionar corretamente, pois nossos jogos e sistema de progresso são baseados em nuvem.",
      },
    ],
  }

  // Artigos populares
  const popularArticles = [
    {
      title: "Guia para iniciantes: Primeiros passos na AthenaDev",
      category: "Primeiros Passos",
      views: 12540,
      url: "/ajuda/artigos/guia-iniciantes",
    },
    {
      title: "Como ganhar pontos e subir no ranking",
      category: "Jogos",
      views: 8320,
      url: "/ajuda/artigos/pontos-ranking",
    },
    {
      title: "Recuperação de senha e segurança da conta",
      category: "Segurança",
      views: 7150,
      url: "/ajuda/artigos/recuperacao-senha",
    },
    {
      title: "Solução de problemas comuns nos jogos",
      category: "Técnico",
      views: 6890,
      url: "/ajuda/artigos/solucao-problemas",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Central de Ajuda</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encontre respostas para suas dúvidas e aprenda a aproveitar ao máximo a plataforma AthenaDev.
        </p>
      </div>

      {/* Barra de pesquisa */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar na central de ajuda..."
            className="pl-10 py-6 text-lg"
            aria-label="Pesquisar na central de ajuda"
          />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Buscar</Button>
        </div>
      </div>

      {/* Categorias de ajuda */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {helpCategories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card
              key={category.id}
              className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQs */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Perguntas Frequentes</CardTitle>
              <CardDescription>Respostas para as dúvidas mais comuns</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="getting-started" className="space-y-4">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {helpCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(faqsByCategory).map(([categoryId, faqs]) => (
                  <TabsContent key={categoryId} value={categoryId} className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Artigos populares */}
          <Card>
            <CardHeader>
              <CardTitle>Artigos Populares</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="space-y-1">
                  <Link href={article.url} className="text-sm font-medium hover:text-primary transition-colors block">
                    {article.title}
                  </Link>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline">{article.category}</Badge>
                    <span>{article.views.toLocaleString()} visualizações</span>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-2" asChild>
                <Link href="/ajuda/artigos">
                  Ver todos os artigos
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Precisa de mais ajuda?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Não encontrou o que procurava? Nossa equipe de suporte está pronta para ajudar.
              </p>
              <Button className="w-full" asChild>
                <Link href="/contato">Entrar em Contato</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Guias rápidos */}
          <Card>
            <CardHeader>
              <CardTitle>Guias Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { title: "Como criar uma conta", url: "/ajuda/guias/criar-conta" },
                  { title: "Começando seu primeiro jogo", url: "/ajuda/guias/primeiro-jogo" },
                  { title: "Entendendo o sistema de pontos", url: "/ajuda/guias/sistema-pontos" },
                  { title: "Configurando seu perfil", url: "/ajuda/guias/configurar-perfil" },
                ].map((guide, index) => (
                  <li key={index}>
                    <Link href={guide.url} className="flex items-center text-sm hover:text-primary transition-colors">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
