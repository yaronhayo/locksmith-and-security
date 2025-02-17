
import { LucideIcon } from 'lucide-react';

export interface ServiceAreaLocation {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
  title: string;
}

export interface ServiceAreaService {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
}

export interface ServiceAreaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}
