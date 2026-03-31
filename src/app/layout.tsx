import type { Metadata } from "next";
import "@/styles/globals.css";

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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f1419" />
      </head>
      <body className="bg-bg-dark text-text-dark">{children}</body>
    </html>
  );
}
