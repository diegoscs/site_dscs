import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  );
}
