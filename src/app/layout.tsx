import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Diego Candido | Full Stack Developer",
  description:
    "Transformo ideias em sistemas escaláveis. Full Stack Developer especializado em soluções web modernas, painéis administrativos e plataformas data-driven.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, Web Development, São Paulo",
  authors: [{ name: "Diego Candido", url: "https://dscs.com.br" }],
  creator: "Diego Candido",
  metadataBase: new URL("https://dscs.com.br"),
  openGraph: {
    title: "Diego Candido | Full Stack Developer",
    description: "Transformo ideias em sistemas escaláveis",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f1419" />
        <style>{`
          .skip-to-content {
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
            font-weight: 600;
            font-size: 0.875rem;
          }
          .skip-to-content:focus {
            top: 0;
          }
        `}</style>
      </head>
      <body className="bg-bg-dark text-text-dark flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Diego Candido",
              url: "https://dscs.com.br",
              jobTitle: "Full Stack Developer & Data Engineer",
              email: "diego.candido.pro@gmail.com",
              sameAs: [
                "https://github.com/diegoscs",
                "https://www.linkedin.com/in/diego-candido-8b0850222/",
              ],
              knowsAbout: [
                "Next.js", "React", "Node.js", "TypeScript",
                "Python", "PostgreSQL", "Data Engineering",
                "Docker", "Kubernetes",
              ],
              offers: {
                "@type": "Offer",
                url: "https://dscs.com.br/orcamento",
                description: "Desenvolvimento de software sob medida",
              },
            }),
          }}
        />
        <a href="#conteudo-principal" className="skip-to-content">Pular para o conteúdo principal</a>
        <Navbar />
        <main id="conteudo-principal" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
