const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Founder & CEO",
    company: "TechVentures",
    content:
      "Trabalhar com Diego foi transformador para nosso produto. Ele não é apenas um desenvolvedor — é um parceiro estratégico. Em 6 meses tínhamos um MVP robusto e escalável.",
    avatar: "AS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO",
    company: "DataFlow Solutions",
    content:
      "Diego entregou um pipeline ETL que reduziu nossos custos de infraestrutura em 40% e aumentou a velocidade das queries em 10x. Resultados mensuráveis.",
    avatar: "CM",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Product Manager",
    company: "FinTech Inovadora",
    content:
      "O que mais gostei foi a comunicação clara e transparência total durante o projeto. O sistema que ele construiu escala sem problemas. Recomendo muito.",
    avatar: "MC",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Depoimentos
          </p>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15]">
            O que clientes dizem sobre trabalhar comigo.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-8 flex flex-col gap-6"
            >
              {/* Quote */}
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
