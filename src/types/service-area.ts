
import { LucideIcon } from 'lucide-react';

export interface ServiceAreaLocation {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
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

export interface ServiceAreaSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
    telephone: string;
    areaServed: {
      "@type": "City";
      name: string;
      containedIn: {
        "@type": "State";
        name: string;
      };
    };
  };
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: string;
      longitude: string;
    };
    geoRadius: string;
  };
  review?: {
    "@type": "Review";
    reviewRating: {
      "@type": "Rating";
      ratingValue: string;
      bestRating: string;
    };
    author: {
      "@type": "Person";
      name: string;
    };
    reviewBody: string;
  };
}
