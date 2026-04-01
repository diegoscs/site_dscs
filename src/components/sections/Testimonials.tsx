/* Dois depoimentos grandes — um claro e um amarelo neon, estilo Linear */

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Card claro */}
          <div className="bg-[#E8EEFF] rounded-2xl p-10 flex flex-col justify-between min-h-64">
            <blockquote className="text-xl sm:text-2xl font-display font-bold text-[#1a1a2e] leading-snug mb-10">
              &ldquo;Diego entregou o sistema exatamente como eu imaginava, só que melhor. Prazo respeitado à risca e código impecável.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1a1a2e]/20 flex items-center justify-center text-[#1a1a2e] font-bold text-xs">C</div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a2e]">Carlos M.</p>
                <p className="text-xs text-[#1a1a2e]/60">CEO, Startup de Logística</p>
              </div>
            </div>
          </div>

          {/* Card amarelo neon */}
          <div className="bg-accent rounded-2xl p-10 flex flex-col justify-between min-h-64">
            <blockquote className="text-xl sm:text-2xl font-display font-bold text-[#09090B] leading-snug mb-10">
              &ldquo;Nossa velocidade é intensa e o Diego nos ajudou a sermos orientados a ação. ROI imediato.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#09090B]/15 flex items-center justify-center text-[#09090B] font-bold text-xs">A</div>
              <div>
                <p className="text-sm font-semibold text-[#09090B]">Ana P.</p>
                <p className="text-xs text-[#09090B]/60">CTO, E-commerce</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-sm text-muted">
            Mais de <span className="text-text font-semibold">30 projetos</span> entregues para startups e empresas em crescimento.
          </p>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors whitespace-nowrap"
          >
            Iniciar projeto →
          </a>
        </div>
      </div>
    </section>
  );
}
