
import { carServiceReviews, residentialReviews, commercialReviews, emergencyReviews, isCarService, isResidentialService, isCommercialService, isEmergencyService } from './reviews';
import type { Review, ReviewsByCategory, ServiceCategory } from '@/types/reviews';

export const reviews: readonly Review[] = [
  ...carServiceReviews,
  ...residentialReviews,
  ...commercialReviews,
  ...emergencyReviews,
] as const;

const reviewsCache: Record<ServiceCategory, Review[]> = {
  'car': [],
  'residential': [],
  'commercial': [],
  'emergency': []
};

export const getReviewsByCategory = (category: ServiceCategory): Review[] => {
  if (reviewsCache[category].length > 0) {
    return reviewsCache[category];
  }
  
  switch (category) {
    case 'car':
      reviewsCache.car = reviews.filter(review => isCarService(review.service));
      return reviewsCache.car;
    case 'residential':
      reviewsCache.residential = reviews.filter(review => isResidentialService(review.service));
      return reviewsCache.residential;
    case 'commercial':
      reviewsCache.commercial = reviews.filter(review => isCommercialService(review.service));
      return reviewsCache.commercial;
    case 'emergency':
      reviewsCache.emergency = reviews.filter(review => isEmergencyService(review.service));
      return reviewsCache.emergency;
  }
};

export const reviewsByCategory: ReviewsByCategory = {
  car: getReviewsByCategory('car'),
  residential: getReviewsByCategory('residential'),
  commercial: getReviewsByCategory('commercial'),
  emergency: getReviewsByCategory('emergency')
};

const locationCache: Record<string, Review[]> = {};

export const getReviewsByLocation = (location: string): Review[] => {
  if (!location) return [];
  
  if (locationCache[location]) {
    return locationCache[location];
  }
  
  locationCache[location] = reviews.filter(review => 
    review.location.toLowerCase().includes(location.toLowerCase())
  );
  
  return locationCache[location];
};
