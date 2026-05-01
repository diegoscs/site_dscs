# 🚀 Setup Resend - Guia Completo

## Passo 1: Criar conta no Resend

1. Acesse: **https://resend.com**
2. Clique em **"Sign up"** (canto superior direito)
3. Preencha:
   - Email: `dscs.pro.contato@gmail.com`
   - Password: (escolha uma forte)
4. Confirme o email que Resend vai enviar

## Passo 2: Gerar API Key

Depois de confirmado:

1. Vá para o **Dashboard**
2. Clique em **"Settings"** (ícone de engrenagem, canto inferior esquerdo)
3. Clique em **"API Keys"**
4. Clique no botão **"Create API Key"**
5. Configure:
   - Name: `Production` ou `Testing`
   - Environment: `Production`
6. Clique em **"Create"**
7. **COPIE a chave gerada** (algo como `re_xxxxxxxxxxxxx`)

⚠️ **Importante:** Guarde bem essa chave! Você não poderá vê-la novamente.

## Passo 3: Adicionar ao .env.local

Abra o arquivo `.env.local` na raiz do projeto:

```bash
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx  # ← Cole sua chave aqui

# Sua API URLs irão aqui quando necessário
# NEXT_PUBLIC_API_URL=

# Private environment variables
# API_SECRET=
```

Substitua `re_xxxxxxxxxxxxx` pela sua chave real.

## Passo 4: Testar o Email

Abra o terminal na raiz do projeto e execute:

```bash
npm run test:email
```

**Resultado esperado:**
```
✅ Email enviado com sucesso!
   ID: 1234567890abcdef
   Para: dscs.pro.contato@gmail.com

📧 Verifique seu inbox em alguns segundos!
```

Se receber o email em **dscs.pro.contato@gmail.com**, significa que tudo está funcionando! ✅

## Passo 5: Testar o Formulário no Site

Agora que o email está configurado, você pode testar o formulário completo:

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: **http://localhost:3000/orcamento**

3. Preencha o formulário completo

4. Clique em **"Enviar Solicitação"**

5. Você deve receber um email formatado em **dscs.pro.contato@gmail.com**

## Próximos Passos

- [ ] Testar email com sucesso
- [ ] Testar formulário completo
- [ ] Fazer deploy na Vercel
- [ ] Configurar domain dscs.com.br

---

**Dúvidas?**
- Docs do Resend: https://resend.com/docs
- Status: https://status.resend.com
