export default function CTA() {
  return (
    <section className="py-32 px-6 lg:px-8 border-t border-border text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-10">
          Construído para o futuro.
          <br />
          Disponível hoje.
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 border border-text/30 hover:border-text text-sm font-medium rounded-xl transition-colors text-text"
          >
            Iniciar projeto
          </a>
          <a
            href="mailto:diego.candido.pro@gmail.com"
            className="inline-flex items-center px-7 py-3 border border-border hover:border-border-hover text-sm font-medium rounded-xl transition-colors text-muted hover:text-text"
          >
            Enviar email
          </a>
        </div>
      </div>
    </section>
  );
}
