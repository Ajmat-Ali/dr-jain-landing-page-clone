import React from 'react';
import { Divider } from './Divider';
import { APPOINTMENT_URL } from '../data/siteData';

interface WhatWeHelpSectionProps {
  onBookClick?: () => void;
}

export const WhatWeHelpSection: React.FC<WhatWeHelpSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-what-we-help" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 9: Title */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">What We Can</span> Help You With
        </h2>

        <Divider />

        {/* Section 10: Infographic Image */}
        <div className="max-w-[722px] mx-auto my-6 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Untitled-design-6.png"
            alt="What We Can Help You With - Ask Dr Jain"
            className="w-full h-auto rounded-[17px] shadow-sm object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 11: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-take-charge-1"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            YES! I WANT TO TAKE CHARGE OF MY S.e.xual HEALTH
          </a>
        </div>
      </div>
    </section>
  );
};
