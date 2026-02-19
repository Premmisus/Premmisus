import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  value: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}