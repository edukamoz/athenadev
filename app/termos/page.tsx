import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, UserX, Shield, Gavel } from "lucide-react"

/**
 * Página Termos de Uso - Condições de uso da plataforma
 * Define os termos e condições para uso dos serviços da AthenaDev
 */
export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da página */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Última atualização: 15 de dezembro de 2023</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introdução */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Aceitação dos Termos
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Bem-vindo à AthenaDev! Estes Termos de Uso ("Termos") regem o uso de nossa plataforma de aprendizado de
              programação, incluindo nosso website, jogos educativos e serviços relacionados (coletivamente, os
              "Serviços").
            </p>
            <p className="text-muted-foreground">
              Ao acessar ou usar nossos Serviços, você concorda em ficar vinculado a estes Termos. Se você não concordar
              com qualquer parte destes Termos, não poderá acessar ou usar nossos Serviços.
            </p>
          </CardContent>
        </Card>

        {/* Descrição dos serviços */}
        <Card>
          <CardHeader>
            <CardTitle>Descrição dos Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              A AthenaDev oferece uma plataforma educacional que permite aos usuários:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Acessar jogos educativos interativos para aprender programação</li>
              <li>Acompanhar seu progresso e conquistas</li>
              <li>Participar de rankings e competições</li>
              <li>Interagir com outros usuários através de recursos comunitários</li>
              <li>Acessar materiais educacionais e tutoriais</li>
            </ul>
          </CardContent>
        </Card>

        {/* Elegibilidade e contas */}
        <Card>
          <CardHeader>
            <CardTitle>Elegibilidade e Contas de Usuário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Elegibilidade:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Você deve ter pelo menos 13 anos de idade para usar nossos Serviços</li>
                <li>Usuários menores de 18 anos devem ter permissão dos pais ou responsáveis</li>
                <li>Você deve fornecer informações precisas e atualizadas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Responsabilidades da conta:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Você é responsável por manter a confidencialidade de sua senha</li>
                <li>Você é responsável por todas as atividades que ocorrem em sua conta</li>
                <li>Notifique-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Uma pessoa ou entidade pode manter apenas uma conta</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Uso aceitável */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Uso Aceitável
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Ao usar nossos Serviços, você concorda em:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Usar os Serviços apenas para fins legais e educacionais</li>
              <li>Respeitar os direitos de outros usuários</li>
              <li>Não compartilhar conteúdo ofensivo, discriminatório ou ilegal</li>
              <li>Não tentar hackear, interferir ou danificar nossos sistemas</li>
              <li>Não usar bots ou scripts automatizados sem permissão</li>
              <li>Não violar direitos de propriedade intelectual</li>
            </ul>
          </CardContent>
        </Card>

        {/* Condutas proibidas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-500" aria-hidden="true" />
              Condutas Proibidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">As seguintes condutas são estritamente proibidas:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Assédio, bullying ou intimidação de outros usuários</li>
              <li>Publicação de conteúdo pornográfico, violento ou discriminatório</li>
              <li>Tentativas de obter acesso não autorizado a contas de outros usuários</li>
              <li>Distribuição de malware, vírus ou código malicioso</li>
              <li>Spam ou envio de mensagens não solicitadas</li>
              <li>Violação de leis locais, estaduais ou federais</li>
              <li>Uso dos Serviços para atividades comerciais não autorizadas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Propriedade intelectual */}
        <Card>
          <CardHeader>
            <CardTitle>Propriedade Intelectual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Nosso conteúdo:</h3>
              <p className="text-muted-foreground">
                Todos os jogos, materiais educacionais, design, código, textos, gráficos e outros conteúdos dos Serviços
                são propriedade da AthenaDev e estão protegidos por direitos autorais, marcas registradas e outras leis
                de propriedade intelectual.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Seu conteúdo:</h3>
              <p className="text-muted-foreground">
                Você mantém a propriedade do conteúdo que cria ou compartilha em nossos Serviços. Ao compartilhar
                conteúdo, você nos concede uma licença não exclusiva para usar, modificar e exibir esse conteúdo em
                nossos Serviços.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pagamentos e assinaturas */}
        <Card>
          <CardHeader>
            <CardTitle>Pagamentos e Assinaturas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Planos pagos:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Alguns recursos podem exigir uma assinatura paga</li>
                  <li>Os preços estão sujeitos a alterações com aviso prévio</li>
                  <li>As assinaturas são renovadas automaticamente</li>
                  <li>Você pode cancelar sua assinatura a qualquer momento</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Reembolsos:</h3>
                <p className="text-muted-foreground">
                  Oferecemos reembolsos de acordo com nossa política de reembolso. Entre em contato conosco para
                  solicitar um reembolso dentro do prazo aplicável.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suspensão e encerramento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserX className="w-5 h-5 mr-2 text-red-500" aria-hidden="true" />
              Suspensão e Encerramento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Reservamo-nos o direito de suspender ou encerrar sua conta e acesso aos Serviços a qualquer momento, com
              ou sem aviso, por qualquer motivo, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Violação destes Termos de Uso</li>
              <li>Atividade fraudulenta ou suspeita</li>
              <li>Solicitação de autoridades legais</li>
              <li>Descontinuação dos Serviços</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Você pode encerrar sua conta a qualquer momento através das configurações de sua conta ou entrando em
              contato conosco.
            </p>
          </CardContent>
        </Card>

        {/* Limitação de responsabilidade */}
        <Card>
          <CardHeader>
            <CardTitle>Limitação de Responsabilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Os Serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que os Serviços serão
              ininterruptos, livres de erros ou seguros.
            </p>
            <p className="text-muted-foreground">
              Em nenhuma circunstância a AthenaDev será responsável por danos indiretos, incidentais, especiais ou
              consequenciais decorrentes do uso ou incapacidade de usar os Serviços.
            </p>
          </CardContent>
        </Card>

        {/* Lei aplicável */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gavel className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
              Lei Aplicável e Jurisdição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Estes Termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes Termos ou aos Serviços
              será resolvida nos tribunais competentes de São Paulo, SP.
            </p>
          </CardContent>
        </Card>

        {/* Alterações nos termos */}
        <Card>
          <CardHeader>
            <CardTitle>Alterações nos Termos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos modificar estes Termos a qualquer momento. Notificaremos você sobre mudanças significativas por
              email ou através de um aviso em nossos Serviços. O uso continuado dos Serviços após tais modificações
              constitui sua aceitação dos novos Termos.
            </p>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle>Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong> legal@athenadev.com
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
