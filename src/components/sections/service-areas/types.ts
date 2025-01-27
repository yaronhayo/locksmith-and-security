import { LucideIcon } from 'lucide-react';

export interface Area {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MapMarker {
  lat: number;
  lng: number;
  title: string;
  slug: string;
}