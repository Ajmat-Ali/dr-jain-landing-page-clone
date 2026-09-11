import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { PricingCtaSection } from './components/PricingCtaSection';
import { WhatWeHelpSection } from './components/WhatWeHelpSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { ConsultationExperienceSection } from './components/ConsultationExperienceSection';
import { ErectionConcernsSection } from './components/ErectionConcernsSection';
import { OutcomesSection } from './components/OutcomesSection';
import { RecognitionsSection } from './components/RecognitionsSection';
import { BonusesSection } from './components/BonusesSection';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { FinalOfferSection } from './components/FinalOfferSection';
import { FooterSection } from './components/FooterSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#D1E1FE] font-['Roboto',sans-serif] text-[#54595F] pb-24 selection:bg-[#1C5BD9] selection:text-white">
      {/* 1. Top Announcement Header Bar */}
      <TopBanner />

      {/* 2. Hero Section: Headline, Featured Video & Doctor Title */}
      <HeroSection />

      {/* 3. One-to-One Session Pricing & Primary CTA */}
      <PricingCtaSection onBookClick={handleOpenBooking} />

      {/* 4. What We Can Help You With Graphic & CTA */}
      <WhatWeHelpSection onBookClick={handleOpenBooking} />

      {/* 5. Happy Patients Testimonials (5 Written Reviews with Avatars) & CTA */}
      <TestimonialsSection onBookClick={handleOpenBooking} />

      {/* 6. About Dr Sankalp Jain, Portrait & 4 Credentials Cards */}
      <AboutDoctorSection onBookClick={handleOpenBooking} />

      {/* 7. Consultation Experience Process Diagram & CTA */}
      <ConsultationExperienceSection onBookClick={handleOpenBooking} />

      {/* 8. Erection Concerns & WhatsApp Patient Proof */}
      <ErectionConcernsSection onBookClick={handleOpenBooking} />

      {/* 9. Treatment Outcomes Infographic & CTA */}
      <OutcomesSection onBookClick={handleOpenBooking} />

      {/* 10. Recognitions, Doctor In Clinic & 10 Accredited Healthcare Logos */}
      <RecognitionsSection onBookClick={handleOpenBooking} />

      {/* 11. Free Bonuses Worth ₹6,000 (3 Bonus Cards) & CTA */}
      <BonusesSection onBookClick={handleOpenBooking} />

      {/* 12. Video Testimonials (6 Playable YouTube Patient Stories) */}
      <VideoTestimonialsSection />

      {/* 13. Final Offer: Are You Ready, Book Now Banner, Checklist & Pricing */}
      <FinalOfferSection onBookClick={handleOpenBooking} />

      {/* 14. Footer: Legal Pages, Clinic Locations in Lucknow & Contact Info */}
      <FooterSection />

      {/* 15. Sticky Bottom Countdown Timer Bar with Direct Action */}
      <StickyBottomBar onBookClick={handleOpenBooking} />

      {/* Interactive Booking & Appointment Flow Modal */}
      <BookingModal isOpen={isModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
