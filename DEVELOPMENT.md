# 📚 Guia de Desenvolvimento

## Como Rodar o Projeto Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
```

## Estrutura de Pastas

```
src/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Home page
│   └── (adicionar mais páginas)
│
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navegação superior
│   │   └── Footer.tsx       # Rodapé
│   │
│   ├── sections/            # Seções da página
│   │   ├── Hero.tsx         # Hero section (já implementado)
│   │   ├── Services.tsx     # Serviços (TODO)
│   │   ├── Portfolio.tsx    # Portfolio/Projetos (TODO)
│   │   ├── Testimonials.tsx # Depoimentos (TODO)
│   │   └── ...
│   │
│   ├── forms/               # Formulários
│   │   ├── ContactForm.tsx  # Contato (TODO)
│   │   └── QuoteForm.tsx    # Orçamento (TODO)
│   │
│   ├── ui/                  # Components reutilizáveis
│   │   ├── Button.tsx       # ✅ Pronto
│   │   ├── Card.tsx         # TODO
│   │   ├── Badge.tsx        # TODO
│   │   └── Modal.tsx        # TODO
│   │
│   └── animations/          # Animações
│       ├── FadeIn.tsx       # TODO
│       └── ScrollReveal.tsx # TODO
│
├── styles/
│   ├── globals.css          # Estilos globais
│   └── variables.css        # CSS variables (temas)
│
├── lib/
│   ├── constants.ts         # TODO: Constantes (textos, cores, etc)
│   └── utils.ts             # TODO: Funções utilitárias
│
└── data/
    ├── services.ts          # TODO: Dados de serviços
    ├── projects.ts          # TODO: Dados de projetos
    ├── testimonials.ts      # TODO: Dados de depoimentos
    └── ...
```

## Como Adicionar Componentes

### Exemplo: Novo componente UI (Card)

```typescript
// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-bg-secondary-dark border border-border-dark rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}
```

### Exemplo: Nova seção (Services)

```typescript
// src/components/sections/Services.tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Desenvolvimento de aplicações web modernas",
    },
    // ...
  ];

  return (
    <section className="py-20 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-6">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Cores & Temas

As cores estão definidas em `src/styles/variables.css` e podem ser usadas via classes Tailwind:

```jsx
// Exemplo de uso
<div className="bg-primary text-text-dark border border-border-dark">
  Conteúdo com tema escuro
</div>
```

Variáveis disponíveis:
- `primary` - Azul (#3b82f6)
- `accent` - Âmbar (#fbbf24)
- `secondary` - Cinza (#1f2937)
- `bg-dark` - Fundo escuro (#0f1419)
- `text-dark` - Texto claro (#f5f5f5)
- `text-secondary` - Texto cinzento (#a0aec0)
- `border-dark` - Bordas (#2d3748)
- E mais...

## Tipografia

Já estão configuradas as fonts do Google:
- **Poppins** (Display/Headlines) - font-display
- **Inter** (Body/Headings) - font-body, font-heading
- **Fira Code** (Código) - font-mono

```jsx
// Exemplo
<h1 className="font-display text-5xl">Título Grande</h1>
<p className="font-body text-base">Parágrafo normal</p>
<code className="font-mono">console.log('código')</code>
```

## Responsividade

Usando Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

```jsx
// Exemplo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 coluna no mobile, 2 em tablet, 3 em desktop */}
</div>
```

## Otimizações

- ✅ Next.js Image Optimization
- ✅ CSS Tailwind (purged)
- ✅ TypeScript strict mode
- ✅ Code splitting automático
- ✅ Lazy loading de componentes

## Checklist antes de fazer Deploy

- [ ] Todos os links de navegação funcionando
- [ ] WhatsApp, Email, links sociais atualizados
- [ ] Imagens otimizadas
- [ ] Meta tags preenchidas
- [ ] Performance checado (Lighthouse)
- [ ] Tested em mobile
- [ ] Sem console errors/warnings

## Comandos Úteis

```bash
# Build para produção
npm run build

# Testar build localmente
npm run start

# Checar tipos TypeScript
npm run type-check

# Lint (quando configurado)
npm run lint
```

## Recursos Úteis

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Dúvidas?** Consulte o `DSCS_PLANEJAMENTO_COMPLETO.md` para mais detalhes do projeto.
