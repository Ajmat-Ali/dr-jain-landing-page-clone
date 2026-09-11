import React from 'react';
import { Divider } from './Divider';
import { APPOINTMENT_URL } from '../data/siteData';

interface ErectionConcernsSectionProps {
  onBookClick?: () => void;
}

export const ErectionConcernsSection: React.FC<ErectionConcernsSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-erection-concerns" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 21: Heading 1 */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Struggling to achieve</span> or maintain an Erection ?
        </h2>

        <Divider />

        {/* Section 22: Sub-heading */}
        <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold text-[#000000] max-w-[850px] mx-auto my-4 leading-snug font-['Barlow',sans-serif]">
          Reclaim Your Intimate Wellness Discover Personalized Solutions for a Fulfilling Sexual Life
        </h3>

        {/* WhatsApp Chat Testimonials Screenshot Graphic */}
        <div className="max-w-[800px] mx-auto my-6 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-11-at-11.53.19-AM-1024x605.png"
            alt="Patient Testimonial Messages"
            className="w-full h-auto rounded-[15px] shadow-md object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 23: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-want-to-solve-this"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            YES! I WANT TO SOLVE THIS
          </a>
        </div>
      </div>
    </section>
  );
};
