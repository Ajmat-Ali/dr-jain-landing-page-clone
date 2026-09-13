import React, { useState } from 'react';
import { Divider } from './Divider';
import { AI_IMAGES, APPOINTMENT_URL } from '../data/siteData';
import { Lock, EyeOff, Shield, Smartphone, Clock, CheckCircle2 } from 'lucide-react';

interface ConfidentialCareSectionProps {
  onBookClick?: () => void;
}

export const ConfidentialCareSection: React.FC<ConfidentialCareSectionProps> = ({ onBookClick }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      icon: EyeOff,
      title: "Zero Waiting Rooms or Awkward Encounters",
      description: "Consult directly via private encrypted HD video or audio call from your bedroom, study room, or car. No awkward clinic benches or public eyes."
    },
    {
      icon: Lock,
      title: "100% Encrypted & Anonymous Medical Records",
      description: "Your personal data and discussions are strictly protected under doctor-patient privilege. Medical files are never shared with employers, family, or third parties."
    },
    {
      icon: Shield,
      title: "Discreet Billing & Plain Packaging",
      description: "Any prescribed support or testing comes in 100% plain, tamper-proof packaging without sensitive labels, medical logos, or mention of sexual health."
    },
    {
      icon: Smartphone,
      title: "Direct Access to Dr. Sankalp Jain",
      description: "You speak 1-on-1 with Dr. Sankalp Jain personally—never an assistant, tele-caller, or inexperienced junior intern."
    }
  ];

  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-confidential-care" className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto">
          <span className="inline-flex items-center space-x-1.5 bg-blue-100 text-[#1C5BD9] text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5 text-[#1C5BD9]" />
            <span>Complete Discretion Guaranteed</span>
          </span>
          <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            Private, Respectful & <span className="text-[#1C5BD9]">100% Confidential Tele-Consultation</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 mt-2">
            No embarrassment. No awkward encounters. Receive compassionate medical expertise from the comfort of your home.
          </p>
          <Divider />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 md:mt-12">
          {/* Left Column: AI-Generated Photorealistic Telemedicine Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[22px] overflow-hidden shadow-2xl border-4 border-blue-50 group">
              <img
                src={AI_IMAGES.confidentialTelehealth}
                alt="Confidential Online Doctor Consultation"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[12px] font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>100% Private 1-to-1 Telehealth</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-gray-900 text-[13px] font-bold px-3.5 py-1.5 rounded-xl shadow-lg border border-blue-200">
                <span className="text-[#1C5BD9]">₹1,100</span> Private Session
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Trust Pillars */}
          <div className="lg:col-span-6 space-y-3.5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillar === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 sm:p-5 rounded-[16px] border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#1C5BD9] bg-blue-50/60 shadow-md transform -translate-y-0.5'
                      : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-[#1C5BD9] text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                        {p.title}
                      </h4>
                      <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Action Button */}
            <div className="pt-2">
              <a
                href={APPOINTMENT_URL}
                onClick={handleBooking}
                className="inline-block w-full text-center bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[17px] font-bold py-3.5 px-6 rounded-[15px] border border-black shadow-md uppercase tracking-wide transition-all transform hover:scale-[1.02] cursor-pointer font-['Barlow',sans-serif]"
              >
                BOOK MY 100% PRIVATE CONSULTATION (₹1,100)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
