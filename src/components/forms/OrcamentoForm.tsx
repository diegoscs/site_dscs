"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step1Data = { objetivo: string };
type Step2Data = { servico: string };
type Step3Data = { recursos: string[] };
type Step4Data = {
  descricao: string;
  prazo: string;
  complexidade: string;
  temDesign: string;
  referencias: string;
};
type Step5Data = {
  nome: string;
  whatsapp: string;
  email: string;
  empresa: string;
  contato: string;
};

type FormData = Step1Data & Step2Data & Step3Data & Step4Data & Step5Data;

// ─── Data ─────────────────────────────────────────────────────────────────────

const objetivos = [
  { id: "lancar-produto", label: "Lançar produto digital", icon: "🚀" },
  { id: "escalar-negocio", label: "Escalar negócio existente", icon: "📈" },
  { id: "automatizar", label: "Automatizar processos", icon: "⚙️" },
  { id: "dados", label: "Analisar e usar dados", icon: "📊" },
  { id: "modernizar", label: "Modernizar sistema", icon: "🔄" },
  { id: "consultoria", label: "Consultoria técnica", icon: "💡" },
];

const servicos = [
  {
    id: "landing",
    label: "Landing Page",
    descricao: "Página de alta conversão para produto ou serviço",
  },
  {
    id: "site",
    label: "Site Completo",
    descricao: "Site institucional ou portfólio profissional",
  },
  {
    id: "sistema",
    label: "Sistema Web / App",
    descricao: "Aplicação web com funcionalidades complexas",
  },
  {
    id: "painel",
    label: "Painel / Dashboard",
    descricao: "Visualização de dados e gestão em tempo real",
  },
  {
    id: "automacao",
    label: "Automação",
    descricao: "Automatize tarefas, integrações e fluxos",
  },
  {
    id: "engdados",
    label: "Engenharia de Dados",
    descricao: "Pipelines, ETL e infraestrutura de dados",
  },
];

const recursosPorServico: Record<string, string[]> = {
  landing: [
    "Animações e micro-interações",
    "SEO avançado",
    "Testes A/B",
    "Chat widget",
    "Analytics e heatmap",
    "Integração CRM",
  ],
  site: [
    "Blog / CMS",
    "Multi-idioma",
    "E-commerce",
    "Área de membros",
    "SEO avançado",
    "Analytics",
  ],
  sistema: [
    "Autenticação / Login",
    "Pagamentos online",
    "API REST",
    "Dashboard integrado",
    "Notificações push",
    "App mobile",
  ],
  painel: [
    "Gráficos avançados",
    "Exportar dados (Excel/PDF)",
    "Filtros avançados",
    "Integração BI",
    "Alertas automáticos",
    "Multi-usuário",
  ],
  automacao: [
    "Integrações via API",
    "Notificações automáticas",
    "Agendamento de tarefas",
    "Webhooks",
    "Integração WhatsApp",
    "Relatórios automáticos",
  ],
  engdados: [
    "Data warehouse",
    "Dashboards de dados",
    "Alertas e monitoramento",
    "Pipeline ETL",
    "Treinamento de modelos ML",
    "Integração BI",
  ],
};

const prazos = [
  { id: "urgente", label: "Urgente", sub: "até 4 semanas" },
  { id: "normal", label: "Normal", sub: "1–3 meses" },
  { id: "tranquilo", label: "Tranquilo", sub: "3–6 meses" },
  { id: "flexivel", label: "Flexível", sub: "sem prazo definido" },
];

const complexidades = [
  { id: "simples", label: "Simples", sub: "Funcionalidades básicas" },
  { id: "medio", label: "Médio", sub: "Integrações e customizações" },
  { id: "complexo", label: "Complexo", sub: "Alto volume, escala, IA" },
];

