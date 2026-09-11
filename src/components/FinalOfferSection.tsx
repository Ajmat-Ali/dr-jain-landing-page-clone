import React from 'react';
import { Divider } from './Divider';
import { FINAL_CHECKLIST, APPOINTMENT_URL } from '../data/siteData';
import { CheckCircle2 } from 'lucide-react';

interface FinalOfferSectionProps {
  onBookClick?: () => void;
}

export const FinalOfferSection: React.FC<FinalOfferSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-final-offer" className="w-full py-8 md:py-14 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 37: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Are You Ready</span> To Take This First Step Towards{' '}
          <span className="text-[#1C5BD9]">Your Happy Life ?</span>
        </h2>

        <Divider />

        {/* Section 37: First Button */}
        <div className="my-6">
          <a
            id="btn-consult-best-sexologist"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            YES! I WANT CONSULT WITH BEST SEXOLOGIST
          </a>
        </div>

        {/* Section 38: Banner graphic Book-Now.png */}
        <div className="max-w-[850px] mx-auto my-8 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Book-Now.png"
            alt="Book Now Consultation Banner"
            className="w-full h-auto rounded-[15px] shadow-lg object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 39: Checklist Box */}
        <div className="max-w-[650px] mx-auto my-8 bg-white/90 backdrop-blur-sm rounded-[20px] p-6 md:p-8 shadow-md border border-blue-100 text-left">
          <ul className="space-y-4">
            {FINAL_CHECKLIST.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-[#111111] text-[16px] md:text-[18px] font-semibold font-['Barlow',sans-serif]">
                <CheckCircle2 className="w-6 h-6 text-[#00C853] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 40: Pricing Card */}
        <div className="max-w-[650px] mx-auto my-6 bg-white rounded-[20px] p-6 md:p-8 shadow-lg border border-blue-200">
          <h2 className="text-[25px] sm:text-[28px] md:text-[32px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            <span className="text-[#1C5BD9]">One-to-One</span> Private Session
          </h2>

          <Divider />

          <h2 className="text-[28px] md:text-[35px] font-bold text-[#1C5BD9] my-3 font-['Barlow',sans-serif]">
            <s className="text-[#555555] font-normal mr-2">5500/ </s> NOW ₹ 1100/-
          </h2>

          <p className="text-[17px] md:text-[20px] font-bold text-[#FF0000] uppercase tracking-wide font-['Barlow',sans-serif] mt-2">
            Offer valid for first 20 people only
          </p>
        </div>

        {/* Section 41: Final CTA Button */}
        <div className="mt-8 mb-4">
          <a
            id="btn-final-join"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-4 px-8 sm:px-12 rounded-[15px] border border-[#000000] shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer pulse-cta"
          >
            YES! I'M IN, LET'S DO THIS
          </a>
        </div>
      </div>
    </section>
  );
};
