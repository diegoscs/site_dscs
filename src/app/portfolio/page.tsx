import type { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Candido Digital",
  description:
    "Projetos de desenvolvimento web, engenharia de dados e sistemas escaláveis. Full Stack Developer & Data Engineer baseado no Brasil.",
  openGraph: {
    title: "Portfolio | Candido Digital",
    description:
      "Projetos de desenvolvimento web, engenharia de dados e sistemas escaláveis.",
    images: [
      {
        url: new URL("/api/og?title=Portfolio&description=Projetos web, data engineering e sistemas escaláveis&category=Projetos", "https://candidodigital.com.br").toString(),
        width: 1200,
        height: 630,
        alt: "Portfolio - Candido Digital",
      },
    ],
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
