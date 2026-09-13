import React, { useState } from 'react';
import { Divider } from './Divider';
import { AI_IMAGES, APPOINTMENT_URL } from '../data/siteData';
import { Sparkles, Check, X, Heart, ShieldAlert, Zap } from 'lucide-react';

interface TransformationSectionProps {
  onBookClick?: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onBookClick }) => {
  const [viewMode, setViewMode] = useState<'comparison' | 'solution'>('comparison');

  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-transformation" className="w-full py-10 md:py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto">
          <span className="inline-flex items-center space-x-1.5 bg-green-100 text-green-800 text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-green-700" />
            <span>Proven Clinical Transformation</span>
          </span>
          <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            Break Free From Performance Worry & <span className="text-[#1C5BD9]">Reclaim Natural Intimacy</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 mt-2">
            Temporary hacks and random pills fail because they don't fix the underlying vascular, hormonal, and mental triggers. Here is what changes when you treat the root cause.
          </p>
          <Divider />
        </div>

        {/* Transformation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 md:mt-12">
          {/* Left Column: Image with emotional resonance */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[22px] overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={AI_IMAGES.manConfidenceRelief}
                alt="Patient Confidence and Vitality"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-amber-300 text-[12px] font-bold uppercase tracking-wider mb-1 flex items-center space-x-1">
                  <Heart className="w-3.5 h-3.5 fill-amber-300" />
                  <span>Real Patient Outcome</span>
                </span>
                <p className="text-[15px] sm:text-[16px] font-semibold leading-snug">
                  "I was terrified before my wedding. In just 45 minutes, Dr. Jain cleared my doubts and gave me a concrete protocol. My relationship is completely restored."
                </p>
                <span className="text-[12px] text-gray-300 mt-2 font-medium">— Verified Patient (Age 31, Lucknow)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Analysis */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: The Temporary Fixes */}
              <div className="bg-white rounded-[20px] p-5 sm:p-6 border-2 border-red-100 shadow-sm relative overflow-hidden">
                <div className="w-full h-1.5 bg-red-400 absolute top-0 left-0" />
                <div className="flex items-center space-x-2 text-red-600 mb-3">
                  <ShieldAlert className="w-5 h-5" />
                  <h4 className="text-[16px] font-bold font-['Barlow',sans-serif]">
                    Temporary Market Hacks
                  </h4>
                </div>
                <ul className="space-y-3 text-[13px] sm:text-[14px] text-gray-700">
                  <li className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Over-the-counter blue pills causing severe headaches & facial flushing.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Dangerous dependence—fear that you can't perform without a pill.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Wasted money on bogus oils, creams, and unqualified herbal quacks.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Ongoing stress, quiet marital strain, and declining self-esteem.</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Dr. Jain's Protocol */}
              <div className="bg-blue-50/80 rounded-[20px] p-5 sm:p-6 border-2 border-blue-300 shadow-md relative overflow-hidden">
                <div className="w-full h-1.5 bg-[#1C5BD9] absolute top-0 left-0" />
                <div className="flex items-center space-x-2 text-[#1C5BD9] mb-3">
                  <Zap className="w-5 h-5" />
                  <h4 className="text-[16px] font-bold font-['Barlow',sans-serif]">
                    Dr. Sankalp Jain's Solution
                  </h4>
                </div>
                <ul className="space-y-3 text-[13px] sm:text-[14px] text-gray-800">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Accurate Root-Cause:</strong> Vascular, hormonal, and mental evaluation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Pelvic & Neuro Protocol:</strong> Re-training autonomic reflexes for lasting control.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Zero Dependence:</strong> Restore natural spontaneous vigor without crutches.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>100% Backed:</strong> 45-minute guarantee or full ₹1,100 refund.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-6">
              <a
                href={APPOINTMENT_URL}
                onClick={handleBooking}
                className="inline-block w-full text-center bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] sm:text-[17px] font-bold py-3.5 px-6 rounded-[15px] border border-black shadow-md uppercase tracking-wide transition-all transform hover:scale-[1.02] cursor-pointer font-['Barlow',sans-serif]"
              >
                RESTORE MY NATURAL CONFIDENCE NOW (₹1,100)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
