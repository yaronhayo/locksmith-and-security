
import { carServiceReviews, residentialReviews, commercialReviews, isCarService, isResidentialService, isCommercialService } from './reviews';
import type { Review, ReviewsByCategory, ServiceCategory } from '@/types/reviews';

export const reviews: readonly Review[] = [
  ...carServiceReviews,
  ...residentialReviews,
  ...commercialReviews,
] as const;

export const getReviewsByCategory = (category: ServiceCategory): Review[] => {
  switch (category) {
    case 'car':
      return reviews.filter(review => isCarService(review.service));
    case 'residential':
      return reviews.filter(review => isResidentialService(review.service));
    case 'commercial':
      return reviews.filter(review => isCommercialService(review.service));
  }
};

export const reviewsByCategory: ReviewsByCategory = {
  car: getReviewsByCategory('car'),
  residential: getReviewsByCategory('residential'),
  commercial: getReviewsByCategory('commercial'),
};

export const getReviewsByLocation = (location: string): Review[] => {
  return reviews.filter(review => review.location.includes(location));
};
