import React, { useState } from 'react';
import { X, Calendar, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { APPOINTMENT_URL } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    timeSlot: '11:00 AM - 11:45 AM',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-[540px] bg-white rounded-[20px] shadow-2xl overflow-hidden border border-blue-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#004AAD] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-[20px] font-bold font-['Barlow',sans-serif] leading-tight">
              Book 1-to-1 Private Consultation
            </h3>
            <p className="text-[13px] text-blue-100 mt-0.5">
              Confidential consultation with Dr. Sankalp Jain
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-semibold text-[#1C5BD9] uppercase tracking-wide">
                    Private 45-Min Session
                  </div>
                  <div className="text-[18px] font-bold text-[#004AAD]">
                    <s className="text-gray-400 font-normal text-[15px] mr-1.5">₹5500</s> ₹1,100/-
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    80% OFF
                  </span>
                  <div className="text-[11px] text-gray-500 mt-1">Includes ₹6,000 Bonuses</div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1C5BD9] text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1C5BD9] text-[14px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1C5BD9] text-[13px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1C5BD9] text-[13px]"
                  >
                    <option value="11:00 AM - 11:45 AM">11:00 AM - 11:45 AM</option>
                    <option value="01:00 PM - 01:45 PM">01:00 PM - 01:45 PM</option>
                    <option value="04:00 PM - 04:45 PM">04:00 PM - 04:45 PM</option>
                    <option value="07:00 PM - 07:45 PM">07:00 PM - 07:45 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-[12px] text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>100% Confidential. Your details are never shared with anyone.</span>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full bg-[#FF0000] hover:bg-[#d80000] text-white text-[16px] font-bold py-3 px-6 rounded-[15px] border border-black shadow-md uppercase tracking-wide transition-all font-['Barlow',sans-serif] cursor-pointer"
                >
                  CONFIRM CONSULTATION BOOKING
                </button>

                <div className="text-center">
                  <a
                    href={APPOINTMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[13px] text-[#1C5BD9] hover:underline font-semibold"
                  >
                    <span>Or visit the live appointment page on askdrjain.in</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-[22px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                Consultation Request Received!
              </h4>
              <p className="text-[14px] text-gray-600 max-w-[360px] mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our clinical coordinator will reach out to you via WhatsApp / Phone at <strong>{formData.phone}</strong> shortly to confirm your private 1-to-1 session.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="bg-[#1C5BD9] hover:bg-[#1546a8] text-white text-[14px] font-semibold py-2.5 px-6 rounded-[12px] transition-colors"
                >
                  Back to Website
                </button>
                <a
                  href={APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[14px] font-semibold py-2.5 px-6 rounded-[12px] transition-colors inline-flex items-center justify-center"
                >
                  Visit Direct Portal
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
