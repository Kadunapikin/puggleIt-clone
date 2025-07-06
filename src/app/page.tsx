// src/app/page.tsx

import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <HeroSection />
      <WhatWeDoSection />

      {/* Placeholder for now */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Homepage Content Coming Soon!</h2>
        <p className="text-lg mt-4">We'll build this section by section.</p>
      </section>
    </main>
  );
}