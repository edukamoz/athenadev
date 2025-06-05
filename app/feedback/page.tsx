"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Smile, Frown, Meh, ThumbsUp, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

/**
 * Página de Feedback - Coleta opiniões dos usuários
 * Permite aos usuários enviar sugestões e avaliações
 */
export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("suggestion")
  const [satisfaction, setSatisfaction] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Função para lidar com o envio do feedback
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Simular envio de feedback (substituir por chamada real da API no futuro)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      setError("Ocorreu um erro ao enviar seu feedback. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Função para reiniciar o formulário
  const handleReset = () => {
    setIsSubmitted(false)
    setSatisfaction(null)
    setError("")
    // Resetar campos do formulário
    const form = document.getElementById("feedback-form") as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sua Opinião é Importante</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ajude-nos a melhorar a AthenaDev compartilhando suas experiências, sugestões e ideias.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Enviar Feedback</CardTitle>
            <CardDescription>
              Seu feedback nos ajuda a criar uma plataforma melhor para todos os usuários.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {isSubmitted ? (
              // Mensagem de sucesso
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Feedback Enviado!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Muito obrigado por compartilhar sua opinião. Sua contribuição é valiosa para melhorarmos a AthenaDev.
                </p>
                <Button onClick={handleReset} className="mt-4">
                  Enviar Outro Feedback
                </Button>
              </div>
            ) : (
              // Formulário de feedback
              <form id="feedback-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Tipo de feedback */}
                <Tabs value={feedbackType} onValueChange={setFeedbackType} className="w-full" defaultValue="suggestion">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="suggestion">Sugestão</TabsTrigger>
                    <TabsTrigger value="issue">Problema</TabsTrigger>
                    <TabsTrigger value="praise">Elogio</TabsTrigger>
                  </TabsList>

                  <TabsContent value="suggestion" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="suggestion-title">Título da Sugestão</Label>
                      <Input id="suggestion-title" placeholder="Ex: Adicionar modo noturno nos jogos" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="suggestion-details">Detalhes da Sugestão</Label>
                      <Textarea
                        id="suggestion-details"
                        placeholder="Descreva sua ideia em detalhes..."
                        rows={5}
                        required
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="issue" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-title">Título do Problema</Label>
                      <Input id="issue-title" placeholder="Ex: Jogo não carrega no Firefox" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-details">Detalhes do Problema</Label>
                      <Textarea
                        id="issue-details"
                        placeholder="Descreva o problema, incluindo quando ocorre e como reproduzi-lo..."
                        rows={5}
                        required
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="praise" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="praise-title">Título do Elogio</Label>
                      <Input id="praise-title" placeholder="Ex: Adorei o novo jogo de algoritmos" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="praise-details">Seu Elogio</Label>
                      <Textarea id="praise-details" placeholder="Conte-nos o que você gostou..." rows={5} required />
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Nível de satisfação */}
                <div className="space-y-3">
                  <Label>Qual seu nível de satisfação com a AthenaDev?</Label>
                  <RadioGroup
                    value={satisfaction || ""}
                    onValueChange={setSatisfaction}
                    className="flex justify-between max-w-md"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="unsatisfied" id="unsatisfied" className="sr-only" />
                      <Label
                        htmlFor="unsatisfied"
                        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                          satisfaction === "unsatisfied"
                            ? "bg-red-500/20 text-red-500"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <Frown className="w-6 h-6" />
                      </Label>
                      <span className="text-xs">Insatisfeito</span>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                      <Label
                        htmlFor="neutral"
                        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                          satisfaction === "neutral"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <Meh className="w-6 h-6" />
                      </Label>
                      <span className="text-xs">Neutro</span>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="satisfied" id="satisfied" className="sr-only" />
                      <Label
                        htmlFor="satisfied"
                        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                          satisfaction === "satisfied"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <Smile className="w-6 h-6" />
                      </Label>
                      <span className="text-xs">Satisfeito</span>
                    </div>
                  </RadioGroup>
                </div>

                {/* Email (opcional) */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input id="email" type="email" placeholder="Seu email para que possamos responder" />
                  <p className="text-xs text-muted-foreground">
                    Forneça seu email se quiser receber uma resposta sobre seu feedback.
                  </p>
                </div>

                {/* Mensagem de erro */}
                {error && (
                  <Alert className="border-red-500/20 bg-red-500/10">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <AlertDescription className="text-red-500">{error}</AlertDescription>
                  </Alert>
                )}

                {/* Botão de envio */}
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                        Enviar Feedback
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Informações adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ThumbsUp className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
                Por que seu feedback importa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Usamos seu feedback para melhorar continuamente a plataforma. Suas sugestões já nos ajudaram a
                implementar novos recursos e corrigir problemas. Cada opinião é analisada por nossa equipe.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
                Outros canais de contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Além deste formulário, você também pode entrar em contato conosco através de:
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Email: contato@athenadev.com</li>
                <li>• Discord: discord.gg/athenadev</li>
                <li>• Twitter: @athenadev</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
