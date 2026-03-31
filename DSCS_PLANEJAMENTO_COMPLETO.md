# 🚀 PLANEJAMENTO COMPLETO - SITE DSCS

**Data:** Março 2026  
**Projeto:** Site Profissional DSCS - Full Stack Developer  
**Stack:** Next.js 14+ | React 18+ | TypeScript | Tailwind CSS | Vercel | Supabase  
**Domínio:** www.dscs.com.br | **Hospedagem:** Vercel (Next.js) + Hostinger (Domínio)

---

## 📋 ÍNDICE
1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Estrutura de Pastas](#2-estrutura-de-pastas)
3. [Paleta de Cores & Tipografia](#3-paleta-de-cores--tipografia)
4. [Componentes a Criar](#4-componentes-a-criar)
5. [Seções do Site (Conteúdo Detalhado)](#5-seções-do-site-conteúdo-detalhado)
6. [Processo de Trabalho Detalhado](#6-processo-de-trabalho-detalhado)
7. [Serviços com Sub-categorias](#7-serviços-com-sub-categorias)
8. [Depoimentos Fictícios Realistas](#8-depoimentos-fictícios-realistas)
9. [Configurações Next.js](#9-configurações-nextjs)
10. [Checklist de Implementação](#10-checklist-de-implementação)
11. [Timeline Estimada](#11-timeline-estimada)

---

## 1. VISÃO GERAL DO PROJETO

### Objetivo
Criar um site profissional que comunique expertise técnica em full stack development, data engineering e soluções escaláveis. Design inspirado em **Linear** (clean, tipografia grande, espacamento generoso, dark-first).

### Público-Alvo
- 🎯 Pequenas/médias empresas buscando sistemas web custom
- 🎯 Startups precisando de MVP rápido
- 🎯 Profissionais autônomos querendo automação
- 🎯 Empresas com painéis administrativos defasados

### Diferencial
- Expertise em full stack + data engineering
- Foco em performance e escalabilidade
- LGPD compliance
- Integração de APIs complexas
- Entrega rápida com qualidade

---

## 2. ESTRUTURA DE PASTAS

```
dscs-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── team/
│   │   └── icons/
│   ├── logos/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz + navbar + footer
│   │   ├── page.tsx            # Home page
│   │   ├── servicos/
│   │   │   └── page.tsx        # Página completa de serviços
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [project]/
│   │   │       └── page.tsx    # Detalhe projeto
│   │   ├── sobre/
│   │   │   └── page.tsx        # About page
│   │   ├── orcamento/
│   │   │   └── page.tsx        # Quick quote page
│   │   ├── contato/
│   │   │   └── page.tsx        # Contact page
│   │   └── sitemap.ts          # Para SEO
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── SubServiceList.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── ProcessStep.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── FAQ.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── QuoteForm.tsx
│   │   │   └── FormField.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts         # Cores, textos, configurações
│   │   ├── utils.ts
│   │   └── validations.ts       # Validações de forms
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css        # CSS variables para tema
│   │
│   └── data/
│       ├── services.ts          # Dados de serviços
│       ├── projects.ts          # Dados de portfólio
│       ├── testimonials.ts      # Dados de depoimentos
│       ├── process.ts           # Dados de processo
│       └── faqs.ts              # FAQs
│
├── .env.local                   # Variáveis de ambiente (não commitar)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

```

---

## 3. PALETA DE CORES & TIPOGRAFIA

### Cores

```css
/* CSS Variables (src/styles/variables.css) */

/* Light Theme */
:root {
  --color-bg-light: #FFFFFF;
  --color-text-light: #1a1a1a;
  --color-primary: #1a3a52;      /* Azul escuro */
  --color-accent: #F59E0B;        /* Âmbar */
  --color-secondary: #2D3748;     /* Cinza escuro */
  --color-border-light: #E2E8F0;
  --color-bg-secondary-light: #F7FAFC;
}

/* Dark Theme (padrão) */
[data-theme="dark"],
:root {
  --color-bg-dark: #0F1419;       /* Quase preto */
  --color-text-dark: #F5F5F5;
  --color-text-secondary: #A0AEC0;
  --color-primary: #3B82F6;       /* Azul mais claro para dark */
  --color-accent: #FBBF24;        /* Âmbar mais claro */
  --color-secondary: #1F2937;
  --color-border-dark: #2D3748;
  --color-bg-secondary-dark: #1A202C;
}
```

### Tipografia

```
Display (H1, H2): "Poppins" Bold 700 (36-64px)
  - Headlines e seções principais
  - Lettering em hero
  - Nomes de serviços

Heading (H3, H4): "Inter" SemiBold 600 (18-28px)
  - Subtítulos
  - Card titles

Body: "Inter" Regular 400/500 (14-16px)
  - Parágrafos
  - Descrições
  - Body text

Mono: "Fira Code" Regular 400 (12-14px)
  - Exemplos de código
  - Especificações técnicas
```

**Importar fonts:**
```html
<!-- Via Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700&family=Fira+Code:wght@400&display=swap" rel="stylesheet">
```

---

## 4. COMPONENTES A CRIAR

### Layout Components
- [ ] **Navbar** - Logo, links navegação, theme toggle, CTA
- [ ] **Footer** - Links, contato, redes sociais, copyright
- [ ] **MobileMenu** - Menu responsivo mobile
- [ ] **ThemeToggle** - Dark/Light mode switcher

### Sections (Home Page)
- [ ] **Hero** - Grande título + subtítulo + 2 CTAs + imagem/video
- [ ] **About** - Mini bio + habilidades + skills badges
- [ ] **Services** - 3 cards com sub-serviços expansíveis
- [ ] **ServiceCard** - Card individual com dropdown
- [ ] **SubServiceList** - Lista de sub-serviços dentro do card
- [ ] **Portfolio** - Cards de projetos com hover effect
- [ ] **ProjectCard** - Projeto individual (imagem, tech stack, link)
- [ ] **Process** - 4 etapas detalhadas com timeline
- [ ] **ProcessStep** - Etapa individual (número, título, descrição, entregáveis)
- [ ] **Testimonials** - Carousel de 3 depoimentos
- [ ] **TestimonialCard** - Card de depoimento (foto, nome, empresa, texto)
- [ ] **CTA** - Chamada para ação no final da página
- [ ] **FAQ** - Perguntas frequentes (accordion)

### Forms
- [ ] **ContactForm** - Formulário de contato (nome, email, telefone, mensagem)
- [ ] **QuoteForm** - Formulário de orçamento rápido (tipo projeto, descrição, email, telefone)
- [ ] **FormField** - Componente reutilizável de input

### UI Components
- [ ] **Button** - Variações (primary, secondary, outline, ghost)
- [ ] **Card** - Container padrão
- [ ] **Badge** - Para skills/tags
- [ ] **Tag** - Para tecnologias
- [ ] **Modal** - Para diálogos

### Animations
- [ ] **FadeIn** - Fade in ao carregar
- [ ] **ScrollReveal** - Reveal ao scroll
- [ ] **Hover Effects** - Transições suaves

---

## 5. SEÇÕES DO SITE (CONTEÚDO DETALHADO)

### 5.1 NAVBAR
```
Logo DSCS [left]
Links: Serviços | Portfolio | Sobre | Contato [center]
Theme Toggle + CTA "Fale Comigo" [right]
```

### 5.2 HERO SECTION
```
[Left Side - Text]
H1: "Transformo ideias em sistemas escaláveis"
P: "Full Stack Developer especializado em soluções web 
   modernas, painéis administrativos e plataformas data-driven.
   Desde MVP até sistemas corporativos com Next.js, React,
   Node.js e arquitetura de dados robusta."

CTA 1: "Fale Comigo via WhatsApp" (primary)
CTA 2: "Ver Portfolio" (outline)

[Right Side - Visual]
Code snippet animado OU imagem estilizada
Elemento Tech: Grid com tecnologias principais
```

**Texto alternativo hero:**
> "De ideias para produção. Sistemas web que crescem com seu negócio."

### 5.3 ABOUT SECTION
```
Título: "Sobre Mim"

[Left - Foto profissional]
**[Você fornece foto aqui]**

[Right - Conteúdo]
H2: "Diego Candido"
Subtitle: "Full Stack Developer | Data Engineer | São Paulo 🇧🇷"

Bio (2-3 parágrafos):
"Sou Diego Candido, Full Stack Developer com experiência em 
desenvolvimento web moderno e soluções de dados. Especializado 
em criar sistemas escaláveis, landing pages de alta conversão 
e plataformas que crescem com seu negócio.

Com expertise em Next.js, React, Node.js e arquitetura de dados, 
ajudo empresas e empreendedores a transformar ideias em produtos 
digitais funcionais e lucrativos.

Baseado em São Paulo, trabalho com clientes brasileiros focando 
em soluções inovadoras, compliance LGPD e performance em primeiro lugar."

Skills (em 2 colunas):
Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Shadcn/UI
Backend: Node.js, Express, APIs REST, GraphQL
Data: PostgreSQL, Supabase, ETL, Data Analysis, SQL
DevOps: Vercel, Google Cloud, Docker, Git
Tools: Mapbox, Integração APIs (Pagamentos, WhatsApp, etc)

Social Links:
GitHub | LinkedIn | Email | WhatsApp
```

### 5.4 SERVICES SECTION
```
H2: "Serviços Oferecidos"
P: "Soluções completas do conceito à produção"

[Grid 3 colunas - Expandíveis ao clicar]

Cada card mostra:
- Ícone
- Nome do serviço
- Breve descrição
- "Ver detalhes ↓" (ao clicar, expande sub-serviços)
- Tag de preço: "Sob Orçamento"

[Veja seção 7 para detalhes completos]
```

### 5.5 PORTFOLIO SECTION
```
H2: "Projetos em Destaque"
P: "Trabalhos recentes que entregaram resultados"

Grid de projetos (inicialmente 1 - AgendaCliente, depois você adiciona):

Projeto: AgendaCliente
├─ Imagem/Preview
├─ Título
├─ Descrição breve
├─ Tech Stack (badges)
├─ Link live (www.agendaclienteapp.com)
└─ "Ver detalhes" → Link para página individual

[Layout: 1 projeto grande (featured) + espaço para 2-3 outros depois]
```

### 5.6 PROCESSO DE TRABALHO (Detalhado para leigos)
```
H2: "Como Funciona Nosso Processo"
P: "Do conceito até a produção: etapas claras e entregáveis definidos"

[4 Etapas em Timeline visual]

┌─────────────────────────────────────────────────────────────┐
│                     ETAPA 1: DESCOBERTA                     │
│                     (3-7 dias úteis)                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ O QUE FAZEMOS:                                              │
│ • Reunião profunda entender seus objetivos, desafios e UX  │
│ • Análise de concorrentes e mercado                        │
│ • Definição de escopo, funcionalidades e prioridades       │
│ • Criação de personas (quem usa seu sistema)               │
│                                                              │
│ VOCÊ RECEBE:                                                │
│ ✓ Documento de Escopo detalhado (PDF)                      │
│ ✓ Proposta comercial com timeline e investimento           │
│ ✓ Mock-ups de telas principais (Figma)                     │
│ ✓ Plano técnico de arquitetura                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘

[Seta para baixo]

┌─────────────────────────────────────────────────────────────┐
│               ETAPA 2: DESIGN & PLANEJAMENTO                │
│                     (5-10 dias úteis)                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ O QUE FAZEMOS:                                              │
│ • Design completo em Figma (interface visual)              │
│ • Prototipagem interativa para validar fluxo de usuário    │
│ • Estruturação técnica do banco de dados                   │
│ • Planejamento da arquitetura de APIs e integrações        │
│ • Definição de timeline detalhada sprint-by-sprint         │
│                                                              │
│ VOCÊ RECEBE:                                                │
│ ✓ Design completo em Figma (seu acesso)                    │
│ ✓ Protótipo interativo para testar                         │
│ ✓ Documento técnico da arquitetura                         │
│ ✓ Aprovação de design antes de codificar                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘

[Seta para baixo]

┌─────────────────────────────────────────────────────────────┐
│             ETAPA 3: DESENVOLVIMENTO & TESTES               │
│                 (15-45 dias úteis*)                         │
│            *Depende da complexidade do projeto              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ O QUE FAZEMOS:                                              │
│ • Programação do frontend (React/Next.js)                  │
│ • Programação do backend (APIs, lógica de negócio)         │
│ • Integração de serviços externos (pagamentos, etc)        │
│ • Testes automatizados e manuais                           │
│ • Otimização de performance e segurança                    │
│ • Atualizações semanais sobre progresso                    │
│                                                              │
│ VOCÊ RECEBE:                                                │
│ ✓ Acesso a ambiente de staging (pré-produção)             │
│ ✓ Relatórios semanais de progresso                        │
│ ✓ Feedback loop: você testa, nós ajustamos                │
│ ✓ Suporte a requisições de mudança                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘

[Seta para baixo]

┌─────────────────────────────────────────────────────────────┐
│            ETAPA 4: DEPLOY & LANÇAMENTO                     │
│                    (2-5 dias úteis)                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ O QUE FAZEMOS:                                              │
│ • Preparação final (otimizações, testes de carga)          │
│ • Configuração de hosting, domínio e SSL                   │
│ • Deploy em produção com zero downtime                     │
│ • Treinamento da sua equipe (se necessário)                │
│ • Documentação técnica para manutenção futura              │
│                                                              │
│ VOCÊ RECEBE:                                                │
│ ✓ Sistema 100% funcional em produção                       │
│ ✓ Documentação técnica + guias de uso                      │
│ ✓ Acesso a relatórios de analytics                        │
│ ✓ Suporte pós-lançamento (30 dias inclusos)               │
│                                                              │
└─────────────────────────────────────────────────────────────┘

TIMELINE TÍPICA:
Landing Page → 2-3 semanas
Painel Admin simples → 3-4 semanas
Sistema Web médio → 4-8 semanas
Plataforma complexa → 8-16 semanas

💡 DICA: Cada etapa é interdependente. A qualidade da Etapa 1
determina a velocidade da Etapa 3. Investir tempo em discovery
economiza tempo em ajustes depois.
```

### 5.7 TESTIMONIALS SECTION
```
H2: "O Que Meus Clientes Dizem"
P: "Feedback de empresas que transformaram suas operações"

[3 Cards em Carousel/Grid]
Cada card:
├─ Avatar (placeholder)
├─ Nome completo
├─ Empresa + cargo
├─ Depoimento (1-2 parágrafos)
└─ Rating (★★★★★)

[Ver seção 8 para depoimentos específicos]
```

### 5.8 FOOTER
```
Coluna 1: Logo + Descrição curta
Coluna 2: Links rápidos (Serviços, Portfolio, Sobre, Contato)
Coluna 3: Contato direto (Email, WhatsApp, GitHub, LinkedIn)
Coluna 4: Newsletter (opcional)

Bottom: Copyright + Termos de Uso + Política de Privacidade
```

---

## 6. PROCESSO DE TRABALHO DETALHADO

### Etapa 1: Descoberta (3-7 dias úteis)

**O que você vai receber:**
1. Documento de Escopo de 2-3 páginas
2. Proposta comercial com timeline e valor
3. Mock-ups de 3-5 telas principais
4. Diagrama de arquitetura técnica

**Reuniões:**
- 1 reunião inicial (30-45min) para levantar necessidades
- Análise com você sobre market, concorrentes, fluxo de usuário
- Validação do escopo antes de prosseguir

**Entregáveis:**
```
📄 Escopo_Projeto_[Nome].pdf
📊 Proposta_Comercial_[Data].docx
🎨 Mockups_Figma_[Link]
🏗️ Arquitetura_Tecnica_[Data].pdf
```

---

### Etapa 2: Design & Planejamento (5-10 dias úteis)

**O que você vai receber:**
1. Design completo em Figma (100% das telas)
2. Protótipo interativo clicável
3. Documentação de especificação técnica
4. Wireframes de fluxo de dados

**Processo:**
- Design de desktop + mobile + tablet
- Validação com você antes de qualquer código
- Ajustes iterativos no Figma
- Preparação da estrutura de BD

**Entregáveis:**
```
🎨 Design_Completo_Figma_[Link]
📱 Protótipo_Interativo_[Link]
📋 Especificação_Tecnica.md
🗄️ Modelo_Banco_de_Dados.sql
```

---

### Etapa 3: Desenvolvimento & Testes (15-45 dias úteis)

**Sprint-based (1-2 semanas por sprint)**

Sprint 1: Setup infrastructure + Frontend base
- [ ] Projeto Next.js configurado
- [ ] Estrutura de componentes base
- [ ] Páginas principais (home, serviços, etc)

Sprint 2-3: Core features + Backend
- [ ] Funcionalidades principais codificadas
- [ ] APIs desenvolvidas
- [ ] Integração com banco de dados

Sprint 4+: Integrações + Testes
- [ ] APIs externas integradas
- [ ] Testes automatizados
- [ ] Otimizações de performance

Sprint final: Polish + QA
- [ ] Correção de bugs
- [ ] Testes em múltiplos navegadores
- [ ] Otimização SEO + performance

**O que você vai receber:**
- Acesso a staging (pré-produção) após Sprint 1
- Relatórios semanais de progresso
- Oportunidade de feedback a cada Sprint
- Build/versão para testar localmente

---

### Etapa 4: Deploy & Lançamento (2-5 dias úteis)

**Pre-launch (24 horas antes):**
- [ ] Testes de carga e stress testing
- [ ] Backup de dados
- [ ] Plano de rollback em caso de problemas
- [ ] Checklist de deploy

**Launch day:**
- [ ] Deploy em produção (zero downtime)
- [ ] Verificação de todas as funcionalidades
- [ ] Monitoramento de erros em tempo real
- [ ] Comunicação com stakeholders

**Post-launch (30 dias):**
- [ ] Suporte técnico gratuito
- [ ] Correção de bugs críticos
- [ ] Otimizações baseadas em uso real
- [ ] Treinamento da equipe (se necessário)

**O que você vai receber:**
- [ ] Sistema em produção 100% funcional
- [ ] Documentação técnica (arquitetura, setup, deployment)
- [ ] Guias de uso para usuários finais
- [ ] Acesso a dashboards de analytics
- [ ] Contato direto para suporte pós-lançamento

---

## 7. SERVIÇOS COM SUB-CATEGORIAS

### 1️⃣ LANDING PAGES PROFISSIONAIS

**O que é:**
Página única otimizada para converter visitantes em clientes/leads. Foco em copywriting persuasivo + design clean + CTA clara.

**Sub-serviços:**
- [ ] **Landing Page Simples** - 1-3 seções, formulário básico (5-7 dias)
- [ ] **Landing Page Avançada** - 5-8 seções, integrações (pagamento, email, WhatsApp) (10-14 dias)
- [ ] **Sales Funnel** - Múltiplas páginas com sequência de vendas (15-21 dias)
- [ ] **Otimização & A/B Testing** - Melhorar conversão de landing existente (5-10 dias)

**Tecnologias:**
Next.js, React, Tailwind CSS, Email automation, Payment gateways, Analytics

**Preço indicativo:** R$ 1.500 - R$ 5.000 (sob orçamento)

**Casos de uso:**
- Lançamento de novo produto/serviço
- Captação de leads para consultorias
- Vendas de infoprodutos
- Campanhas sazonais

---

### 2️⃣ PAINÉIS ADMINISTRATIVOS (DASHBOARDS)

**O que é:**
Painel completo para gerenciar operações, visualizar métricas em tempo real e tomar decisões baseadas em dados.

**Sub-serviços:**
- [ ] **Dashboard Simples** - 3-5 gráficos, tabelas básicas (10-14 dias)
- [ ] **Dashboard Avançado** - 8+ gráficos, filtros, relatórios, export de dados (15-21 dias)
- [ ] **CRM (Customer Relationship)** - Gestão de clientes, vendas, follow-ups (20-30 dias)
- [ ] **Analytics em Tempo Real** - Monitoramento de eventos, comportamento, performance (20-25 dias)
- [ ] **ERP Simples** - Gestão de estoque, vendas, notas (25-35 dias)
- [ ] **Relatórios Automáticos** - Geração e envio de reports por email/PDF (10-15 dias)

**Tecnologias:**
Next.js, React, Recharts/Chart.js, Supabase, PostgreSQL, Real-time updates, Email automation

**Preço indicativo:** R$ 5.000 - R$ 20.000 (sob orçamento)

**Casos de uso:**
- Acompanhamento de KPIs e métricas
- Gestão de equipes e tarefas
- Monitoramento de vendas
- Análise de dados de negócio

---

### 3️⃣ SISTEMAS WEB SOB DEMANDA

**O que é:**
Solução custom construída especificamente para suas necessidades. Pode ser MVP rápido ou plataforma completa escalável.

**Sub-serviços:**
- [ ] **Plataforma de Cursos/Membros** - Área de alunos, acesso a conteúdo, certificados (20-30 dias)
- [ ] **Marketplace/E-commerce Avançado** - Catálogo, carrinho, pagamentos, shipping (25-40 dias)
- [ ] **Agendamento/Booking Online** - Calendário, confirmação automática, notificações (15-20 dias)
- [ ] **Sistema de Gestão Interna** - Workflow, aprovações, automação (20-30 dias)
- [ ] **Plataforma SaaS (MVP)** - Produto multi-tenant, subscrição mensal (30-60 dias)
- [ ] **API + Integração de Serviços** - Conectar sistemas, integrações complexas (10-20 dias)
- [ ] **Automação de Processos** - RPA, webhooks, integrações (10-25 dias)

**Tecnologias:**
Next.js, React, Node.js, PostgreSQL, Supabase, APIs externas (Stripe, Pipedrive, Zapier, etc), Real-time updates

**Preço indicativo:** R$ 8.000 - R$ 50.000+ (sob orçamento)

**Casos de uso:**
- MVP para startup
- Sistema internal para empresa
- Novo produto de software
- Automação de operações

---

## 8. DEPOIMENTOS FICTÍCIOS REALISTAS

Vamos criar 3 depoimentos realisticos que soam autênticos:

### Depoimento 1

```
Avatar: [Foto genérica profissional mulher 40-50 anos]
Nome: Marina Oliveira
Empresa: Studio Marina Beleza (pequena empresa)
Cargo: Proprietária

"Não sou tech-savvy, mas o Diego entendeu perfeitamente 
minha necessidade de um sistema de agendamento. Ele explicou 
tudo em linguagem simples, criou um protótipo que eu pude 
testar, e o resultado final é exatamente o que precisava. 
Minha agenda agora é gerenciada automaticamente, meus clientes 
podem agendar 24h por dia, e economizo 5 horas/semana. Recomendo!"

★★★★★
Resultado: +30% de clientes agendados online
```

### Depoimento 2

```
Avatar: [Foto genérica profissional homem 35-45 anos]
Nome: Carlos Mendes
Empresa: ConsultERP (consultoria média)
Cargo: Diretor de Operações

"Procurávamos um painel administrativo que consolidasse dados 
de múltiplas fontes. O Diego não só entregou um dashboard 
funcionando perfeitamente, como implementou integrações complexas 
que ninguém conseguiu antes. O suporte após deploy foi excelente, 
e o sistema escala com nosso crescimento. Investimento que trouxe 
ROI em 3 meses."

★★★★★
Resultado: -40% no tempo de análise de dados
```

### Depoimento 3

```
Avatar: [Foto genérica profissional mulher 30-40 anos]
Nome: Beatriz Santos
Empresa: EduSpace (startup de educação)
Cargo: Co-founder & CEO

"Diego foi fundamental no MVP da nossa plataforma de cursos. 
Ele sugeriu otimizações técnicas que economizaram 20% dos custos 
de infraestrutura. O conhecimento dele em data engineering foi 
crucial para modelar nosso banco de dados corretamente desde o 
início. Agora estamos escalando com confiança."

★★★★★
Resultado: Plataforma suportando 5.000+ alunos
```

**Formato JSON para código:**
```javascript
// src/data/testimonials.ts
export const testimonials = [
  {
    id: 1,
    name: "Marina Oliveira",
    role: "Proprietária",
    company: "Studio Marina Beleza",
    image: "/images/testimonials/marina.jpg",
    text: "Não sou tech-savvy, mas...",
    rating: 5,
    result: "+30% de clientes agendados online",
  },
  // ... mais 2
]
```

---

## 9. CONFIGURAÇÕES NEXT.JS

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: ["vercel.com", "placeholder.com"], // Adicionar domínios de imagens
  },
  // Headers para SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  // Redirects (se necessário)
  async redirects() {
    return [
      {
        source: "/me",
        destination: "/sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3a52",
        accent: "#F59E0B",
        secondary: "#2D3748",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};

export default config;
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForModule": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "outDir": "./.next",
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### .env.local (NÃO COMMITAR)
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Supabase (optional, para forms)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Email (para forms)
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=

# Contato
NEXT_PUBLIC_WHATSAPP_NUMBER=+5511964197606
NEXT_PUBLIC_EMAIL=diego.candido.pro@gmail.com
```

---

## 10. CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Setup & Estrutura (1-2 dias)

- [ ] Criar projeto Next.js com TypeScript
- [ ] Configurar Tailwind CSS
- [ ] Criar estrutura de pastas
- [ ] Configurar imports com alias (@/)
- [ ] Setup de variáveis de ambiente
- [ ] Criar arquivo constants/lib para cores, textos
- [ ] Configurar fonte Google Fonts

### Fase 2: Layout & Componentes Base (2-3 dias)

- [ ] Criar Navbar com logo, links, theme toggle
- [ ] Criar Footer completo
- [ ] Criar Button component (variações)
- [ ] Criar Card component
- [ ] Criar Badge/Tag components
- [ ] Criar Layout raiz (layout.tsx)
- [ ] Implementar dark/light mode com localStorage

### Fase 3: Home Page Sections (4-5 dias)

- [ ] Hero section (com animação)
- [ ] About section (com foto placeholder)
- [ ] Services section (com 3 cards expansíveis)
- [ ] Portfolio section (com AgendaCliente featured)
- [ ] Process section (4 etapas detalhadas)
- [ ] Testimonials section (carousel 3 depoimentos)
- [ ] CTA final
- [ ] Scroll reveal animations

### Fase 4: Pages Adicionais (2-3 dias)

- [ ] Página /servicos (detalhada com sub-categorias)
- [ ] Página /portfolio (lista completa de projetos)
- [ ] Página /sobre (bio completa, skills expandidos)
- [ ] Página /contato (form + mapa)
- [ ] Página /orcamento (quick quote form)
- [ ] Página 404 customizada

### Fase 5: Forms & Integração (2-3 dias)

- [ ] Criar componente ContactForm
- [ ] Criar componente QuoteForm
- [ ] Integração com Supabase/API para salvar forms
- [ ] Confirmação de envio
- [ ] Validação de dados

### Fase 6: SEO & Performance (1-2 dias)

- [ ] Criar sitemap.ts
- [ ] Adicionar meta tags (título, descrição, og:image)
- [ ] Open Graph tags para redes sociais
- [ ] Favicon
- [ ] robots.txt
- [ ] Otimizar imagens (next/image)
- [ ] Minificar CSS/JS
- [ ] Lazy load componentes

### Fase 7: Deploy & Testes (1 dia)

- [ ] Testar localmente (npm run dev)
- [ ] Build production (npm run build)
- [ ] Testar build localmente (npm start)
- [ ] Deploy no Vercel
- [ ] Configurar domínio DSCS.com.br (via Hostinger)
- [ ] Testes de responsividade (mobile, tablet, desktop)
- [ ] Testes de navegadores (Chrome, Firefox, Safari, Edge)

### Fase 8: Pós-lançamento (Ongoing)

- [ ] Monitorar analytics (Google Analytics)
- [ ] Ajustes de performance
- [ ] Feedback de usuários
- [ ] Adição de novos projetos ao portfolio
- [ ] Blog/artigos (opcional, fase 2)

---

## 11. TIMELINE ESTIMADA

```
SEMANA 1
├─ [Dia 1-2] Setup, estrutura, componentes base
├─ [Dia 3-4] Hero, About, serviços
└─ [Dia 5] Process, testimonials, CTA

SEMANA 2
├─ [Dia 1-2] Páginas adicionais (servicos, portfolio, sobre, contato)
├─ [Dia 3-4] Forms, integração, validações
└─ [Dia 5] SEO, imagens, otimizações

SEMANA 3
├─ [Dia 1-2] Testes, ajustes, responsividade
├─ [Dia 3] Deploy Vercel
└─ [Dia 4-5] Domínio, configuração final, lançamento

TOTAL: ~2-3 semanas de desenvolvimento
```

**Timeline ajustado se você fornecer:**
- Foto profissional: -1 dia
- Screenshots AgendaCliente: -0.5 dias
- Textos customizados: -0.5 dias

---

## 🎯 CHECKLIST PRÉ-CÓDIGO

Antes de começar a codificar, você precisará fornecer:

- [ ] Foto profissional (PNG/JPG, min 400x400px)
- [ ] Screenshot AgendaCliente (da homepage ou dashboard)
- [ ] Favicon (preferível SVG ou PNG 512x512)
- [ ] Links confirmados:
  - [ ] WhatsApp: +55 11 964197606
  - [ ] Email: diego.candido.pro@gmail.com
  - [ ] LinkedIn: https://www.linkedin.com/in/diego-candido-8b0850222/
  - [ ] GitHub: https://github.com/diegoscs
- [ ] Domínio Hostinger: www.dscs.com.br (configurado)
- [ ] Conta Vercel: https://vercel.com (logado)
- [ ] Google Fonts API Key (opcional, para analytics)

---

## 📞 PRÓXIMAS AÇÕES

1. **Você fornece os assets** (foto, screenshots, links)
2. **Eu inicio o projeto** Next.js com setup completo
3. **Você valida estrutura** (antes de componentes)
4. **Desenvolvimento iterativo** com previews semanais
5. **Deploy no Vercel** + domínio configurado

---

**Versão:** 1.0  
**Última atualização:** Março 2026  
**Status:** ✅ Pronto para desenvolvimento
