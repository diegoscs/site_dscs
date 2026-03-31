export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg-dark to-bg-secondary-dark">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Diego Candido
          </h1>
          <p className="text-2xl text-text-secondary mb-8">
            Full Stack Developer | Data Engineer
          </p>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Transformo ideias em sistemas escaláveis
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-smooth font-semibold">
              Fale Comigo via WhatsApp
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-smooth font-semibold">
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
