# 🚀 Guia de Otimização PageSpeed

## Resultado Atual
- **Performance**: 41 (🔴 Crítico)
- **LCP**: 3.1s (ideal: <2.5s)
- **INP**: 423ms (ideal: <200ms)
- **CLS**: 0 (✅ Perfeito)

---

## 🔴 CRÍTICO - Tarefas Imediatas

### 1. Lazy Load dos Componentes Pesados
**Problema**: Componentes carregam na página inicial desnecessariamente.

**Solução**: Usar `dynamic()` do Next.js para lazy load.

**Antes**:
```typescript
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials /> {/* Carrega sempre */}
    </>
  );
}
```

**Depois**:
```typescript
import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <div className="h-64" /> }
);

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials /> {/* Lazy load quando scroll */}
    </>
  );
}
```

**Impacto**: -2.7s no tempo de execução de JS

---

### 2. Remover/Otimizar Bibliotecas Não Usadas

**Verificar bundle**:
```bash
npm install --save-dev @next/bundle-analyzer
```

Adicionar a `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig);
```

Rodar:
```bash
ANALYZE=true npm run build
```

Isso gera um relatório visual de todos os arquivos JS.

**Impacto**: -1.280 KiB em JS não utilizado

---

### 3. Renderizar Solicitações de Bloqueio

**Problema**: CSS crítica está sendo carregada de forma síncrona.

**Solução**: Mover CSS não-crítica para lazy load.

Em `src/styles/globals.css`, separar:
- **CSS crítico** (above the fold): mantém inline
- **CSS não-crítico** (below the fold): async

**Exemplo**:
```css
/* globals.css - CRÍTICO */
:root { /* cores, fontes base */ }
body { /* espaçamento base */ }

/* Depois carrega async: */
@media print { /* estilos de print */ }
```

**Impacto**: -1.350ms

---

## 🟠 IMPORTANTE - Tarefas Secundárias

### 4. Otimizar Imagens

**Verificar**:
```bash
# Qual peso de imagens está sendo enviado?
npm run build
# Vê em .next/static/media
```

**Otimizações**:
- ✅ Já está usando AVIF + WebP (bom!)
- Próximo: usar `Next/Image` com `placeholder="blur"`

**Exemplo**:
```typescript
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  placeholder="blur"
  blurDataURL="data:image/..." 
/>
```

**Impacto**: -500ms a -1s

---

### 5. Evitar Payloads de Rede Muito Grandes

**Atual**: 5.614 KiB total

**Reduzir**:
- [ ] Remover fontes web não utilizadas
- [ ] Usar system fonts em vez de fonts customizadas
- [ ] Comprimir SVGs
- [ ] Lazy load de scripts de terceiros

**Exemplo (Google Fonts)**:
```css
/* Menos é mais */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
/* Remover font-weight desnecessários */
```

**Impacto**: -500 KiB a -1 MiB

---

## ✅ Checklist de Otimização

| Tarefa | Impacto | Tempo | Status |
|--------|---------|-------|--------|
| Lazy load Testimonials | 2.7s | 5 min | ⬜ |
| Analisar bundle | 1.3 KiB | 10 min | ⬜ |
| Mover CSS crítico | 1.35s | 15 min | ⬜ |
| Otimizar imagens | 1s | 10 min | ⬜ |
| Lazy load scripts 3rd party | 500ms | 10 min | ⬜ |
| **TOTAL** | **~6.9s** | **50 min** | ⬜ |

---

## 📈 Resultado Esperado

**Depois das otimizações:**
- ✅ Performance: 70+ (de 41)
- ✅ LCP: <2.5s (de 3.1s)
- ✅ INP: <200ms (de 423ms)

---

## 🛠️ Próximos Passos

1. **Agora**: Fazer lazy load do componente Testimonials
2. **Depois**: Analisar bundle com @next/bundle-analyzer
3. **Depois**: Otimizar CSS crítico
4. **Depois**: Re-testar no PageSpeed

---

**Quer que eu implemente essas otimizações?** 🚀
