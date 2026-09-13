import React, { useState } from 'react';
import { Divider } from './Divider';
import { ShieldCheck, Activity, ArrowRight, CheckCircle, Clock } from 'lucide-react';

interface SymptomCheckerProps {
  onBookClick?: (prefilledConcern?: string) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ onBookClick }) => {
  const [selectedConcern, setSelectedConcern] = useState<string>('erection');
  const [selectedDuration, setSelectedDuration] = useState<string>('3-6-months');
  const [triedBefore, setTriedBefore] = useState<string>('yes-temporary');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  const concerns = [
    { id: 'erection', label: 'Erection Firmness & Loss Mid-Way', subtitle: 'Struggling to achieve or sustain' },
    { id: 'timing', label: 'Premature Climax / Quick Discharge', subtitle: 'Finishing in under 1-2 minutes' },
    { id: 'anxiety', label: 'Psychological Performance Anxiety', subtitle: 'Fear of intimacy, stress & racing heart' },
    { id: 'libido', label: 'Low Sex Drive & Low Stamina', subtitle: 'Hormonal fatigue & loss of enthusiasm' },
  ];

  const durations = [
    { id: 'recent', label: '< 1 Month' },
    { id: '3-6-months', label: '3 - 6 Months' },
    { id: '1-year', label: '1 - 2 Years' },
    { id: 'chronic', label: '2+ Years' },
  ];

  const remedies = [
    { id: 'yes-temporary', label: 'Yes, tried pills/oils with temporary or no result' },
    { id: 'no-first-time', label: 'No, this is my first time seeking medical guidance' },
  ];

  const handleBooking = () => {
    const concernObj = concerns.find(c => c.id === selectedConcern);
    if (onBookClick) {
      onBookClick(concernObj?.label || 'Sexual Health Consultation');
    }
  };

  return (
    <section id="section-symptom-checker" className="w-full py-10 md:py-14 px-4 bg-gradient-to-b from-[#EBF2FF] to-[#D1E1FE]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center space-x-1.5 bg-[#1C5BD9]/10 text-[#1C5BD9] text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Activity className="w-4 h-4 text-[#1C5BD9]" />
            <span>Confidential Self-Evaluation</span>
          </span>
          <h2 className="text-[25px] sm:text-[29px] md:text-[36px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            What Concern Are You Looking To <span className="text-[#1C5BD9]">Permanently Solve?</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-700 mt-2 font-['Roboto',sans-serif]">
            Select your symptoms below to understand the clinical root cause before your private 1-to-1 consultation.
          </p>
          <Divider />
        </div>

        {/* Interactive Box */}
        <div className="mt-8 bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-xl border border-blue-100">
          {/* Step 1 */}
          <div className="mb-6">
            <label className="block text-[15px] font-bold text-gray-900 mb-3 font-['Barlow',sans-serif]">
              Step 1: Select your primary intimate health concern
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concerns.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setSelectedConcern(c.id)}
                  className={`p-4 rounded-[14px] text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedConcern === c.id
                      ? 'border-[#1C5BD9] bg-blue-50/70 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[15px] font-bold text-gray-900 font-['Barlow',sans-serif]">{c.label}</span>
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                      selectedConcern === c.id ? 'border-[#1C5BD9] bg-[#1C5BD9]' : 'border-gray-300'
                    }`}>
                      {selectedConcern === c.id && <CheckCircle className="w-4 h-4 text-white" />}
                    </span>
                  </div>
                  <span className="text-[12px] text-gray-500">{c.subtitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <label className="block text-[15px] font-bold text-gray-900 mb-3 font-['Barlow',sans-serif]">
              Step 2: How long have you experienced this?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {durations.map((d) => (
                <button
                  type="button"
                  key={d.id}
                  onClick={() => setSelectedDuration(d.id)}
                  className={`py-2.5 px-3 rounded-[12px] text-center text-[14px] font-semibold border-2 transition-all cursor-pointer ${
                    selectedDuration === d.id
                      ? 'border-[#1C5BD9] bg-blue-50 text-[#1C5BD9]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <label className="block text-[15px] font-bold text-gray-900 mb-3 font-['Barlow',sans-serif]">
              Step 3: Have you attempted any previous treatments?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {remedies.map((r) => (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setTriedBefore(r.id)}
                  className={`p-3.5 rounded-[12px] text-left text-[14px] font-semibold border-2 transition-all cursor-pointer flex items-center justify-between ${
                    triedBefore === r.id
                      ? 'border-[#1C5BD9] bg-blue-50 text-[#1C5BD9]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{r.label}</span>
                  <span className={`w-4 h-4 rounded-full border-2 shrink-0 ml-2 ${
                    triedBefore === r.id ? 'border-[#1C5BD9] bg-[#1C5BD9]' : 'border-gray-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Instant Clinical Assessment Box */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-[18px] p-6 border border-blue-200 text-left">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-[#1C5BD9] text-white rounded-xl shrink-0 mt-0.5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[19px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                  Dr. Sankalp Jain's Clinical Diagnosis Protocol
                </h4>
                <p className="text-[14px] text-gray-700 mt-1 leading-relaxed">
                  Over <strong>80% of men</strong> struggling with this issue suffer from a reversible combination of <strong>sympathetic nervous anxiety</strong>, altered penile micro-circulation, or pelvic muscle hypertonicity—not permanent organ failure.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] font-bold text-[#1C5BD9]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">✓ 100% Non-Judgmental</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">✓ Scientific Root-Cause Discovery</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">✓ Customized Action Plan in 45 Mins</span>
                </div>
              </div>
            </div>

            {/* CTA inside assessment */}
            <div className="mt-6 pt-4 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">Reserved Consultation Slot</span>
                <div className="text-[20px] font-extrabold text-[#1C5BD9] font-['Barlow',sans-serif]">
                  <s>₹5,500</s> <span className="text-gray-900">₹1,100/-</span> <span className="text-[13px] text-red-600 font-semibold">(80% Off Today)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleBooking}
                className="w-full sm:w-auto bg-[#FF0000] hover:bg-[#d80000] text-white text-[15px] sm:text-[16px] font-bold py-3.5 px-8 rounded-[15px] border border-black shadow-lg uppercase tracking-wide transition-all transform hover:scale-[1.02] cursor-pointer font-['Barlow',sans-serif] flex items-center justify-center space-x-2"
              >
                <span>GET MY PERSONALIZED ACTION PLAN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
