/* Seção "Entenda o progresso em escala" — estilo feature section do Linear */

const steps = [
  { index: "01", title: "Descoberta", body: "Entendo seus objetivos e requisitos em uma conversa direta. Sem formulários." },
  { index: "02", title: "Planejamento", body: "Arquitetura, cronograma realista e proposta com escopo definido e sem surpresas." },
  { index: "03", title: "Desenvolvimento", body: "Código limpo e testado. Você acompanha com atualizações frequentes." },
  { index: "04", title: "Entrega", body: "Deploy em produção com zero downtime, documentação e suporte pós-lançamento." },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-muted font-mono mb-12">4.0 Processo →</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-4">
              Entenda o progresso em cada etapa
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Atualizações de projeto, cronogramas claros e comunicação direta
              para que você nunca fique no escuro.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-display font-bold text-primary">100%</p>
                <p className="text-xs text-muted mt-1">Projetos no prazo</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">5★</p>
                <p className="text-xs text-muted mt-1">Avaliação média</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-px bg-border">
            {steps.map((step) => (
              <div key={step.index} className="bg-bg p-6 flex gap-5">
                <span className="text-xs font-mono text-muted/50 mt-0.5 shrink-0 w-6">{step.index}</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
