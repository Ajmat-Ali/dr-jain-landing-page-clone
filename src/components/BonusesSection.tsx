import React from 'react';
import { Divider } from './Divider';
import { BONUSES, APPOINTMENT_URL } from '../data/siteData';

interface BonusesSectionProps {
  onBookClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-bonuses" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 32: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          Unlock <span className="text-[#1C5BD9]">FREE Bonuses</span> worth{' '}
          <span className="text-[#1C5BD9]">₹ 6,000/-</span>
        </h2>

        <Divider />

        {/* Section 33: 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100"
            >
              <img
                src={bonus.image}
                alt={bonus.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Section 34: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-book-now-20"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            BOOK NOW! ONLY FOR 1st 20 CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
};
