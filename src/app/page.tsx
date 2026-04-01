import Hero from "@/components/sections/Hero";
import FeatureStatement from "@/components/sections/FeatureStatement";
import FeatureCards from "@/components/sections/FeatureCards";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStatement />
      <FeatureCards />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}
