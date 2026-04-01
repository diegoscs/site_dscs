import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import FeatureDetail from "@/components/sections/FeatureDetail";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <Features />
      <Services />
      <FeatureDetail />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  );
}
