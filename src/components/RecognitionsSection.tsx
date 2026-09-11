import React from 'react';
import { Divider } from './Divider';
import { ACCREDITATIONS, APPOINTMENT_URL } from '../data/siteData';

interface RecognitionsSectionProps {
  onBookClick?: () => void;
}

export const RecognitionsSection: React.FC<RecognitionsSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-recognitions" className="w-full py-8 md:py-12 px-4 text-center">
      <div className="max-w-[1140px] mx-auto">
        {/* Section 27: Doctor In Clinic Image */}
        <div className="max-w-[480px] md:max-w-[540px] mx-auto mb-10">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Home-Doctors-573-X-658-1.png"
            alt="Dr Sankalp Jain Consultation Clinic"
            className="w-full h-auto rounded-[15px] shadow-md object-cover mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 28: Heading */}
        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
          <span className="text-[#1C5BD9]">Our</span> Recognitions
        </h2>

        <Divider />

        {/* Section 29: Certificate / Award Image */}
        <div className="max-w-[546px] mx-auto my-6 px-2">
          <img
            src="https://askdrjain.in/wp-content/uploads/2023/12/Untitled-502-x-521-px-502-x-437-px-1.png"
            alt="Recognitions and Certifications"
            className="w-full h-auto rounded-[15px] shadow-sm object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Section 30: 10 Logos Accreditation Carousel/Grid */}
        <div className="my-8 py-4 bg-white/70 backdrop-blur-sm rounded-[20px] shadow-sm border border-blue-100/60 overflow-hidden">
          <div className="text-[13px] uppercase tracking-wider text-[#54595F] font-semibold mb-4">
            Recognized & Certified by Leading Healthcare Bodies
          </div>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3 sm:gap-4 items-center justify-items-center px-4">
            {ACCREDITATIONS.map((logo) => (
              <div
                key={logo.id}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center p-1 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform"
              >
                <img
                  src={logo.imageUrl}
                  alt={`Accreditation logo ${logo.name}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section 31: CTA Button */}
        <div className="mt-8">
          <a
            id="btn-take-charge-4"
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
