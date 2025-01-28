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

export interface ServiceAreaProps {
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  schema: ServiceAreaSchema;
}

export interface ServiceFeature {
  icon: React.ComponentType;
  title: string;
  description: string;
}