import React from 'react';
import { FileText, MapPin, Mail, Phone } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="section-footer" className="w-full bg-[#FFFFFF] border-t border-b border-[#F2F2F2] py-12 md:py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Column 1: Legal Pages */}
          <div className="space-y-4">
            <h6 className="text-[20px] font-bold text-[#000000] tracking-tight font-['Barlow',sans-serif]">
              Legal Pages
            </h6>
            <div className="w-12 h-[2px] bg-[#1C5BD9]" />

            <ul className="space-y-3 pt-2">
              <li>
                <a
                  href="mailto:drsankalp1926@gmail.com"
                  className="inline-flex items-center space-x-3 text-[#54595F] hover:text-[#1C5BD9] transition-colors text-[15px]"
                >
                  <FileText className="w-4 h-4 text-[#1C5BD9] shrink-0" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:918601377777"
                  className="inline-flex items-center space-x-3 text-[#54595F] hover:text-[#1C5BD9] transition-colors text-[15px]"
                >
                  <FileText className="w-4 h-4 text-[#1C5BD9] shrink-0" />
                  <span>Refund Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Contact */}
          <div className="space-y-4">
            <h6 className="text-[20px] font-bold text-[#000000] tracking-tight font-['Barlow',sans-serif]">
              Quick Contact
            </h6>
            <div className="w-12 h-[2px] bg-[#1C5BD9]" />

            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start space-x-3 text-[#54595F] text-[14px] sm:text-[15px] leading-relaxed">
                <MapPin className="w-5 h-5 text-[#1C5BD9] shrink-0 mt-0.5" />
                <span>Sahu Building, opposite Cafe Coffee Day, Sushanpura, Hazratganj, Lucknow, Uttar Pradesh 226001</span>
              </li>
              <li className="flex items-start space-x-3 text-[#54595F] text-[14px] sm:text-[15px] leading-relaxed">
                <MapPin className="w-5 h-5 text-[#1C5BD9] shrink-0 mt-0.5" />
                <span>Gautam Buddha Marg, Opposite Mohan Hotel & SBI ATM, Cash and Pay Colony, Charbagh, Lucknow, Uttar Pradesh 2260041</span>
              </li>
              <li>
                <a
                  href="mailto:drsankalp1926@gmail.com"
                  className="inline-flex items-center space-x-3 text-[#54595F] hover:text-[#1C5BD9] transition-colors text-[15px]"
                >
                  <Mail className="w-4 h-4 text-[#1C5BD9] shrink-0" />
                  <span>drsankalp1926@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917307083873"
                  className="inline-flex items-center space-x-3 text-[#54595F] hover:text-[#1C5BD9] transition-colors text-[15px] font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#1C5BD9] shrink-0" />
                  <span>+91-73070 83873</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="border-t border-gray-100 mt-12 pt-6 text-center text-[13px] text-[#7A7A7A]">
          <p>© {new Date().getFullYear()} Ask Dr. Jain. All Rights Reserved. Consultation & Treatment Portal.</p>
        </div>
      </div>
    </footer>
  );
};
