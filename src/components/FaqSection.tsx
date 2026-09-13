import React, { useState } from 'react';
import { Divider } from './Divider';
import { FAQS } from '../data/siteData';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="section-faq" className="w-full py-10 md:py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center space-x-1.5 bg-blue-100 text-[#1C5BD9] text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#1C5BD9]" />
            <span>Got Questions? We Have Answers</span>
          </span>
          <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 mt-2">
            Everything you need to know about privacy, consultation procedure, and our 100% money-back guarantee.
          </p>
          <Divider />
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-gray-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-gray-50/70 transition-colors"
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#1C5BD9]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed border-t border-gray-100 bg-blue-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-emerald-50 rounded-[14px] border border-emerald-200 flex items-center space-x-3 text-emerald-800 text-[13px] sm:text-[14px]">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>100% Risk-Free Guarantee:</strong> If you don't receive actionable clarity during your 45-minute private session, your ₹1,100 fee is immediately refunded.
          </span>
        </div>
      </div>
    </section>
  );
};
