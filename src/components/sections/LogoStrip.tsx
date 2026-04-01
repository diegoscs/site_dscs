const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-[var(--color-border-dark)] py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-8">
          Stack de tecnologias
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-200 cursor-default tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
