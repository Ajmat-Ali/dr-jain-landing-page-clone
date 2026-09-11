import React from 'react';
import { Divider } from './Divider';
import { APPOINTMENT_URL } from '../data/siteData';

interface OutcomesSectionProps {
  onBookClick?: () => void;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-outcomes" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 24: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Our</span> Outcomes
        </h2>

        <Divider />

        {/* Section 25: Outcomes Infographic */}
        <div className="max-w-[627px] mx-auto my-6 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Untitled-502-x-521-px-502-x-437-px.png"
            alt="Treatment Outcomes and Patient Statistics"
            className="w-full h-auto rounded-[15px] shadow-sm object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 26: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-outcomes-join"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            YES! I'M IN, LET'S DO THIS
          </a>
        </div>
      </div>
    </section>
  );
};
