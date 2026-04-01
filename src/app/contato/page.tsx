"use client";

import ContactForm from "@/components/forms/ContactForm";

const canaisContato = [
  {
    icone: "📧",
    titulo: "Email",
    contato: "diego.candido.pro@gmail.com",
    link: "mailto:diego.candido.pro@gmail.com",
    tempo: "Respondo em até 24h",
  },
  {
    icone: "💬",
    titulo: "WhatsApp",
    contato: "+55 (11) 96419-7606",
    link: "https://wa.me/5511964197606",
    tempo: "Resposta imediata",
    external: true,
  },
  {
    icone: "💼",
    titulo: "LinkedIn",
    contato: "diego-candido",
    link: "https://www.linkedin.com/in/diego-candido-8b0850222/",
    tempo: "Respondo em até 2h",
    external: true,
  },
  {
    icone: "💻",
    titulo: "GitHub",
    contato: "diegoscs",
    link: "https://github.com/diegoscs",
    tempo: "Veja meus projetos",
    external: true,
  },
];

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Contato
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-text-dark)] mb-6 leading-[1.1]">
            Vamos conversar
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Tenho interesse em ouvir sobre seu projeto. Preencha o formulário abaixo ou entre em contato direto através de um dos canais.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-8">
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8">
                Enviar Mensagem
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Canais de Contato */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8">
              Canais de Contato
            </h2>

            <div className="space-y-6">
              {canaisContato.map((canal, idx) => (
                <a
                  key={idx}
                  href={canal.link}
                  target={canal.external ? "_blank" : undefined}
                  rel={canal.external ? "noopener noreferrer" : undefined}
                  className="block p-6 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-primary)] transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                >
                  <p className="text-3xl mb-3">{canal.icone}</p>
                  <p className="text-sm font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
                    {canal.titulo}
                  </p>
                  <p className="font-semibold text-[var(--color-text-dark)] mb-2">
                    {canal.contato}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {canal.tempo}
                  </p>
                  {canal.external && (
                    <span className="sr-only">(abre em nova aba)</span>
                  )}
                </a>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-8 p-6 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
              <p className="text-sm text-[var(--color-text-secondary)]">
                💡 <strong>Dica:</strong> Se precisar de resposta rápida, use WhatsApp! Respondi mensagens em tempo real durante o dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectativas */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            O que esperar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-semibold text-[var(--color-text-dark)] mb-2">
                Resposta Rápida
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Respondo em até 24h. Se for urgente, use WhatsApp.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-[var(--color-text-dark)] mb-2">
                Análise Profunda
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Fazia perguntas para entender seu projeto em profundidade.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold text-[var(--color-text-dark)] mb-2">
                Proposta Detalhada
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Envio plano completo com timeline, custo e escopo.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-[var(--color-text-dark)] mb-2">
                Sem Compromisso
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Consultoria inicial é gratuita. Sem pressão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Dúvidas?
          </h2>

          <div className="space-y-4">
            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Quanto custa uma consulta?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                A primeira consulta é <strong>gratuita</strong>. Sem compromisso. Depois, você decide se quer dar prosseguimento com um projeto ou consultoria paga.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Qual é o melhor jeito de entrar em contato?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Se for urgente ou quiser conversa rápida: <strong>WhatsApp</strong>. Para propostas formais: <strong>formulário</strong> ou <strong>email</strong>. Para networking: <strong>LinkedIn</strong>.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Vocês trabalham com clientes internacionais?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Sim! Estou acostumado a trabalhar com time internacional. Fuso horário São Paulo (GMT-3), flexibilidade para reuniões em outros fusos.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Qual é sua disponibilidade atual?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Atualmente aceito novos projetos com start em até 4 semanas. Tenho vagas para 1-2 projetos simultâneos. Para trabalhos urgentes, conversamos!
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
