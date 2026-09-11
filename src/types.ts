export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  text: string;
}

export interface BonusItem {
  id: string;
  image: string;
  alt: string;
}

export interface DoctorCredential {
  id: string;
  image: string;
  alt: string;
}

export interface VideoTestimonial {
  id: string;
  youtubeId: string;
  title?: string;
}

export interface AccreditationLogo {
  id: string;
  name: string;
  imageUrl: string;
}
