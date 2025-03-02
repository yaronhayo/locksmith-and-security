
export * from './carServiceReviews';
export * from './residentialReviews';
export * from './commercialReviews';
export * from './emergencyReviews';
import { SERVICE_TYPES } from '@/types/reviews';

export const isCarService = (service: string): boolean => {
  return SERVICE_TYPES[service]?.category === 'car';
};

export const isResidentialService = (service: string): boolean => {
  return SERVICE_TYPES[service]?.category === 'residential';
};

export const isCommercialService = (service: string): boolean => {
  return SERVICE_TYPES[service]?.category === 'commercial';
};

export const isEmergencyService = (service: string): boolean => {
  return SERVICE_TYPES[service]?.category === 'emergency';
};
