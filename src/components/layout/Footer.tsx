import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Produto: [
      { label: "Serviços", href: "#servicos", external: false },
      { label: "Portfolio", href: "#portfolio", external: false },
      { label: "Processo", href: "#processo", external: false },
      { label: "FAQ", href: "#faq", external: false },
    ],
    Empresa: [
      { label: "Sobre", href: "#sobre", external: false },
      { label: "Contato", href: "#contato", external: false },
      { label: "Blog", href: "#blog", external: false },
    ],
    Sociais: [
      { label: "GitHub", href: "https://github.com/diegoscs", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-candido-8b0850222/", external: true },
      { label: "WhatsApp", href: "https://wa.me/5511964197606", external: true },
    ],
  };

  return (
    <footer className="bg-bg-secondary-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white">
                DC
              </div>
              <span className="text-xl font-bold">DSCS</span>
            </Link>
            <p className="text-text-secondary text-sm">
              Transformando ideias em sistemas escaláveis desde {currentYear - 5}.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-text-dark mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-text-secondary hover:text-text-dark transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border-dark pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Diego Candido. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="/termos"
                className="text-text-secondary hover:text-text-dark transition-smooth text-sm"
              >
                Termos de Uso
              </a>
              <a
                href="/privacidade"
                className="text-text-secondary hover:text-text-dark transition-smooth text-sm"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
