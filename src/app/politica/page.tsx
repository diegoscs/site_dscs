export default function Politica() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-[1.1]">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">
            Última atualização: abril de {currentYear}
          </p>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto space-y-10 text-sm text-[var(--color-text-secondary)] leading-relaxed">

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">1. Quem somos</h2>
            <p>
              Este site é operado por Diego Candido (DSCS), desenvolvedor independente com sede no Brasil.
              Nosso site é <strong className="text-[var(--color-text-dark)]">sitedscs.vercel.app</strong>.
              Dúvidas sobre privacidade podem ser enviadas para{" "}
              <a href="mailto:diego.candido.pro@gmail.com" className="text-[var(--color-primary)] hover:underline">
                diego.candido.pro@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">2. Dados coletados</h2>
            <p className="mb-3">
              Este site coleta apenas os dados que você fornece voluntariamente ao preencher o formulário de orçamento:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de WhatsApp</li>
              <li>Nome da empresa (opcional)</li>
              <li>Informações sobre o projeto descrito</li>
            </ul>
            <p className="mt-3">
              Não coletamos dados automaticamente além do que é inerente ao funcionamento da hospedagem (Vercel),
              como endereço IP e logs de acesso padrão.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">3. Como usamos seus dados</h2>
            <p className="mb-3">Os dados fornecidos são utilizados exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Responder à sua solicitação de orçamento</li>
              <li>Enviar propostas e informações sobre o projeto</li>
              <li>Manter contato durante a negociação ou execução do projeto</li>
            </ul>
            <p className="mt-3">
              Seus dados <strong className="text-[var(--color-text-dark)]">não são vendidos, alugados ou compartilhados</strong> com
              terceiros para fins comerciais.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">4. Cookies</h2>
            <p>
              Este site não utiliza cookies de rastreamento ou publicidade. Podem ser utilizados cookies
              técnicos essenciais pela plataforma de hospedagem (Vercel) para funcionamento básico do serviço.
              Esses cookies não identificam você pessoalmente.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">5. Armazenamento e segurança</h2>
            <p>
              Os dados submetidos pelo formulário são transmitidos diretamente via WhatsApp e não são
              armazenados em banco de dados neste site. Adotamos as melhores práticas de segurança disponíveis
              para proteger qualquer informação em trânsito.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">6. Seus direitos (LGPD)</h2>
            <p className="mb-3">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar a correção de dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:diego.candido.pro@gmail.com" className="text-[var(--color-primary)] hover:underline">
                diego.candido.pro@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">7. Links externos</h2>
            <p>
              Este site pode conter links para redes sociais (GitHub, LinkedIn, WhatsApp, Instagram).
              Ao acessar esses links, você estará sujeito às políticas de privacidade de cada plataforma.
              Não nos responsabilizamos pelo conteúdo ou práticas de privacidade de sites externos.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">8. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data de última atualização será sempre
              indicada no topo desta página. O uso contínuo do site após alterações implica na aceitação da
              política revisada.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-3">9. Contato</h2>
            <p>
              Para dúvidas, solicitações ou reclamações relacionadas a esta política de privacidade,
              entre em contato pelo e-mail{" "}
              <a href="mailto:diego.candido.pro@gmail.com" className="text-[var(--color-primary)] hover:underline">
                diego.candido.pro@gmail.com
              </a>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
