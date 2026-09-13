import React from 'react';
import { Divider } from './Divider';
import { AI_IMAGES, APPOINTMENT_URL } from '../data/siteData';
import { Building2, MapPin, Video, Award, Clock } from 'lucide-react';

interface ClinicSuiteSectionProps {
  onBookClick?: () => void;
}

export const ClinicSuiteSection: React.FC<ClinicSuiteSectionProps> = ({ onBookClick }) => {
  const handleBooking = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section id="section-clinic-suite" className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto">
          <span className="inline-flex items-center space-x-1.5 bg-blue-100 text-[#1C5BD9] text-[13px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#1C5BD9]" />
            <span>State-of-the-art Healthcare</span>
          </span>
          <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold text-[#000000] leading-tight font-['Barlow',sans-serif]">
            World-Class Consultation Suites in <span className="text-[#1C5BD9]">Lucknow & Online</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 mt-2">
            Whether you choose to visit our discreet clinic rooms in Lucknow or prefer a tele-health consultation from home, you receive the same uncompromising gold standard of medical care.
          </p>
          <Divider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 md:mt-12">
          {/* Clinic Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-[20px] p-5 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-[#1C5BD9] text-white rounded-lg">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                      Option 1: Private Online Telehealth (Pan-India & Global)
                    </h4>
                    <span className="text-[12px] text-gray-500 font-medium">Recommended for 100% Privacy</span>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-600">
                  Connect via private HD video/audio link from anywhere. Same 45-minute comprehensive diagnosis, prescription delivery, and 3 free digital guides.
                </p>
              </div>

              <div className="bg-gray-50 rounded-[20px] p-5 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-emerald-600 text-white rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 font-['Barlow',sans-serif]">
                      Option 2: In-Person Clinic Visits (Lucknow)
                    </h4>
                    <span className="text-[12px] text-gray-500 font-medium">By Prior Appointment Only</span>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-600">
                  <strong>Hazratganj Clinic</strong> (Opp. Multi-Level Parking) & <strong>Charbagh Clinic</strong> (Near Railway Station), Lucknow, Uttar Pradesh.
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50/70 rounded-[14px] border border-blue-200 text-[13px] font-semibold text-gray-800">
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#1C5BD9]" />
                  <span>Only 20 Patient Slots Accepted Daily</span>
                </span>
                <span className="text-red-600 font-bold">Fast Filling</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-[22px] overflow-hidden shadow-2xl border-4 border-blue-50 group">
              <img
                src={AI_IMAGES.privateClinicRoom}
                alt="Dr. Sankalp Jain Clinic Consultation Suite"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[12px] font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/20">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Dr. Sankalp Jain • Senior Sexologist & Psychosexual Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
