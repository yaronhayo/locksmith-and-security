
import { LucideIcon } from 'lucide-react';

export interface ServiceAreaLocation {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
  title?: string;
}

export interface ServiceAreaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MapMarker {
  lat: number;
  lng: number;
  title: string;
  slug?: string;
}

export interface MapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}
