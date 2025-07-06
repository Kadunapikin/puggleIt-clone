// src/components/Home/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Section Container: Ensure dark background, min height, centered content
    <section className="relative bg-[#0a0a0a] text-[#ededed] py-18 lg:py-26 px-4 overflow-hidden min-h-[583px] flex items-center justify-center">

      {/* Background pattern 1 (Top Right Scribble) */}
      <div className="absolute right-0 top-0 z-0 opacity-10"
           style={{ transform: 'translateX(14px)' }}
      >
        <Image
          src="/images/home-page/hero-bg-scribble-top.png" // Path to your top scribble image
          alt="Abstract background pattern top"
          width={651}
          height={191}
          quality={100}
          priority
          className="object-contain"
        />
      </div>

      {/* Background pattern 2 (Bottom Right Scribble) */}
      <div className="absolute right-0 top-[305px] z-0 opacity-10">
        <Image
          src="/images/home-page/hero-bg-scribble-bottom.png" // Path to your bottom scribble image
          alt="Abstract background pattern bottom"
          width={665}
          height={278}
          quality={100}
          priority
          className="object-contain"
        />
      </div>

      {/* Content Wrapper: Now just use 'container' to apply the 1280px max-width */}
      <div className="container relative z-10 text-center lg:text-left">
        {/*
           Removed 'mx-auto' and 'px-4' from this div, as 'container' with `center: true` and `padding` in config
           will handle it. The individual h1/p max-widths (max-w-[347px] / lg:max-w-[990px] etc.) are still needed
           to control their specific content wrapping.
        */}
        {/* Main Heading with Gradient Text */}
        <h1 className="
            font-[var(--font-holtwood-one-sc)] font-extrabold mb-6 animate-fade-in-up
            text-[28px] leading-[1.37] max-w-[347px] mx-auto // Mobile styles
            lg:text-[60px] lg:leading-[1.37] lg:max-w-[990px] lg:mx-0 // Desktop styles
        ">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            EMPOWERING GROWTH
          </span>{' '}
          <span className="block mt-2 sm:mt-0">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              THROUGH SCALABLE
            </span>
          </span>{' '}
          <span className="block mt-2 sm:mt-0">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              DIGITAL SOLUTIONS
            </span>
          </span>
        </h1>
        {/* Description Paragraph */}
        <p className="
            font-[var(--font-dm-sans)] font-medium leading-relaxed text-gray-300 animate-fade-in-up delay-200
            text-[12px] leading-[1.96] max-w-[348px] mx-auto // Mobile styles
            lg:text-[14px] lg:leading-[2.10] lg:max-w-[650px] lg:mx-0 // Desktop styles
        ">
          We Design Intelligent Digital Platforms That Help Schools Streamline Learning, Hospitals Manage Care Efficiently, Businesses Automate Operations, And Farmers Access Financial Tools. All While Mentoring The Next Generation Of Tech Innovators.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;