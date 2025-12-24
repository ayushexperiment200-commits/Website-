export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  isNew: boolean;
}

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
}

export enum SectionType {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  ACADEMICS = 'ACADEMICS',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT'
}