const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Founder & CEO",
    company: "TechVentures",
    content:
      "Trabalhar com Diego foi transformador para nosso produto. Ele não é apenas um desenvolvedor — é um parceiro estratégico. Em 6 meses tínhamos um MVP robusto e escalável.",
    avatar: "AS",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO",
    company: "DataFlow Solutions",
    content:
      "Diego entregou um pipeline ETL que reduziu nossos custos de infraestrutura em 40% e aumentou a velocidade das queries em 10x. Resultados mensuráveis.",
    avatar: "CM",
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Product Manager",
    company: "FinTech Inovadora",
    content:
      "Comunicação clara e transparência total durante o projeto. O sistema que ele construiu escala sem problemas. Recomendo sem hesitar.",
    avatar: "MC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-widest font-mono">
            Depoimentos
          </p>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15]">
            O que clientes dizem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 flex flex-col gap-5"
            >
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-dark)] flex items-center justify-center text-xs font-semibold text-[var(--color-text-muted)] flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.role} · {t.company}
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
