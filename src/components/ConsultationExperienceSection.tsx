import React from 'react';
import { Divider } from './Divider';
import { APPOINTMENT_URL } from '../data/siteData';

interface ConsultationExperienceSectionProps {
  onBookClick?: () => void;
}

export const ConsultationExperienceSection: React.FC<ConsultationExperienceSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-consultation-experience" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          Your <span className="text-[#1C5BD9]">ONE-TO-ONE Consultation</span> Experience
        </h2>

        <Divider />

        {/* Graphic */}
        <div className="max-w-[722px] mx-auto my-6 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Untitled-design-7.png"
            alt="Your ONE-TO-ONE Consultation Experience Process"
            className="w-full h-auto rounded-[15px] shadow-sm object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            id="btn-book-one-to-one"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            YES! LET'S BOOK! 1-TO-1 CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
};
