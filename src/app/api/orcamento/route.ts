import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { objetivo, servico, recursos, descricao, prazo, temDesign, referencias, nome, whatsapp, email, empresa, contato } = body;

    // Validação básica
    if (!nome || !whatsapp || !email) {
      return NextResponse.json(
        { error: 'Dados obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Mapear os valores com labels
    const objetivos = [
      { id: "lancar-produto", label: "Lançar produto digital" },
      { id: "escalar-negocio", label: "Escalar negócio existente" },
      { id: "automatizar", label: "Automatizar processos" },
      { id: "dados", label: "Analisar e usar dados" },
      { id: "modernizar", label: "Modernizar sistema" },
      { id: "consultoria", label: "Consultoria técnica" },
    ];

    const servicos = [
      { id: "landing", label: "Landing Page" },
      { id: "site", label: "Site Completo" },
      { id: "sistema", label: "Sistema Web / App" },
      { id: "painel", label: "Painel / Dashboard" },
      { id: "automacao", label: "Automação" },
      { id: "engdados", label: "Engenharia de Dados" },
    ];

    const prazos = [
      { id: "urgente", label: "Urgente (até 4 semanas)" },
      { id: "normal", label: "Normal (1–3 meses)" },
      { id: "tranquilo", label: "Tranquilo (3–6 meses)" },
      { id: "flexivel", label: "Flexível (sem prazo definido)" },
    ];

    const designStatuses = [
      { id: "nao-tenho", label: "Não tenho design" },
      { id: "tenho-referencia", label: "Tenho referências" },
      { id: "tenho-wireframe", label: "Tenho wireframe" },
      { id: "design-pronto", label: "Design pronto" },
    ];

    const objetivoLabel = objetivos.find((o) => o.id === objetivo)?.label ?? objetivo;
    const servicoLabel = servicos.find((s) => s.id === servico)?.label ?? servico;
    const prazoLabel = prazos.find((p) => p.id === prazo)?.label ?? prazo;
    const designLabel = designStatuses.find((d) => d.id === temDesign)?.label ?? temDesign;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fff; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: bold; color: #000; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; }
            .section-content { background: #fff; padding: 15px; border-radius: 5px; border-left: 3px solid #007AFF; }
            .contact-info { background: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 20px; }
            .contact-item { margin: 8px 0; }
            .label { font-weight: bold; color: #666; font-size: 12px; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">Nova Solicitação de Orçamento</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">dscs.pro</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Detalhes do Projeto</div>
                <div class="section-content">
                  <div class="contact-item">
                    <span class="label">Objetivo:</span>
                    <span class="value">${objetivoLabel}</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Serviço:</span>
                    <span class="value">${servicoLabel}</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Prazo:</span>
                    <span class="value">${prazoLabel}</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Status do Design:</span>
                    <span class="value">${designLabel}</span>
                  </div>
                  ${recursos.length > 0 ? `
                    <div class="contact-item">
                      <span class="label">Recursos Extra:</span>
                      <span class="value">${recursos.join(', ')}</span>
                    </div>
                  ` : ''}
                </div>
              </div>

              ${descricao ? `
                <div class="section">
                  <div class="section-title">Descrição do Projeto</div>
                  <div class="section-content">
                    ${descricao.replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}

              ${referencias ? `
                <div class="section">
                  <div class="section-title">Referências</div>
                  <div class="section-content">
                    ${referencias}
                  </div>
                </div>
              ` : ''}

              <div class="section">
                <div class="section-title">Dados de Contato</div>
                <div class="contact-info">
                  <div class="contact-item">
                    <span class="label">Nome:</span>
                    <span class="value">${nome}</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Email:</span>
                    <span class="value">${email}</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">WhatsApp:</span>
                    <span class="value">${whatsapp}</span>
                  </div>
                  ${empresa ? `
                    <div class="contact-item">
                      <span class="label">Empresa:</span>
                      <span class="value">${empresa}</span>
                    </div>
                  ` : ''}
                  <div class="contact-item">
                    <span class="label">Preferência de Contato:</span>
                    <span class="value">${contato}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email
    const result = await resend.emails.send({
      from: 'noreply@dscs.pro <noreply@dscs.pro>',
      to: 'dscs.pro.contato@gmail.com',
      replyTo: email,
      subject: `Nova Solicitação de Orçamento - ${nome}`,
      html: htmlContent,
    });

    if (result.error) {
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    );
  }
}
