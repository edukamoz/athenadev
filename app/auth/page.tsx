"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Gamepad2, Github, Mail, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

/**
 * Página de Autenticação - Login e Cadastro
 * Permite aos usuários fazer login ou criar uma conta
 */
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

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
          <h1 className="text-2xl font-bold text-foreground">{isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}</h1>
          <p className="text-muted-foreground mt-2">
            {isLogin ? "Entre na sua conta para continuar aprendendo" : "Junte-se à comunidade AthenaDev"}
          </p>
        </div>

        <Card>
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
              <Button variant="outline" className="w-full" type="button">
                <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                Continuar com GitHub
              </Button>
              <Button variant="outline" className="w-full" type="button">
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

            {/* Formulário */}
            <form className="space-y-4">
              {/* Nome (apenas no cadastro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Sua senha" required />
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
                  <Input id="confirmPassword" type="password" placeholder="Confirme sua senha" required />
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
              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "Entrar" : "Criar Conta"}
              </Button>
            </form>

            {/* Link para alternar entre login e cadastro */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">{isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}</span>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-medium"
              >
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
  )
}
