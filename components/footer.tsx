import Link from "next/link"
import { Gamepad2, Github, Twitter, Linkedin, Mail } from "lucide-react"

/**
 * Componente Footer - Rodapé principal da aplicação
 * Contém informações da empresa, links úteis e redes sociais
 * Implementa acessibilidade e estrutura semântica adequada
 */
export function Footer() {
  // Links das redes sociais
  const socialLinks = [
    {
      href: "https://github.com/athenadev",
      label: "GitHub da AthenaDev",
      icon: Github,
    },
    {
      href: "https://twitter.com/athenadev",
      label: "Twitter da AthenaDev",
      icon: Twitter,
    },
    {
      href: "https://linkedin.com/company/athenadev",
      label: "LinkedIn da AthenaDev",
      icon: Linkedin,
    },
    {
      href: "mailto:contato@athenadev.com",
      label: "Email de contato",
      icon: Mail,
    },
  ]

  // Links úteis organizados por categoria
  const footerLinks = {
    plataforma: [
      { href: "/jogos", label: "Nossos Jogos" },
      { href: "/ranking", label: "Ranking" },
      { href: "/sobre", label: "Sobre Nós" },
      { href: "/contato", label: "Contato" },
    ],
    suporte: [
      { href: "/ajuda", label: "Central de Ajuda" },
      { href: "/contato", label: "Fale Conosco" },
      { href: "/feedback", label: "Feedback" },
      { href: "/status", label: "Status do Sistema" },
    ],
    legal: [
      { href: "/privacidade", label: "Política de Privacidade" },
      { href: "/termos", label: "Termos de Uso" },
      { href: "/cookies", label: "Política de Cookies" },
      { href: "/acessibilidade", label: "Acessibilidade" },
    ],
  }

  return (
    <footer className="footer-enhanced border-t" role="contentinfo" aria-label="Rodapé do site">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seção principal do rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-foreground">AthenaDev</span>
            </div>

            <p className="text-sm text-foreground/70 mb-4 max-w-md">
              Transformamos o aprendizado de programação em uma experiência divertida e interativa através de jogos
              educativos únicos e acessíveis.
            </p>

            {/* Redes sociais */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links organizados por categoria */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-3 capitalize">
                {category === "plataforma" && "Plataforma"}
                {category === "suporte" && "Suporte"}
                {category === "empresa" && "Empresa"}
                {category === "legal" && "Legal"}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha divisória */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AthenaDev. Todos os direitos reservados.
            </p>

            {/* Informações de acessibilidade */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Feito com ❤️ para todos</span>
              <span>•</span>
              <Link
                href="/acessibilidade"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
              >
                Recursos de Acessibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
