/* Três cards com wireframe geométrico — estilo Linear */

const WireframeCube = ({ variant }: { variant: "solid" | "hollow" | "layered" }) => {
  if (variant === "solid") {
    return (
      <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
        <polygon points="100,20 160,55 160,110 100,145 40,110 40,55" stroke="#27272A" strokeWidth="1" fill="#111113" />
        <polygon points="100,20 160,55 100,90 40,55" stroke="#3F3F46" strokeWidth="1" fill="#1A1A1C" />
        <polygon points="40,55 100,90 100,145 40,110" stroke="#27272A" strokeWidth="1" fill="#111113" />
        <polygon points="160,55 100,90 100,145 160,110" stroke="#27272A" strokeWidth="1" fill="#161618" />
        <line x1="100" y1="90" x2="100" y2="145" stroke="#3F3F46" strokeWidth="1" />
        <line x1="100" y1="90" x2="40" y2="55" stroke="#3F3F46" strokeWidth="0.5" />
        <line x1="100" y1="90" x2="160" y2="55" stroke="#3F3F46" strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === "hollow") {
    return (
      <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
        <polygon points="100,20 160,55 160,110 100,145 40,110 40,55" stroke="#3F3F46" strokeWidth="1" fill="none" />
        <line x1="100" y1="20" x2="100" y2="90" stroke="#27272A" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="40" y1="55" x2="100" y2="90" stroke="#27272A" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="160" y1="55" x2="100" y2="90" stroke="#27272A" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="100,40 140,63 140,100 100,123 60,100 60,63" stroke="#27272A" strokeWidth="0.75" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
      {[0, 8, 16].map((offset, i) => (
        <polygon
          key={i}
          points={`100,${20 + offset} ${160 - offset},${55 + offset / 2} ${160 - offset},${110 - offset / 2} 100,${145 - offset} ${40 + offset},${110 - offset / 2} ${40 + offset},${55 + offset / 2}`}
          stroke="#3F3F46"
          strokeWidth={1 - i * 0.2}
          fill="none"
          opacity={1 - i * 0.25}
        />
      ))}
    </svg>
  );
};

const cards = [
  {
    label: "Construído com propósito",
    description: "Moldado pelas melhores práticas de desenvolvimento de produto e engenharia de software.",
    variant: "solid" as const,
  },
  {
    label: "Movido por dados",
    description: "Sistemas e pipelines projetados para humanos e automações, do ETL ao dashboard.",
    variant: "hollow" as const,
  },
  {
    label: "Desenhado para velocidade",
    description: "Reduz fricção e restaura o momentum para que seu time entregue com alta velocidade.",
    variant: "layered" as const,
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {cards.map((card) => (
          <div key={card.label} className="bg-bg p-8 flex flex-col">
            {/* Geometric shape */}
            <div className="h-36 mb-8">
              <WireframeCube variant={card.variant} />
            </div>
            <h3 className="font-display font-bold text-base mb-2">{card.label}</h3>
            <p className="text-sm text-muted leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
