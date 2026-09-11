import React from 'react';
import { Divider } from './Divider';
import { DOCTOR_CREDENTIALS, APPOINTMENT_URL } from '../data/siteData';

interface AboutDoctorSectionProps {
  onBookClick?: () => void;
}

export const AboutDoctorSection: React.FC<AboutDoctorSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-about-doctor" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 16: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">About</span> Dr Sankalp Jain
        </h2>

        <Divider />

        {/* Doctor Main Portrait */}
        <div className="max-w-[480px] md:max-w-[540px] mx-auto my-6">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Home-Doctors-573-X-658-3.png"
            alt="Dr Sankalp Jain - Best Sexologist in India"
            className="w-full h-auto rounded-[15px] shadow-md object-cover mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 17: 4 Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-6">
          {DOCTOR_CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <img
                src={cred.image}
                alt={cred.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Section 18: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-take-charge-3"
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
