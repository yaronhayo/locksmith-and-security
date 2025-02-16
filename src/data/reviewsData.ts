
import { carServiceReviews } from './reviews/carServiceReviews';
import { residentialReviews } from './reviews/residentialReviews';
import { commercialReviews } from './reviews/commercialReviews';
import type { Review } from '@/types/reviews';

export const reviews: readonly Review[] = [
  ...carServiceReviews,
  ...residentialReviews,
  ...commercialReviews,
] as const;
