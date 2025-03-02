
export type ServiceCategory = 'car' | 'residential' | 'commercial' | 'emergency';

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
  emergency: Review[];
}

export type ServiceType = {
  name: string;
  category: ServiceCategory;
};

export const SERVICE_TYPES: Record<string, ServiceType> = {
  'Car Lockout': { name: 'Car Lockout', category: 'car' },
  'Car Key Programming': { name: 'Car Key Programming', category: 'car' },
  'Car Key Replacement': { name: 'Car Key Replacement', category: 'car' },
  'House Lockout': { name: 'House Lockout', category: 'residential' },
  'Residential Lock Change': { name: 'Residential Lock Change', category: 'residential' },
  'Lock Rekey': { name: 'Lock Rekey', category: 'residential' },
  'Lock Repair': { name: 'Lock Repair', category: 'residential' },
  'Security Upgrade': { name: 'Security Upgrade', category: 'residential' },
  'Smart Lock Installation': { name: 'Smart Lock Installation', category: 'residential' },
  'Emergency Lock Change': { name: 'Emergency Lock Change', category: 'residential' },
  'Residential Rekey': { name: 'Residential Rekey', category: 'residential' },
  'Property Management Locks': { name: 'Property Management Locks', category: 'residential' },
  'Commercial Security Installation': { name: 'Commercial Security Installation', category: 'commercial' },
  'Commercial Maintenance': { name: 'Commercial Maintenance', category: 'commercial' },
  'Commercial Security': { name: 'Commercial Security', category: 'commercial' },
  'Master Key System': { name: 'Master Key System', category: 'commercial' },
  'Access Control System': { name: 'Access Control System', category: 'commercial' },
  'Commercial Lock Installation': { name: 'Commercial Lock Installation', category: 'commercial' },
  'Commercial Lock Repair': { name: 'Commercial Lock Repair', category: 'commercial' },
  'Emergency Car Lockout': { name: 'Emergency Car Lockout', category: 'emergency' },
  '24/7 Lockout Service': { name: '24/7 Lockout Service', category: 'emergency' },
  'Emergency House Lockout': { name: 'Emergency House Lockout', category: 'emergency' },
  'Emergency Business Lockout': { name: 'Emergency Business Lockout', category: 'emergency' }
};
