import React, { useState, useEffect } from 'react';
import { APPOINTMENT_URL } from '../data/siteData';

interface StickyBottomBarProps {
  onBookClick?: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onBookClick }) => {
  // Evergreen countdown timer (5 minutes cycle, persists slightly or restarts)
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 mins

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <div
      id="section-sticky-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#004AAD] text-white shadow-[0_-5px_25px_rgba(0,0,0,0.25)] border-t border-blue-400/30 py-2.5 px-4"
    >
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* HurryTimer Countdown Display */}
        <div className="flex items-center space-x-2 text-center">
          <div className="flex items-center space-x-1.5 bg-[#003580] px-3 py-1 rounded-lg border border-blue-400/20">
            <div className="flex flex-col items-center">
              <span className="text-[16px] md:text-[18px] font-extrabold font-mono text-white leading-none">
                {pad(hours)}
              </span>
              <span className="text-[10px] uppercase text-blue-200 tracking-wider">hrs</span>
            </div>
            <span className="text-white font-bold text-[14px] leading-none">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[16px] md:text-[18px] font-extrabold font-mono text-white leading-none">
                {pad(minutes)}
              </span>
              <span className="text-[10px] uppercase text-blue-200 tracking-wider">mins</span>
            </div>
            <span className="text-white font-bold text-[14px] leading-none">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[16px] md:text-[18px] font-extrabold font-mono text-yellow-300 leading-none">
                {pad(seconds)}
              </span>
              <span className="text-[10px] uppercase text-yellow-300 tracking-wider">secs</span>
            </div>
          </div>
          <span className="hidden md:inline text-[13px] font-medium text-blue-100">
            Special ₹1100 consultation slot reserved for you!
          </span>
        </div>

        {/* CTA Button */}
        <div>
          <a
            id="btn-sticky-bottom-booking"
            href={APPOINTMENT_URL}
            onClick={handleBooking}
            className="inline-block bg-[#FF0000] hover:bg-[#d80000] text-white text-[14px] sm:text-[16px] md:text-[17px] font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-[15px] border border-black shadow-md uppercase tracking-wide leading-tight transition-transform hover:scale-105 active:scale-95 font-['Barlow',sans-serif] whitespace-nowrap cursor-pointer pulse-cta"
          >
            BOOK 1 to 1 PRIVATE CONSULTATION
          </a>
        </div>
      </div>
    </div>
  );
};
