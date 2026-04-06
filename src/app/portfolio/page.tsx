import type { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Diego Candido",
  description:
    "Projetos de desenvolvimento web, engenharia de dados e sistemas escaláveis. Full Stack Developer & Data Engineer baseado no Brasil.",
  openGraph: {
    title: "Portfolio | Diego Candido",
    description:
      "Projetos de desenvolvimento web, engenharia de dados e sistemas escaláveis.",
    images: [
      {
        url: "https://dscs.com.br/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio - Diego Candido",
      },
    ],
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
