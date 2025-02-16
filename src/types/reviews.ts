
export type ServiceCategory = 'car' | 'residential' | 'commercial';

export interface Review {
  name: string;
  rating: number;
  text: string;
  service: string;
  location: string;
  date: string;
}

export interface ReviewsByCategory {
  car: Review[];
  residential: Review[];
  commercial: Review[];
}
