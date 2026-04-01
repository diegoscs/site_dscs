import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Features from "@/components/sections/Features";
import FeatureDetail from "@/components/sections/FeatureDetail";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <Features />
      <FeatureDetail />
      <CTA />
    </div>
  );
}
