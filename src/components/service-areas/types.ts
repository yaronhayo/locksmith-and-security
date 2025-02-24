
export interface ServiceAreaFeature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface ServiceAreaLocation {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
  title: string;
}

export interface ServiceAreaInfoProps {
  location: ServiceAreaLocation;
}

export interface ServiceAreaHeroProps {
  location: ServiceAreaLocation;
}

export interface ServiceAreaLayoutProps {
  location: ServiceAreaLocation;
  children: React.ReactNode;
}
