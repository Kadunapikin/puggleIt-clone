// src/components/Home/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-[#ededed] py-20 lg:py-32 px-4 overflow-hidden">
      {/* Background shapes/graphics - placeholder, you might need SVG/PNG images for these */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {/* Placeholder for background patterns from Figma */}
        {/* You'd use Image components here for specific background elements */}
        {/* Example:
        <Image src="/images/hero-bg-pattern-top.svg" alt="Background pattern" layout="fill" objectFit="cover" />
        */}
      </div>

      <div className="container mx-auto relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content Area */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              TRANSFORMING IDEAS INTO{' '}
              <span className="text-green-500 block lg:inline">SMART, SCALABLE</span> DIGITAL SOLUTIONS
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed animate-fade-in-up delay-200">
              We leverage cutting-edge technology and innovative strategies to craft exceptional digital experiences that drive growth.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up delay-400">
              <Link href="/services">
                <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic Area */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Placeholder for the main hero image/graphic.
                Based on the screenshot, it looks like a complex illustration or a 3D render.
                You'll need to export this from Figma.
            */}
            <Image
              src="/images/hero-main-graphic.png" // Replace with your actual hero graphic path
              alt="Digital Solutions Illustration"
              width={600} // Adjust based on your graphic's aspect ratio
              height={400} // Adjust based on your graphic's aspect ratio
              priority // For images in the first viewport
              className="max-w-full h-auto animate-fade-in"
            />
          </div>
        </div>

        {/* Small feature icons below the main hero - based on the screenshot */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm items-center">
          <div className="flex flex-col items-center">
            <Image src="/images/icon-web-dev.svg" alt="Web Development Icon" width={60} height={60} className="mb-2" />
            <p className="font-semibold text-white">Web Development</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/icon-app-dev.svg" alt="App Development Icon" width={60} height={60} className="mb-2" />
            <p className="font-semibold text-white">App Development</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/icon-ui-ux.svg" alt="UI/UX Design Icon" width={60} height={60} className="mb-2" />
            <p className="font-semibold text-white">UI/UX Design</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/icon-marketing.svg" alt="Digital Marketing Icon" width={60} height={60} className="mb-2" />
            <p className="font-semibold text-white">Digital Marketing</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;