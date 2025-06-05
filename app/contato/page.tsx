import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

/**
 * Página de Contato - Formulário e informações de contato
 * Permite aos usuários entrar em contato com a equipe
 */
export default function ContatoPage() {
  // Informações de contato
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@athenadev.com",
      description: "Resposta em até 24 horas",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      description: "Seg-Sex, 9h às 18h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      description: "Atendimento remoto",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Entre em Contato</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Nossa equipe está pronta para ajudar você!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Informações de contato */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Informações de Contato</h2>
              <p className="text-muted-foreground mb-6">Escolha a melhor forma de entrar em contato conosco.</p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-sm text-foreground mt-1">{info.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required aria-describedby="name-help" />
                    <p id="name-help" className="text-xs text-muted-foreground">
                      Como devemos nos dirigir a você?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required aria-describedby="email-help" />
                    <p id="email-help" className="text-xs text-muted-foreground">
                      Para enviarmos nossa resposta
                    </p>
                  </div>
                </div>

                {/* Assunto */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que você gostaria de falar?"
                    required
                    aria-describedby="subject-help"
                  />
                  <p id="subject-help" className="text-xs text-muted-foreground">
                    Resumo do que você precisa
                  </p>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva sua dúvida, sugestão ou como podemos ajudar..."
                    rows={6}
                    required
                    aria-describedby="message-help"
                  />
                  <p id="message-help" className="text-xs text-muted-foreground">
                    Quanto mais detalhes, melhor poderemos ajudar
                  </p>
                </div>

                {/* Botão de envio */}
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ rápido */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Perguntas Frequentes</CardTitle>
            <CardDescription className="text-center">Talvez sua dúvida já tenha sido respondida</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Como posso começar a usar a plataforma?</h3>
                <p className="text-sm text-muted-foreground">
                  Basta criar uma conta gratuita e você terá acesso imediato aos nossos jogos básicos.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">A plataforma é gratuita?</h3>
                <p className="text-sm text-muted-foreground">
                  Oferecemos jogos gratuitos e também planos premium com conteúdo exclusivo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Posso usar em dispositivos móveis?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Nossa plataforma é totalmente responsiva e funciona em qualquer dispositivo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Vocês oferecem certificados?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, emitimos certificados de conclusão para jogos e trilhas de aprendizado.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