const designStatuses = [
  { id: "nao-tenho", label: "Não tenho design" },
  { id: "tenho-referencia", label: "Tenho referências" },
  { id: "tenho-wireframe", label: "Tenho wireframe" },
  { id: "design-pronto", label: "Design pronto" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(data: FormData): string {
  const objetivo = objetivos.find((o) => o.id === data.objetivo)?.label ?? data.objetivo;
  const servico = servicos.find((s) => s.id === data.servico)?.label ?? data.servico;
  const prazo = prazos.find((p) => p.id === data.prazo)?.label ?? data.prazo;
  const complexidade = complexidades.find((c) => c.id === data.complexidade)?.label ?? data.complexidade;
  const design = designStatuses.find((d) => d.id === data.temDesign)?.label ?? data.temDesign;

  const recursos = data.recursos.length > 0 ? data.recursos.join(", ") : "Nenhum";

  return [
    `*Nova Solicitação de Orçamento — DSCS*`,
    ``,
    `*Objetivo:* ${objetivo}`,
    `*Serviço:* ${servico}`,
    `*Recursos extras:* ${recursos}`,
    ``,
    `*Contexto do projeto:*`,
    data.descricao || "(não informado)",
    ``,
    `*Prazo:* ${prazo}`,
    `*Complexidade:* ${complexidade}`,
    `*Design:* ${design}`,
    data.referencias ? `*Referências:* ${data.referencias}` : "",
    ``,
    `*Contato:*`,
    `Nome: ${data.nome}`,
    `WhatsApp: ${data.whatsapp}`,
    `Email: ${data.email}`,
    data.empresa ? `Empresa: ${data.empresa}` : "",
    `Preferência de contato: ${data.contato}`,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? "w-2 h-2 bg-[var(--color-primary)]"
              : i === current
              ? "w-3 h-3 bg-[var(--color-primary)]"
              : "w-2 h-2 bg-[var(--color-border-hover)]"
          }`}
        />
      ))}
    </div>
  );
}

function StepLabel({ step, total }: { step: number; total: number }) {
  return (
    <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-widest mb-2 text-center">
      Passo {step} de {total}
    </p>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const TOTAL_STEPS = 6;

export default function OrcamentoForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    objetivo: "",
    servico: "",
    recursos: [],
    descricao: "",
    prazo: "",
    complexidade: "",
    temDesign: "",
    referencias: "",
    nome: "",
    whatsapp: "",
    email: "",
    empresa: "",
    contato: "whatsapp",
  });

  const update = (patch: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...patch }));

  const toggleRecurso = (r: string) =>
    update({
      recursos: formData.recursos.includes(r)
        ? formData.recursos.filter((x) => x !== r)
        : [...formData.recursos, r],
    });

  const canAdvance = () => {
    if (step === 1) return !!formData.objetivo;
    if (step === 2) return !!formData.servico;
    if (step === 3) return true; // optional
    if (step === 4)
      return !!formData.prazo && !!formData.complexidade && !!formData.temDesign;
    if (step === 5)
      return !!formData.nome && !!formData.whatsapp && !!formData.email;
    return true;
  };

  const handleNext = () => {
    if (canAdvance() && step < TOTAL_STEPS) setStep((s) => s + 1);
  };
  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    const msg = buildWhatsAppMessage(formData);
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5511964197606?text=${encoded}`, "_blank");
    setDone(true);
  };

  // ── Confirmation screen ────────────────────────────────────────────────────
  if (done) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-muted)] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
          Solicitação enviada!
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto mb-8 leading-relaxed">
          O WhatsApp foi aberto com o resumo do seu projeto. Responderei em até
          24h com uma proposta personalizada.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setStep(1);
            setFormData({
              objetivo: "",
              servico: "",
              recursos: [],
              descricao: "",
              prazo: "",
              complexidade: "",
              temDesign: "",
              referencias: "",
              nome: "",
              whatsapp: "",
              email: "",
              empresa: "",
              contato: "whatsapp",
            });
          }}
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] underline transition-colors"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  // ── Shared card grid style ────────────────────────────────────────────────
  const cardBase =
    "p-4 rounded-xl border cursor-pointer transition-all duration-150 text-left";
  const cardActive =
    "border-[var(--color-primary)] bg-[var(--color-primary-muted)]";
  const cardInactive =
    "border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)]";

  return (
    <div className="max-w-2xl mx-auto">
      <StepLabel step={step} total={TOTAL_STEPS} />
      <ProgressDots current={step - 1} total={TOTAL_STEPS} />

      {/* ── Step 1: Objetivo ─────────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
            Qual é o seu objetivo?
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
            Escolha o que melhor descreve o que você quer alcançar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {objetivos.map((obj) => (
              <button
                key={obj.id}
                type="button"
                onClick={() => update({ objetivo: obj.id })}
                className={`${cardBase} ${
                  formData.objetivo === obj.id ? cardActive : cardInactive
                }`}
              >
                <span className="text-2xl mb-2 block">{obj.icon}</span>
                <span className="text-sm font-medium text-[var(--color-text-dark)]">
                  {obj.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Serviço ──────────────────────────────────────────────── */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
            Que tipo de projeto é esse?
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
            Selecione o serviço mais próximo do que você precisa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicos.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => update({ servico: s.id, recursos: [] })}
                className={`${cardBase} ${
                  formData.servico === s.id ? cardActive : cardInactive
                }`}
              >
                <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {s.descricao}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Recursos ────────────────────────────────────────────── */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
            Recursos adicionais
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
            Selecione tudo que se aplica ao seu projeto. (opcional)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(recursosPorServico[formData.servico] ?? []).map((r) => {
              const active = formData.recursos.includes(r);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleRecurso(r)}
                  className={`${cardBase} flex items-center gap-3 ${
                    active ? cardActive : cardInactive
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${
                      active
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                        : "border-[var(--color-border-hover)]"
                    }`}
                  >
                    {active && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[var(--color-text-dark)]">{r}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Step 4: Contexto ─────────────────────────────────────────────── */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
              Contexto do projeto
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
              Quanto mais detalhe, mais precisa será a proposta.
            </p>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Descreva o projeto
            </label>
            <textarea
              value={formData.descricao}
              onChange={(e) => update({ descricao: e.target.value })}
              placeholder="O que você quer construir? Quais são os objetivos principais? Existe algum sistema atual que precisa ser integrado ou substituído?"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
            />
          </div>

          {/* Prazo */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">
              Prazo desejado
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {prazos.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => update({ prazo: p.id })}
                  className={`${cardBase} text-center ${
                    formData.prazo === p.id ? cardActive : cardInactive
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--color-text-dark)]">
                    {p.label}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    {p.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Complexidade */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">
              Complexidade estimada
            </label>
            <div className="grid grid-cols-3 gap-2">
              {complexidades.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => update({ complexidade: c.id })}
                  className={`${cardBase} text-center ${
                    formData.complexidade === c.id ? cardActive : cardInactive
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--color-text-dark)]">
                    {c.label}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    {c.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Design */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">
              Status do design
            </label>
            <div className="grid grid-cols-2 gap-2">
              {designStatuses.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => update({ temDesign: d.id })}
                  className={`${cardBase} text-center ${
                    formData.temDesign === d.id ? cardActive : cardInactive
                  }`}
                >
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">
                    {d.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Referências */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Links de referência{" "}
              <span className="text-[var(--color-text-muted)] font-normal">
                (opcional)
              </span>
            </label>
            <input
              type="text"
              value={formData.referencias}
              onChange={(e) => update({ referencias: e.target.value })}
              placeholder="ex: site.com, figma.com/..."
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
        </div>
      )}

      {/* ── Step 5: Contato ──────────────────────────────────────────────── */}
      {step === 5 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
              Seus dados de contato
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
              Para enviar a proposta personalizada.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Nome *
            </label>
            <input
              type="text"
              value={formData.nome}
              onChange={(e) => update({ nome: e.target.value })}
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => update({ whatsapp: e.target.value })}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => update({ email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Empresa{" "}
              <span className="text-[var(--color-text-muted)] font-normal">
                (opcional)
              </span>
            </label>
            <input
              type="text"
              value={formData.empresa}
              onChange={(e) => update({ empresa: e.target.value })}
              placeholder="Nome da empresa ou projeto"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">
              Como prefere ser contatado?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "whatsapp", label: "WhatsApp" },
                { id: "email", label: "Email" },
                { id: "qualquer", label: "Qualquer um" },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => update({ contato: c.id })}
                  className={`${cardBase} text-center ${
                    formData.contato === c.id ? cardActive : cardInactive
                  }`}
                >
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">
                    {c.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Step 6: Revisão ──────────────────────────────────────────────── */}
      {step === 6 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">
            Revise sua solicitação
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
            Tudo certo? Clique em Enviar para abrir o WhatsApp com o resumo.
          </p>

          <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] divide-y divide-[var(--color-border-dark)] mb-8">
            {[
              {
                label: "Objetivo",
                value: objetivos.find((o) => o.id === formData.objetivo)?.label,
                step: 1,
              },
              {
                label: "Serviço",
                value: servicos.find((s) => s.id === formData.servico)?.label,
                step: 2,
              },
              {
                label: "Recursos",
                value:
                  formData.recursos.length > 0
                    ? formData.recursos.join(", ")
                    : "Nenhum selecionado",
                step: 3,
              },
              {
                label: "Prazo",
                value: prazos.find((p) => p.id === formData.prazo)?.label,
                step: 4,
              },
              {
                label: "Complexidade",
                value: complexidades.find((c) => c.id === formData.complexidade)
                  ?.label,
                step: 4,
              },
              {
                label: "Design",
                value: designStatuses.find((d) => d.id === formData.temDesign)
                  ?.label,
                step: 4,
              },
              {
                label: "Contato",
                value: `${formData.nome} · ${formData.whatsapp}`,
                step: 5,
              },
            ].map(({ label, value, step: targetStep }) => (
              <div
                key={label}
                className="flex items-start justify-between px-5 py-3 gap-4"
              >
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-mono w-24 flex-shrink-0 pt-0.5">
                  {label}
                </span>
                <span className="text-sm text-[var(--color-text-dark)] flex-1">
                  {value}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(targetStep)}
                  className="text-xs text-[var(--color-primary)] hover:underline flex-shrink-0"
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--color-border-dark)]">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors"
          >
            ← Voltar
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance()}
            className="px-6 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continuar →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity"
          >
            Enviar pelo WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
