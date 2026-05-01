#!/usr/bin/env node

const https = require('https');

// Lê a API key do .env.local
require('dotenv').config();
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error('❌ RESEND_API_KEY não encontrada em .env.local');
  process.exit(1);
}

const testData = {
  from: 'noreply@dscs.pro <noreply@dscs.pro>',
  to: 'dscs.pro.contato@gmail.com',
  subject: 'Teste - Sistema de Orçamento DSCS',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2>Teste de Email - Sistema de Orçamento</h2>
      <p>Se você está vendo este email, o Resend foi configurado com sucesso! ✅</p>
      <p><strong>Email:</strong> dscs.pro.contato@gmail.com</p>
      <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">Este é um teste automático do sistema de orçamento DSCS.</p>
    </div>
  `,
};

const options = {
  hostname: 'api.resend.com',
  path: '/emails',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      if (res.statusCode === 200) {
        console.log('✅ Email enviado com sucesso!');
        console.log(`   ID: ${response.id}`);
        console.log(`   Para: ${testData.to}`);
        console.log('\n📧 Verifique seu inbox em alguns segundos!');
      } else {
        console.error('❌ Erro ao enviar email:');
        console.error(response);
      }
    } catch (e) {
      console.error('❌ Erro ao processar resposta:', e);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Erro de conexão:', e.message);
});

req.write(JSON.stringify(testData));
req.end();
