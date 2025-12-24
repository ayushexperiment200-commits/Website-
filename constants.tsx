import { GraduationCap, Users, Trophy, BookOpen, Clock, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { NavItem, Feature, Stat, Notice } from './types';

export const SCHOOL_NAME = "St. Joseph's English Medium Senior Secondary School";
export const SCHOOL_LOCATION = "Mahoba, Uttar Pradesh";
export const SCHOOL_AFFILIATION = "Affiliated to C.B.S.E., New Delhi";
export const CONTACT_PHONE = "+91 123 456 7890";
export const CONTACT_EMAIL = "info@stjosephmahoba.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/1920/1080?random=1',
    title: 'Excellence in Education',
    subtitle: 'Empowering students to lead with character and knowledge.'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=2',
    title: 'Holistic Development',
    subtitle: 'Nurturing mind, body, and spirit in a vibrant environment.'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=3',
    title: 'State-of-the-Art Facilities',
    subtitle: 'Modern labs, libraries, and sports complexes for the future leaders.'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Expert Faculty',
    description: 'Highly qualified and dedicated teachers mentoring the next generation.',
    icon: <Users className="w-6 h-6 text-gold-500" />
  },
  {
    title: 'Modern Curriculum',
    description: 'CBSE curriculum integrated with modern teaching methodologies and technology.',
    icon: <BookOpen className="w-6 h-6 text-gold-500" />
  },
  {
    title: 'Sports & Arts',
    description: 'Extensive focus on physical education, music, dance, and creative arts.',
    icon: <Trophy className="w-6 h-6 text-gold-500" />
  },
  {
    title: 'Values Based',
    description: 'Instilling moral values, discipline, and social responsibility.',
    icon: <GraduationCap className="w-6 h-6 text-gold-500" />
  }
];

export const STATS: Stat[] = [
  { label: 'Students', value: '2500', suffix: '+' },
  { label: 'Teachers', value: '120', suffix: '+' },
  { label: 'Years of Excellence', value: '25', suffix: '+' },
  { label: 'Pass Percentage', value: '100', suffix: '%' },
];

export const NOTICES: Notice[] = [
  { id: '1', date: 'Oct 24, 2023', title: 'Half-Yearly Examination Schedule Released', isNew: true },
  { id: '2', date: 'Oct 20, 2023', title: 'Annual Sports Day Registration Open', isNew: true },
  { id: '3', date: 'Oct 15, 2023', title: 'Parent-Teacher Meeting for Classes X & XII', isNew: false },
  { id: '4', date: 'Oct 10, 2023', title: 'Winter Uniform Guidelines', isNew: false },
];

export const PRINCIPAL_MSG = `
  "Education is not just about filling the mind with information, but about lighting a fire. 
  At St. Joseph's, we believe in the transformative power of education. Our goal is to create 
  compassionate, responsible, and innovative global citizens. We strive to provide an environment 
  where every child feels valued and inspired to achieve their full potential. Welcome to a journey of learning and growth."
`;