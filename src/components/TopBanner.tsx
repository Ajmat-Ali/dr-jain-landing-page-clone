import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div
      id="section-top-banner"
      className="w-full bg-[#004AAD] text-white py-3 md:py-[15px] px-3 text-center rounded-b-[20px] shadow-md z-30 relative"
    >
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-[14px] sm:text-[20px] md:text-[28px] lg:text-[35px] font-extrabold tracking-normal uppercase leading-tight font-['Barlow',sans-serif]">
          <span className="underline decoration-2 underline-offset-4">80 % MEN</span>{' '}
          SAW LASTING RESULTS WITH{' '}
          <span className="underline decoration-2 underline-offset-4">PERSONALIZED SOLUTION</span>
        </h1>
      </div>
    </div>
  );
};
