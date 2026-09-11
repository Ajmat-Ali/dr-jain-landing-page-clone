import React from 'react';
import { Divider } from './Divider';
import { APPOINTMENT_URL } from '../data/siteData';

interface PricingCtaSectionProps {
  onBookClick?: () => void;
}

export const PricingCtaSection: React.FC<PricingCtaSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-one-to-one-pricing" className="w-full py-6 md:py-8 px-4 text-center">
      <div className="max-w-[850px] mx-auto">
        {/* Section 5: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">One-to-One</span> Private Session
        </h2>

        {/* ElementsKit Divider */}
        <Divider />

        {/* Section 6: Two Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-4">
          <a
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-flex items-center justify-center bg-[#1C5BD9] hover:bg-[#1546a8] text-white text-[14px] md:text-[16px] font-semibold py-2.5 px-6 rounded-[15px] transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            45 Min Consultation
          </a>
          <a
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-flex items-center justify-center bg-[#1C5BD9] hover:bg-[#1546a8] text-white text-[14px] md:text-[16px] font-semibold py-2.5 px-6 rounded-[15px] transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Free Bonuses Worth ₹ 6000/
          </a>
        </div>

        {/* Section 7: Pricing */}
        <div className="my-4">
          <h2 className="text-[28px] md:text-[35px] font-bold text-[#1C5BD9] tracking-tight font-['Barlow',sans-serif]">
            <s className="text-[#555555] font-normal mr-2">5500/ </s> NOW ₹ 1100/-
          </h2>
        </div>

        {/* Section 8: CTA Button */}
        <div className="mt-5 mb-2">
          <a
            id="btn-hero-book-consultation"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[17px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer pulse-cta"
          >
            BOOK FOR 1 TO 1 PRIVATE CONSULTATION - Limited Time Offer
          </a>
        </div>
      </div>
    </section>
  );
};
