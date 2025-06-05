"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Gamepad2, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

/**
 * Página de Esqueci a Senha - Recuperação de senha
 * Permite aos usuários solicitar um código de recuperação por email
 */
export default function EsqueciSenhaPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState("")

  // Função para validar email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para enviar código de recuperação
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validação do email
    if (!email) {
      setError("Por favor, digite seu email.")
      return
    }

    if (!isValidEmail(email)) {
      setError("Por favor, digite um email válido.")
      return
    }

    setIsLoading(true)

    try {
      // Simular envio de email (substituir por chamada real da API no futuro)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsEmailSent(true)
    } catch (error) {
      setError("Ocorreu um erro ao enviar o código. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  // Função para reenviar código
  const handleResend = () => {
    setIsEmailSent(false)
    setEmail("")
    setError("")
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-md mx-auto">
        {/* Logo e título */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {isEmailSent ? "Código Enviado!" : "Esqueceu sua senha?"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isEmailSent
              ? "Verifique seu email para continuar"
              : "Digite seu email para receber um código de recuperação"}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              <span>{isEmailSent ? "Email Enviado" : "Recuperar Senha"}</span>
            </CardTitle>
            <CardDescription>
              {isEmailSent
                ? "Enviamos um código de 6 dígitos para seu email"
                : "Informe o email da sua conta para receber as instruções"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {isEmailSent ? (
              // Tela de confirmação
              <div className="space-y-4">
                <Alert className="border-green-500/20 bg-green-500/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <AlertDescription className="text-green-400">
                    Código enviado para <strong>{email}</strong>
                  </AlertDescription>
                </Alert>

                <div className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p>Verifique sua caixa de entrada e spam.</p>
                    <p>O código expira em 15 minutos.</p>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link href="/auth">Já tenho o código - Fazer Login</Link>
                    </Button>

                    <Button variant="outline" className="w-full" onClick={handleResend}>
                      Enviar para outro email
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // Formulário de email
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-describedby="email-help"
                    className={error ? "border-red-500 focus:border-red-500" : ""}
                  />
                  <p id="email-help" className="text-xs text-muted-foreground">
                    Digite o email cadastrado na sua conta
                  </p>
                </div>

                {/* Mensagem de erro */}
                {error && (
                  <Alert className="border-red-500/20 bg-red-500/10">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <AlertDescription className="text-red-400">{error}</AlertDescription>
                  </Alert>
                )}

                {/* Botão de envio */}
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando código...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                      Enviar Código
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Link para voltar */}
            <div className="text-center">
              <Link
                href="/auth"
                className="inline-flex items-center text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                <ArrowLeft className="w-4 h-4 mr-1" aria-hidden="true" />
                Voltar para o login
              </Link>
            </div>

            {/* Informações de segurança */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-sm font-semibold text-foreground mb-2">Dicas de Segurança</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Nunca compartilhe seu código de recuperação</li>
                <li>• O código expira em 15 minutos</li>
                <li>• Verifique também a pasta de spam</li>
                <li>• Entre em contato se não receber o email</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Precisa de ajuda */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Ainda com problemas?{" "}
            <Link href="/contato" className="text-primary hover:underline">
              Entre em contato conosco
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
