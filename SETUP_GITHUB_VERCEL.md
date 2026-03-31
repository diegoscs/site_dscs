# 🚀 Setup GitHub & Vercel

## Passo 1: Criar Repositório no GitHub

1. Acesse [https://github.com/new](https://github.com/new)
2. Preencha os dados:
   - **Repository name**: `site_dscs` ou `dscs-website`
   - **Description**: "Site profissional de Diego Candido - Full Stack Developer"
   - **Visibility**: Public (recomendado para portfólio)
   - **Initialize repository**: NÃO selecione (já temos git local)
3. Clique em "Create repository"

## Passo 2: Conectar Git Local ao GitHub

```bash
# Substitua <seu-username> pelo seu username do GitHub
git remote add origin https://github.com/<seu-username>/site_dscs.git
git branch -M main
git push -u origin main
```

Exemplo:
```bash
git remote add origin https://github.com/diego-candido/site_dscs.git
git branch -M main
git push -u origin main
```

## Passo 3: Deploy no Vercel

### Opção A: Via Dashboard Vercel (Recomendado)

1. Acesse [https://vercel.com/new](https://vercel.com/new)
2. Clique em "Import Git Repository"
3. Cole a URL do seu repositório GitHub
4. Clique em "Import"
5. Configure:
   - **Framework**: Next.js
   - **Build Command**: `npm run build` (padrão)
   - **Install Command**: `npm install` (padrão)
   - **Output Directory**: `.next` (padrão)
6. Clique em "Deploy"

### Opção B: Via CLI (Mais rápido)

```bash
# Instale Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## Domínio Provisório

Depois do deploy, você terá um domínio temporário:
- `site-dscs.vercel.app` (exemplo)

Para usar seu domínio customizado `dscs.com.br` depois, siga:
1. Vá para Settings do projeto no Vercel
2. Clique em "Domains"
3. Adicione `dscs.com.br` e `www.dscs.com.br`
4. Aponte os DNS da Hostinger para Vercel

## Variáveis de Ambiente

Você pode adicionar variáveis em:

```bash
# .env.local (desenvolvimento local)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Vercel Dashboard > Settings > Environment Variables
NEXT_PUBLIC_APP_URL=https://site_dscs.vercel.app
```

## Próximos Passos

Após o deploy:

1. ✅ Testar o site em produção
2. 📝 Atualizar links de contato (WhatsApp, email, etc.)
3. 🎨 Adicionar mais componentes (Services, Portfolio, etc.)
4. 📸 Adicionar suas fotos/projetos
5. 🔍 Configurar SEO e Analytics

---

**Precisa de ajuda?** Verifique:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Vercel](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)
