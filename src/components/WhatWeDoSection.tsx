// src/components/Home/WhatWeDoSection.tsx
import Image from 'next/image';

const WhatWeDoSection = () => {
  // Array of client logos (replace src with your actual paths from public/images/client-logos/)
  const clientLogos = [
    { src: '/images/home-page/logo-adidas.png', alt: 'Adidas Logo' },
    { src: '/images/home-page/logo-chanel.png', alt: 'Chanel Logo' },
    { src: '/images/home-page/logo-apple.png', alt: 'Apple Logo' },
    { src: '/images/home-page/logo-autodesk.png', alt: 'Autodesk-like Logo' }, // Name adjusted for clarity
    { src: '/images/home-page/logo-hexagons.png', alt: 'Hexagons Logo' },
    { src: '/images/home-page/logo-clean-lines.png', alt: 'Clean Lines-like Logo' }, // Name adjusted for clarity
    { src: '/images/home-page/logo-fbc.png', alt: 'FBC Logo' },
  ];

  return (
    <section className="bg-[#0a0a0a] text-[#ededed] py-16 lg:py-24 px-4">
      <div className="container mx-auto"> {/* Uses the global 1280px container width */}

        {/* Client Logos Row */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-12 mb-16 lg:mb-24">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60} // Base width for mobile
                height={60} // Base height for mobile
                className="w-[60px] h-[60px] lg:w-[78px] lg:h-[78px] object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Main Text Content */}
        <div className="flex justify-center lg:justify-start">
          <p className="
              font-[var(--font-dm-sans)] font-medium leading-relaxed text-[#ededed]
              text-[16px] leading-[2.10] max-w-[349px] mx-auto // Mobile styles: w-349, h-408 (height will adjust), line height-210%, size 16
              lg:text-[23px] lg:leading-[2.10] lg:max-w-[842px] lg:mx-0 // Desktop styles: w-842, h-336 (height will adjust), line height-210%, size 23
          ">
            <span className="text-green-500 font-bold">Puggle IT</span> Empowers Institutions And Individuals Alike With Innovative Technology Designed For Impact. Whether It&apos;s Helping Schools Deliver Better Education, Enabling Hospitals To Provide Efficient Healthcare, Giving Businesses Tools To Scale, Or Helping Farmers Access Credit. Our Platforms Are Built To Solve Real-World Problems. Beyond Software, We Invest In People &mdash; Offering Training, Mentorship, And Career Pathways For Students, Job Seekers, And Future Tech Leaders Globally.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;