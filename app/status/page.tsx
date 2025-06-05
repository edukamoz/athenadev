"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw, Server, Database, Globe } from "lucide-react"

/**
 * Página Status do Sistema - Monitoramento de serviços
 * Exibe o status atual dos serviços da plataforma
 */
export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Dados mockados dos serviços
  const services = [
    {
      name: "Website",
      status: "operational",
      uptime: 99.98,
      icon: Globe,
      description: "Site principal e páginas estáticas",
    },
    {
      name: "API",
      status: "operational",
      uptime: 99.95,
      icon: Server,
      description: "Serviços de API e endpoints",
    },
    {
      name: "Banco de Dados",
      status: "operational",
      uptime: 99.99,
      icon: Database,
      description: "Armazenamento de dados e cache",
    },
    {
      name: "Jogos",
      status: "operational",
      uptime: 99.92,
      icon: Server,
      description: "Servidores de jogos e conteúdo interativo",
    },
    {
      name: "Autenticação",
      status: "operational",
      uptime: 100,
      icon: Server,
      description: "Serviços de login e autenticação",
    },
  ]

  // Incidentes recentes (mockados)
  const incidents = [
    {
      id: "INC-2023-12-15",
      title: "Lentidão nos servidores de jogos",
      status: "resolved",
      date: "15/12/2023",
      duration: "45 minutos",
      description:
        "Alguns usuários experimentaram lentidão ao carregar jogos devido a um pico de tráfego. Aumentamos a capacidade dos servidores para resolver o problema.",
    },
    {
      id: "INC-2023-11-28",
      title: "Interrupção parcial da API",
      status: "resolved",
      date: "28/11/2023",
      duration: "22 minutos",
      description:
        "Uma atualização de configuração causou interrupção temporária em alguns endpoints da API. Revertemos a alteração e restauramos o serviço.",
    },
    {
      id: "INC-2023-10-05",
      title: "Manutenção programada do banco de dados",
      status: "resolved",
      date: "05/10/2023",
      duration: "120 minutos",
      description:
        "Realizamos uma manutenção programada no banco de dados para melhorar o desempenho. O serviço ficou indisponível durante o período de manutenção.",
    },
  ]

  // Manutenções programadas (mockadas)
  const maintenances = [
    {
      id: "MNT-2024-01-20",
      title: "Atualização da infraestrutura de jogos",
      status: "scheduled",
      date: "20/01/2024",
      time: "03:00 - 05:00 (GMT-3)",
      description:
        "Atualizaremos os servidores de jogos para melhorar o desempenho e adicionar suporte para novos recursos. Alguns jogos podem ficar indisponíveis durante este período.",
    },
  ]

  // Função para atualizar o status
  const refreshStatus = () => {
    setIsRefreshing(true)

    // Simular atualização (substituir por chamada real da API no futuro)
    setTimeout(() => {
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1500)
  }

  // Atualizar a cada 60 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      refreshStatus()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Função para obter o ícone de status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" aria-hidden="true" />
      case "outage":
        return <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
      case "maintenance":
        return <Clock className="w-5 h-5 text-blue-500" aria-hidden="true" />
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-500" aria-hidden="true" />
    }
  }

  // Função para obter a badge de status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
            Operacional
          </Badge>
        )
      case "degraded":
        return (
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
            Degradado
          </Badge>
        )
      case "outage":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">
            Indisponível
          </Badge>
        )
      case "maintenance":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
            Em Manutenção
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
            Resolvido
          </Badge>
        )
      case "scheduled":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
            Agendado
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/30">
            Desconhecido
          </Badge>
        )
    }
  }

  // Verificar se todos os serviços estão operacionais
  const allOperational = services.every((service) => service.status === "operational")

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Status do Sistema</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Monitore o status atual dos serviços da AthenaDev e veja o histórico de incidentes.
        </p>
      </div>

      {/* Status geral */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {allOperational ? (
                <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-yellow-500" aria-hidden="true" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {allOperational ? "Todos os sistemas operacionais" : "Alguns sistemas com problemas"}
                </h2>
                <p className="text-sm text-muted-foreground">Última atualização: {lastUpdated.toLocaleTimeString()}</p>
              </div>
            </div>

            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
              aria-label="Atualizar status"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} aria-hidden="true" />
              <span>{isRefreshing ? "Atualizando..." : "Atualizar"}</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Status dos serviços */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Status dos Serviços</h2>
        <div className="grid gap-4">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-4">
                      <IconComponent className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-foreground">{service.name}</h3>
                        {getStatusBadge(service.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm font-medium text-foreground">{service.uptime}%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <Progress value={service.uptime} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Histórico e manutenções */}
      <Tabs defaultValue="incidents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="incidents">Incidentes Recentes</TabsTrigger>
          <TabsTrigger value="maintenance">Manutenções</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Incidentes</CardTitle>
              <CardDescription>Últimos incidentes e suas resoluções</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="border-l-2 border-muted pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground">{incident.title}</h3>
                      {getStatusBadge(incident.status)}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <span>{incident.date}</span> • <span>Duração: {incident.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manutenções Programadas</CardTitle>
              <CardDescription>Próximas manutenções e atualizações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenances.map((maintenance) => (
                  <div key={maintenance.id} className="border-l-2 border-blue-500 pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground">{maintenance.title}</h3>
                      {getStatusBadge(maintenance.status)}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <span>{maintenance.date}</span> • <span>{maintenance.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{maintenance.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Informações adicionais */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Esta página é atualizada automaticamente a cada minuto. Para reportar problemas, entre em contato através da{" "}
          <a href="/contato" className="text-primary hover:underline">
            página de contato
          </a>
          .
        </p>
      </div>
    </div>
  )
}
