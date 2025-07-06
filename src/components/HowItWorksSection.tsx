// src/components/Home/HowItWorksSection.tsx
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      color: 'text-green-500', // Matches the screenshot (you can define custom shades in tailwind.config.mjs if needed)
      title: 'Share your Needs',
      description: `Tell Us About Your School, Hospital, Farm, Or Business. We'll Listen And Understand Your Unique Challenges And Goals. Our Team Will Work With You To Identify The Best Digital Solutions That Fit Your Needs.`,
    },
    {
      number: '2',
      color: 'text-blue-500', // Matches the screenshot
      title: 'Get The Right Solution',
      description: 'We Match You With The Right Digital Solution. Our Experts Will Develop A Tailored Strategy That Aligns With Your Objectives, Whether It’s A Custom Software Application, A Scalable Web Platform, Or An Innovative Mobile App.',
    },
    {
      number: '3',
      color: 'text-yellow-500', // Matches the screenshot
      title: 'Grow With Confidence',
      description: 'Start Using Your New Tools, Backed By Our Ongoing Support And Training. We Ensure You Have The Resources And Knowledge To Maximize The Impact Of Your Digital Solutions. As You Grow, We’re Here To Help You Scale And Adapt To New Challenges.',
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-[#ededed] py-16 lg:py-24 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Left Column: Heading and Paragraph */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="
            font-[var(--font-holtwood-one-sc)] font-normal uppercase mb-6 tracking-5p
            text-[28px] leading-[1.37] w-[246px] h-[29px] mx-auto // Mobile styles
            lg:text-[38px] lg:leading-[1.37] lg:w-[426px] lg:h-[43px] lg:mx-0 // Desktop styles
          ">
            HOW IT WORKS
          </h2>
          <p className="
            font-[var(--font-dm-sans)] font-medium text-gray-300
            text-[12px] leading-[1.83] w-[342px] h-[44px] mx-auto // Mobile styles
            lg:text-[14px] lg:leading-[1.83] lg:w-[336px] lg:h-[52px] lg:mx-0 // Desktop styles
          ">
            Smart, Scalable Tech Solutions For Schools, Hospitals, Businesses, And Farmers
          </p>
        </div>

        {/* Right Column: Numbered Steps */}
        <div className="lg:w-1/2 w-full space-y-10 lg:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Number (1, 2, 3) - MODIFIED STYLES */}
              <div className={`flex-shrink-0 ${step.color} font-bold
                          text-[94px] leading-[1] // Mobile: size 94px, line-height 1 for tight vertical spacing
                          lg:text-[94px] lg:leading-[1] // Desktop: size 94px, line-height 1
                          w-[41px] lg:w-[61px] // Apply width to the number's container for consistent spacing
                          flex items-center justify-center // Ensure number is centered if its container has specific width/height
                          `}>
                {step.number}
              </div>
              {/* Text Content for Step */}
              <div className="flex-1 pt-2"> {/* Added pt-2 to align text better with the large number */}
                <h3 className="
                  font-[var(--font-dm-sans)] font-bold mb-2
                  text-[18px] leading-[1.83] // Mobile styles
                  lg:text-[22px] lg:leading-[1.83] // Desktop styles
                ">
                  {step.title}
                </h3>
                <p className="
                  font-[var(--font-dm-sans)] font-medium text-gray-300
                  text-[12px] leading-[2.10] // Mobile styles
                  lg:text-[14px] lg:leading-[2.10] // Desktop styles
                ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;