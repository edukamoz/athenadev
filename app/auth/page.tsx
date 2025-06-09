"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Gamepad2, Github, Mail, Eye, EyeOff, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthBackground } from "@/components/auth-background"
import { useAuth } from "@/contexts/auth-context"

/**
 * Página de Autenticação - Login e Cadastro
 * Permite aos usuários fazer login ou criar uma conta
 */
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { login, register, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  // Redirecionar se já estiver autenticado
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, isLoading, router])

  // Função para lidar com mudanças nos campos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Limpar erro ao digitar
  }

  // Função para validar o formulário
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos obrigatórios.")
      return false
    }

    if (!isLogin) {
      if (!formData.name) {
        setError("Por favor, digite seu nome.")
        return false
      }

      if (formData.password !== formData.confirmPassword) {
        setError("As senhas não coincidem.")
        return false
      }

      if (formData.password.length < 6) {
        setError("A senha deve ter pelo menos 6 caracteres.")
        return false
      }
    }

    return true
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setError("")

    try {
      let result

      if (isLogin) {
        result = await login(formData.email, formData.password)
      } else {
        result = await register(formData.name, formData.email, formData.password)
      }

      if (result.success) {
        router.push("/")
      } else {
        setError(result.error || "Ocorreu um erro. Tente novamente.")
      }
    } catch (err) {
      setError("Ocorreu um erro inesperado. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Função para alternar entre login e cadastro
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ name: "", email: "", password: "", confirmPassword: "" })
    setError("")
  }

  // Mostrar loading se ainda estiver verificando autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Não renderizar se já estiver autenticado (redirecionamento em andamento)
  if (isAuthenticated) {
    return null
  }

  return (
    <div className="relative min-h-screen">
      {/* Fundo interativo */}
      <AuthBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          {/* Logo e título */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">{isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}</h1>
            <p className="text-muted-foreground mt-2">
              {isLogin ? "Entre na sua conta para continuar aprendendo" : "Junte-se à comunidade AthenaDev"}
            </p>
          </div>

          <Card className="backdrop-blur-sm bg-background/95">
            <CardHeader>
              <CardTitle>{isLogin ? "Fazer Login" : "Criar Conta"}</CardTitle>
              <CardDescription>
                {isLogin
                  ? "Digite suas credenciais para acessar sua conta"
                  : "Preencha os dados para criar sua conta gratuita"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Botões de login social */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full" type="button" disabled>
                  <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                  Continuar com GitHub
                </Button>
                <Button variant="outline" className="w-full" type="button" disabled>
                  <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                  Continuar com Google
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Ou continue com email</span>
                </div>
              </div>

              {/* Mensagem de erro */}
              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <AlertDescription className="text-red-400">{error}</AlertDescription>
                </Alert>
              )}

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome (apenas no cadastro) */}
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Senha */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Sua senha"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirmar senha (apenas no cadastro) */}
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}

                {/* Link de esqueci a senha (apenas no login) */}
                {isLogin && (
                  <div className="text-right">
                    <Link href="/esqueci-senha" className="text-sm text-primary hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                )}

                {/* Botão de submit */}
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      {isLogin ? "Entrando..." : "Criando conta..."}
                    </>
                  ) : isLogin ? (
                    "Entrar"
                  ) : (
                    "Criar Conta"
                  )}
                </Button>
              </form>

              {/* Link para alternar entre login e cadastro */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">{isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}</span>
                <button type="button" onClick={toggleMode} className="text-primary hover:underline font-medium">
                  {isLogin ? "Criar conta" : "Fazer login"}
                </button>
              </div>

              {/* Termos e condições (apenas no cadastro) */}
              {!isLogin && (
                <p className="text-xs text-muted-foreground text-center">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <Link href="/termos" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
