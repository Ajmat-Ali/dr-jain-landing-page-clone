import React from 'react';
import { Divider } from './Divider';
import { REVIEWS, APPOINTMENT_URL } from '../data/siteData';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  onBookClick?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  // 3 reviews in first row, 2 in second row
  const firstRow = REVIEWS.slice(0, 3);
  const secondRow = REVIEWS.slice(3, 5);

  return (
    <section id="section-testimonials" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 12: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Our Happy</span> Patient​s
        </h2>

        <Divider />

        {/* Section 13: First row of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {firstRow.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[15px] p-6 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] text-center flex flex-col items-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-[#1C5BD9]/20 shadow-sm">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* 5-star rating */}
              <div className="flex items-center justify-center space-x-1 mb-3 text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              <h6 className="text-[18px] font-bold text-[#000000] mb-3 font-['Barlow',sans-serif]">
                {review.title}
              </h6>

              <p className="text-[14px] sm:text-[15px] font-bold text-[#222222] leading-relaxed text-center font-['Roboto',sans-serif]">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Section 14: Second row of 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[780px] mx-auto">
          {secondRow.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[15px] p-6 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] text-center flex flex-col items-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-[#1C5BD9]/20 shadow-sm">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* 5-star rating */}
              <div className="flex items-center justify-center space-x-1 mb-3 text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              <h6 className="text-[18px] font-bold text-[#000000] mb-3 font-['Barlow',sans-serif]">
                {review.title}
              </h6>

              <p className="text-[14px] sm:text-[15px] font-bold text-[#222222] leading-relaxed text-center font-['Roboto',sans-serif]">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Section 15: CTA Button */}
        <div className="mt-10">
          <a
            id="btn-take-charge-2"
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
