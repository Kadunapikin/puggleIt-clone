// src/app/page.tsx

// Import components as we create them
// import HeroSection from '../components/Home/HeroSection';
// import AboutUsSection from '../components/Home/AboutUsSection';
// import RecentWorksSection from '../components/Home/RecentWorksSection';
// import ServicesOverview from '../components/Home/ServicesOverview';
// import Testimonials from '../components/Home/Testimonials';
// import CallToActionSection from '../components/Home/CallToActionSection';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Each section will be a component imported here */}
      {/* <HeroSection /> */}
      {/* <AboutUsSection /> */}
      {/* <RecentWorksSection /> */}
      {/* <ServicesOverview /> */}
      {/* <Testimonials /> */}
      {/* <CallToActionSection /> */}

      {/* Placeholder for now */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Homepage Content Coming Soon!</h2>
        <p className="text-lg mt-4">We'll build this section by section.</p>
      </section>
    </main>
  );
}