import React from 'react';
import { Divider } from './Divider';

export const HeroSection: React.FC = () => {
  return (
    <section id="section-hero" className="w-full pt-6 md:pt-10 pb-4 px-4 text-center">
      <div className="max-w-[850px] mx-auto">
        {/* Main Headline */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-snug tracking-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Get Get Clear Action Plan</span> on Your S.e.xual Health at ₹1100 Or{' '}
          <span className="text-[#1C5BD9]">Get Your Money Back</span>
        </h2>

        {/* ElementsKit signature divider */}
        <Divider />

        {/* Featured Video: YouTube 9XJsZa2NNj4 */}
        <div className="max-w-[721px] mx-auto mt-5 mb-6 shadow-xl rounded-[12px] overflow-hidden bg-black aspect-video border border-blue-100">
          <iframe
            id="featured-hero-video"
            className="w-full h-full rounded-[12px]"
            src="https://www.youtube.com/embed/9XJsZa2NNj4?enablejsapi=1&origin=https://askdrjain.in"
            title="Dr Sankalp Jain Consultation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Doctor credentials title */}
        <div className="mt-3">
          <h3 className="text-[18px] md:text-[21px] font-bold text-[#000000] leading-normal font-['Barlow',sans-serif]">
            <span className="text-[#1C5BD9]">DR. SANKALP JAIN</span>{' '}
            <span>- Sexual Health Coach, Certified Sexologist & Psychosexual Therapist</span>
          </h3>
        </div>
      </div>
    </section>
  );
};
