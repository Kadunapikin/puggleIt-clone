// src/app/page.tsx

import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] space-y-16 lg:space-y-24">
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />

      {/* Placeholder for now */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Homepage Content Coming Soon!</h2>
        <p className="text-lg mt-4">We'll build this section by section.</p>
      </section>
    </main>
  );
}