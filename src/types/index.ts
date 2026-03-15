// Global TypeScript types for Blackfin Construction & Painting

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  headline: string;
  subheadline: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  telephone: string;
  email: string;
  subject: string;
  message: string;
}

export interface SectionProps {
  className?: string;
}
