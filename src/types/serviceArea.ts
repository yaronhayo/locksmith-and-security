export interface ServiceArea {
  id: string;
  name: string;
  slug: string;
  description: string;
  services: Service[];
  features: Feature[];
  coverage: Coverage;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Coverage {
  latitude: number;
  longitude: number;
  radius: number;
  neighborhoods: string[];
}

export interface ServiceAreaProps {
  area: ServiceArea;
  services?: Service[];
  features?: Feature[];
}