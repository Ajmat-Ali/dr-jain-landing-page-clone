import React from 'react';
import { Divider } from './Divider';
import { BONUSES, APPOINTMENT_URL, AI_IMAGES } from '../data/siteData';
import { Gift, CheckCircle2 } from 'lucide-react';

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
    <section id="section-bonuses" className="w-full py-10 md:py-16 px-4 text-center bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-[1140px] mx-auto">
        {/* Badge & Heading */}
        <span className="inline-flex items-center space-x-1.5 bg-amber-100 text-amber-900 text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
          <Gift className="w-3.5 h-3.5 text-amber-700" />
          <span>Exclusive Consultation Package</span>
        </span>
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          Unlock <span className="text-[#1C5BD9]">FREE Bonuses</span> worth{' '}
          <span className="text-[#1C5BD9]">₹ 6,000/-</span>
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-600 mt-2 max-w-[700px] mx-auto">
          Included 100% free when you confirm your ₹1,100 consultation slot today.
        </p>

        <Divider />

        {/* 3D Bundle Feature Card */}
        <div className="my-8 bg-white rounded-[24px] p-6 sm:p-8 shadow-xl border border-blue-100 max-w-[950px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-6">
              <div className="rounded-[18px] overflow-hidden shadow-lg border-2 border-blue-50">
                <img
                  src={AI_IMAGES.digitalBonusMockup}
                  alt="Free Medical Digital Guides & Video Protocols Bundle"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 space-y-3.5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#1C5BD9] bg-blue-100 px-2.5 py-1 rounded-md">
                Included Instant Access
              </span>
              <h3 className="text-[20px] sm:text-[23px] font-bold text-gray-900 font-['Barlow',sans-serif] leading-tight">
                Complete Intimate Vitality & Pelvic Exercise Protocol
              </h3>
              <ul className="space-y-2.5 text-[14px] text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C5BD9] shrink-0 mt-0.5" />
                  <span><strong>Bonus 1:</strong> Clinical Dietary & Stamina Blueprint (Worth ₹2,000)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C5BD9] shrink-0 mt-0.5" />
                  <span><strong>Bonus 2:</strong> Mind-Body Anti-Anxiety Video Protocol (Worth ₹2,000)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C5BD9] shrink-0 mt-0.5" />
                  <span><strong>Bonus 3:</strong> Pelvic Floor Conditioning Guide for Stamina (Worth ₹2,000)</span>
                </li>
              </ul>
              <div className="pt-2 text-[13px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                ✓ Yours to keep forever, even if you utilize our Money-Back Guarantee.
              </div>
            </div>
          </div>
        </div>

        {/* Original 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100"
            >
              <img
                src={bonus.image}
                alt={bonus.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            id="btn-book-now-20"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[18px] md:text-[19px] font-bold py-3.5 px-6 sm:px-10 rounded-[15px] border border-[#000000] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase leading-tight font-['Barlow',sans-serif] cursor-pointer"
          >
            CLAIM MY FREE ₹6,000 BONUSES & BOOK SESSION (₹1,100)
          </a>
        </div>
      </div>
    </section>
  );
};
