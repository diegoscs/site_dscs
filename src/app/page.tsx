import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <Services />
      <Testimonials />
    </div>
  );
}
