import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { PricingCtaSection } from './components/PricingCtaSection';
import { SymptomChecker } from './components/SymptomChecker';
import { WhatWeHelpSection } from './components/WhatWeHelpSection';
import { ConfidentialCareSection } from './components/ConfidentialCareSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { TransformationSection } from './components/TransformationSection';
import { ConsultationExperienceSection } from './components/ConsultationExperienceSection';
import { ErectionConcernsSection } from './components/ErectionConcernsSection';
import { OutcomesSection } from './components/OutcomesSection';
import { ClinicSuiteSection } from './components/ClinicSuiteSection';
import { RecognitionsSection } from './components/RecognitionsSection';
import { BonusesSection } from './components/BonusesSection';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalOfferSection } from './components/FinalOfferSection';
import { FooterSection } from './components/FooterSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<string>('');

  const handleOpenBooking = (prefilledConcern?: string) => {
    if (prefilledConcern && typeof prefilledConcern === 'string') {
      setSelectedConcern(prefilledConcern);
    }
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
      <PricingCtaSection onBookClick={() => handleOpenBooking()} />

      {/* 4. Interactive Confidential Symptom Checker (NEW) */}
      <SymptomChecker onBookClick={(concern) => handleOpenBooking(concern)} />

      {/* 5. What We Can Help You With Graphic & CTA */}
      <WhatWeHelpSection onBookClick={() => handleOpenBooking()} />

      {/* 6. 100% Confidential Telehealth Care with AI Telemedicine Visual (NEW) */}
      <ConfidentialCareSection onBookClick={() => handleOpenBooking()} />

      {/* 7. Happy Patients Testimonials (Upgraded Verified Indian Patient Portraits) */}
      <TestimonialsSection onBookClick={() => handleOpenBooking()} />

      {/* 8. About Dr Sankalp Jain, Portrait & 4 Credentials Cards */}
      <AboutDoctorSection onBookClick={() => handleOpenBooking()} />

      {/* 9. Emotional Transformation & Before/After Protocol with AI Vitality Visual (NEW) */}
      <TransformationSection onBookClick={() => handleOpenBooking()} />

      {/* 10. Consultation Experience Process Diagram & CTA */}
      <ConsultationExperienceSection onBookClick={() => handleOpenBooking()} />

      {/* 11. Erection Concerns & WhatsApp Patient Proof */}
      <ErectionConcernsSection onBookClick={() => handleOpenBooking()} />

      {/* 12. Treatment Outcomes Infographic & CTA */}
      <OutcomesSection onBookClick={() => handleOpenBooking()} />

      {/* 13. Consultation Suites in Lucknow & Online Telehealth with AI Clinic Visual (NEW) */}
      <ClinicSuiteSection onBookClick={() => handleOpenBooking()} />

      {/* 14. Recognitions, Doctor In Clinic & 10 Accredited Healthcare Logos */}
      <RecognitionsSection onBookClick={() => handleOpenBooking()} />

      {/* 15. Free Bonuses Worth ₹6,000 with 3D Bundle Mockup Visual */}
      <BonusesSection onBookClick={() => handleOpenBooking()} />

      {/* 16. Video Testimonials (6 Playable YouTube Patient Stories) */}
      <VideoTestimonialsSection />

      {/* 17. Interactive Frequently Asked Questions Accordion (NEW) */}
      <FaqSection />

      {/* 18. Final Offer: Are You Ready, Book Now Banner, Checklist & Pricing */}
      <FinalOfferSection onBookClick={() => handleOpenBooking()} />

      {/* 19. Footer: Legal Pages, Clinic Locations in Lucknow & Contact Info */}
      <FooterSection />

      {/* 20. Sticky Bottom Countdown Timer Bar with Direct Action */}
      <StickyBottomBar onBookClick={() => handleOpenBooking()} />

      {/* Interactive Booking & Appointment Flow Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialConcern={selectedConcern}
      />
    </div>
  );
}
