import { Review, BonusItem, DoctorCredential, VideoTestimonial, AccreditationLogo } from '../types';
import confidentialTelehealthImg from '../assets/images/confidential_telehealth_1789304894266.jpg';
import manConfidenceReliefImg from '../assets/images/man_confidence_relief_1789304913522.jpg';
import privateClinicRoomImg from '../assets/images/private_clinic_room_1789304928310.jpg';
import digitalBonusMockupImg from '../assets/images/digital_bonus_mockup_1789304954808.jpg';

export const AI_IMAGES = {
  confidentialTelehealth: confidentialTelehealthImg,
  manConfidenceRelief: manConfidenceReliefImg,
  privateClinicRoom: privateClinicRoomImg,
  digitalBonusMockup: digitalBonusMockupImg,
};

export const APPOINTMENT_URL = "https://askdrjain.in/appointment/";

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Happy Patient",
    avatar: "https://askdrjain.in/wp-content/uploads/2023/12/1-1.png",
    rating: 5,
    title: "Happy Patient",
    text: "I can’t express how grateful I am for the guidance and support I received from Dr. Sankalp Jain. His expertise and personalized approach made me feel comfortable discussing my concerns. The consultation was enlightening, and I’m already seeing positive changes in my life. Thank you, Dr. Jain, for making a real difference!"
  },
  {
    id: "review-2",
    name: "Happy Patient",
    avatar: "https://askdrjain.in/wp-content/uploads/2023/12/2-2.png",
    rating: 5,
    title: "Happy Patient",
    text: "Dr. Sankalp Jain is a true professional who understands the delicate nature of sexual health issues. The 1-to-1 consultation was comprehensive and tailored to my needs. His recommendations were practical and effective. I highly recommend AskDrJain.com for anyone seeking genuine support in this area."
  },
  {
    id: "review-3",
    name: "Happy Patient",
    avatar: "https://askdrjain.in/wp-content/uploads/2023/12/3-1.png",
    rating: 5,
    title: "Happy Patient",
    text: "I was initially hesitant about seeking help for my sexual health concerns, but Dr. Sankalp Jain’s approach instantly put me at ease. The consultation was not only informative but also empowering. I appreciate the commitment to privacy and the personalized care provided. Thank you for the positive impact on my life"
  },
  {
    id: "review-4",
    name: "Happy Patient",
    avatar: "https://askdrjain.in/wp-content/uploads/2023/12/4-1.png",
    rating: 5,
    title: "Happy Patient",
    text: "Booking a consultation with Dr. Sankalp Jain was one of the best decisions I made for my well-being. His understanding and knowledge are evident, and the advice provided was valuable. The entire process, from booking to the actual consultation, was seamless and confidential. I’m grateful for the support I received."
  },
  {
    id: "review-5",
    name: "Happy Patient",
    avatar: "https://askdrjain.in/wp-content/uploads/2023/12/5-1.png",
    rating: 5,
    title: "Happy Patient",
    text: "Dr. Sankalp Jain’s professionalism and expertise in sexual health matters are commendable. The 1-to-1 consultation exceeded my expectations. He not only addressed my concerns but also empowered me with knowledge and actionable steps. Choosing AskDrJain.com was a game-changer for me, and I highly recommend their services."
  }
];

export const FAQS = [
  {
    question: "Will anyone find out about my consultation?",
    answer: "Absolutely not. Your consultation is 100% private, discreet, and protected by strict doctor-patient medical confidentiality. Even your payment receipt or prescription carries no awkward or sensitive names."
  },
  {
    question: "Can I consult online from my home?",
    answer: "Yes! While Dr. Sankalp Jain operates two physical clinics in Lucknow (Hazratganj & Charbagh), more than 75% of patients consult through private, secure online video or voice consultations from the comfort of their home across India and globally."
  },
  {
    question: "What is included in the ₹1,100 consultation?",
    answer: "You receive a full 45-minute private one-to-one consultation directly with Dr. Sankalp Jain (no junior doctors), a root-cause scientific diagnosis, a personalized roadmap, and 3 free digital bonus blueprints worth ₹6,000."
  },
  {
    question: "How does the Money-Back Guarantee work?",
    answer: "If after the 45-minute session you feel you did not receive a clear, scientific action plan and compassionate guidance for your concern, you get 100% of your ₹1,100 consultation fee refunded—no questions asked."
  },
  {
    question: "How soon can I get an appointment slot?",
    answer: "Because Dr. Jain limits consultations to only 20 patients per day to ensure dedicated attention, slots are filled quickly. Typically, appointments are scheduled within 24 to 48 hours of booking."
  }
];

export const DOCTOR_CREDENTIALS: DoctorCredential[] = [
  {
    id: "cred-1",
    image: "https://askdrjain.in/wp-content/uploads/2025/11/Untitled-design-51.png",
    alt: "Medical Qualification and Certification"
  },
  {
    id: "cred-2",
    image: "https://askdrjain.in/wp-content/uploads/2024/12/Home-Doctors-573-X-658-12.png",
    alt: "Sexology Expert Experience"
  },
  {
    id: "cred-3",
    image: "https://askdrjain.in/wp-content/uploads/2024/12/Home-Doctors-573-X-658-13-1.png",
    alt: "Psychosexual Therapy Specialist"
  },
  {
    id: "cred-4",
    image: "https://askdrjain.in/wp-content/uploads/2024/12/Home-Doctors-573-X-658-14.png",
    alt: "Verified Health Care Practitioner"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    image: "https://askdrjain.in/wp-content/uploads/2023/12/2-1.png",
    alt: "Free Bonus 1 worth ₹2000"
  },
  {
    id: "bonus-2",
    image: "https://askdrjain.in/wp-content/uploads/2023/12/3.png",
    alt: "Free Bonus 2 worth ₹2000"
  },
  {
    id: "bonus-3",
    image: "https://askdrjain.in/wp-content/uploads/2023/12/4.png",
    alt: "Free Bonus 3 worth ₹2000"
  }
];

export const ACCREDITATIONS: AccreditationLogo[] = [
  { id: "acc-1", name: "J", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/j-150x150.png" },
  { id: "acc-2", name: "I", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/i-150x150.png" },
  { id: "acc-3", name: "H", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/h-150x150.png" },
  { id: "acc-4", name: "G", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/g-150x150.png" },
  { id: "acc-5", name: "F", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/f-150x150.png" },
  { id: "acc-6", name: "A", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/a-150x150.png" },
  { id: "acc-7", name: "B", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/b-150x150.png" },
  { id: "acc-8", name: "CD", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/cd-150x150.png" },
  { id: "acc-9", name: "D", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/d-150x150.png" },
  { id: "acc-10", name: "E", imageUrl: "https://askdrjain.in/wp-content/uploads/2023/05/e-150x150.png" }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { id: "vid-1", youtubeId: "GcQQDWGeUL0", title: "Patient Review 1" },
  { id: "vid-2", youtubeId: "gCDhdaUqCEo", title: "Patient Review 2" },
  { id: "vid-3", youtubeId: "QXbCimhXOlU", title: "Patient Review 3" },
  { id: "vid-4", youtubeId: "ggZBMghIym8", title: "Patient Review 4" },
  { id: "vid-5", youtubeId: "Pe7dX0GcZIs", title: "Patient Review 5" },
  { id: "vid-6", youtubeId: "yUsUG-68QN8", title: "Patient Review 6" }
];

export const FINAL_CHECKLIST = [
  "Get answers to all your S.e.xual health questions",
  "Understand the root cause of the concern",
  "Get complete road map of your treatment journey"
];
