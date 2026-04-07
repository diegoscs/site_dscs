import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Services from "@/components/sections/Services";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <div className="h-64 bg-[var(--color-bg-secondary)]" /> }
);

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
