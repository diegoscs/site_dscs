/* Seção sobre — estilo feature section simples */

const stack = [
  { cat: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { cat: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL"] },
  { cat: "Data", items: ["Airflow", "dbt", "BigQuery", "Power BI"] },
  { cat: "Infra", items: ["Docker", "Vercel", "AWS", "GitHub Actions"] },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-muted font-mono mb-12">5.0 Sobre →</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-6">
            Desenvolvedor orientado a resultado
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              Sou Diego Candido — Full Stack Developer e Data Engineer focado em construir
              sistemas que resolvem problemas reais. Trabalho com startups e empresas em crescimento
              que precisam de soluções técnicas sólidas e entregas confiáveis.
            </p>
            <p>
              Acredito em comunicação direta, cronogramas realistas e código que dura.
              Não construo apenas o que foi pedido, mas o que precisa ser construído.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            {[
              { label: "GitHub", href: "https://github.com/diegoscs" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-candido-8b0850222/" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 border border-border hover:border-border-hover text-xs text-muted hover:text-text rounded-lg transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stack grid */}
        <div className="grid grid-cols-2 gap-px bg-border">
          {stack.map((group) => (
            <div key={group.cat} className="bg-bg p-5">
              <p className="text-xs text-muted/50 font-mono uppercase tracking-widest mb-3">{group.cat}</p>
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="text-xs text-muted">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
