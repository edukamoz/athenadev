import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react"

/**
 * Página Política de Privacidade - Informações sobre tratamento de dados
 * Detalha como coletamos, usamos e protegemos os dados dos usuários
 */
export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Última atualização: 15 de dezembro de 2023</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introdução */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Introdução
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              A AthenaDev está comprometida em proteger sua privacidade e dados pessoais. Esta Política de Privacidade
              explica como coletamos, usamos, armazenamos e protegemos suas informações quando você usa nossa plataforma
              de aprendizado de programação.
            </p>
            <p className="text-muted-foreground">
              Ao usar nossos serviços, você concorda com as práticas descritas nesta política. Se você não concordar com
              qualquer parte desta política, não use nossos serviços.
            </p>
          </CardContent>
        </Card>

        {/* Informações que coletamos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Informações que Coletamos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Informações fornecidas por você:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Nome completo e endereço de email ao criar uma conta</li>
                <li>Informações de perfil opcionais (foto, biografia, preferências)</li>
                <li>Conteúdo que você cria ou compartilha na plataforma</li>
                <li>Comunicações conosco (emails, feedback, suporte)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Informações coletadas automaticamente:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Dados de uso (jogos jogados, tempo gasto, progresso)</li>
                <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
                <li>Dados de localização aproximada (baseada no IP)</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Como usamos suas informações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Como Usamos Suas Informações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fornecimento de serviços:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Criar e gerenciar sua conta</li>
                  <li>Personalizar sua experiência de aprendizado</li>
                  <li>Acompanhar seu progresso e conquistas</li>
                  <li>Fornecer suporte técnico</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Melhoria dos serviços:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Analisar padrões de uso para melhorar a plataforma</li>
                  <li>Desenvolver novos recursos e jogos</li>
                  <li>Realizar pesquisas e análises</li>
                  <li>Detectar e prevenir fraudes ou abusos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Comunicação:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Enviar notificações importantes sobre sua conta</li>
                  <li>Responder a suas solicitações de suporte</li>
                  <li>Enviar atualizações sobre novos recursos (com seu consentimento)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compartilhamento de informações */}
        <Card>
          <CardHeader>
            <CardTitle>Compartilhamento de Informações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes
              situações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais ou ordens judiciais</li>
              <li>Para proteger nossos direitos, propriedade ou segurança</li>
              <li>
                Com prestadores de serviços que nos ajudam a operar a plataforma (sob acordos de confidencialidade)
              </li>
              <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
            </ul>
          </CardContent>
        </Card>

        {/* Segurança dos dados */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Segurança dos Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos aos nossos sistemas</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
              <li>Treinamento de funcionários sobre proteção de dados</li>
            </ul>
          </CardContent>
        </Card>

        {/* Seus direitos */}
        <Card>
          <CardHeader>
            <CardTitle>Seus Direitos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                <strong>Acesso:</strong> Solicitar uma cópia dos dados que temos sobre você
              </li>
              <li>
                <strong>Retificação:</strong> Corrigir dados incorretos ou incompletos
              </li>
              <li>
                <strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais
              </li>
              <li>
                <strong>Portabilidade:</strong> Receber seus dados em formato estruturado
              </li>
              <li>
                <strong>Oposição:</strong> Opor-se ao processamento de seus dados para determinadas finalidades
              </li>
              <li>
                <strong>Limitação:</strong> Solicitar a limitação do processamento de seus dados
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Para exercer esses direitos, entre em contato conosco através do email: privacidade@athenadev.com
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card>
          <CardHeader>
            <CardTitle>Cookies e Tecnologias Similares</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Usamos cookies e tecnologias similares para melhorar sua experiência:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico da plataforma
              </li>
              <li>
                <strong>Cookies de desempenho:</strong> Ajudam-nos a entender como você usa o site
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> Lembram suas preferências e configurações
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
            </p>
          </CardContent>
        </Card>

        {/* Retenção de dados */}
        <Card>
          <CardHeader>
            <CardTitle>Retenção de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas
              nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando
              você exclui sua conta, removemos ou anonimizamos suas informações pessoais, exceto quando precisamos
              mantê-las por razões legais ou de segurança.
            </p>
          </CardContent>
        </Card>

        {/* Alterações na política */}
        <Card>
          <CardHeader>
            <CardTitle>Alterações nesta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
              significativas por email ou através de um aviso em nossa plataforma. Recomendamos que você revise esta
              política regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Entre em Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre
              em contato conosco:
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
