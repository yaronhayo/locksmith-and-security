
import { carServiceReviews, residentialReviews, commercialReviews, emergencyReviews, isCarService, isResidentialService, isCommercialService, isEmergencyService } from './reviews';
import type { Review, ReviewsByCategory, ServiceCategory } from '@/types/reviews';

// Combine all review types
export const reviews: Review[] = [
  ...carServiceReviews,
  ...residentialReviews,
  ...commercialReviews,
  ...emergencyReviews,
];

// Generate additional reviews to reach 150 total if needed
const generateAdditionalReviews = (): Review[] => {
  const serviceTypes = [
    'Car Lockout', 'Car Key Programming', 'Car Key Replacement',
    'House Lockout', 'Residential Lock Change', 'Lock Rekey', 'Lock Repair',
    'Security Upgrade', 'Smart Lock Installation', 'Emergency Lock Change',
    'Commercial Security Installation', 'Commercial Lock Repair',
    'Master Key System', 'Access Control System', 'Emergency Car Lockout',
    '24/7 Lockout Service', 'Emergency House Lockout'
  ];
  
  const locations = [
    'North Bergen, NJ', 'Jersey City, NJ', 'Hoboken, NJ', 'Weehawken, NJ',
    'Union City, NJ', 'West New York, NJ', 'Secaucus, NJ', 'Guttenberg, NJ'
  ];
  
  const reviewTexts = [
    "Outstanding service! They arrived quickly and solved my problem efficiently. Highly recommend!",
    "Professional and courteous service. They explained everything before doing the work. Fair pricing too.",
    "Saved me when I was locked out in the middle of the night. Fast response and expert service.",
    "Great experience from start to finish. The technician was knowledgeable and friendly.",
    "Excellent work replacing my locks. They were thorough and made sure everything was working perfectly.",
    "Prompt and reliable service. They were at my door within 30 minutes of my call.",
    "Helped me with a tricky car key issue that other locksmiths couldn't solve. Very impressive!",
    "Their emergency service is truly 24/7. Called at 3am and they still came promptly.",
    "Installed a security system for my business and did an outstanding job. Very professional team.",
    "Best locksmith in the area! Have used them multiple times and always great service.",
    "They programmed a new key for my car quickly and at a fair price. Very satisfied!",
    "The technician was skilled and efficient with my lock rekey. Explained the process clearly.",
    "Fantastic service fixing our commercial door locks. Minimal disruption to our business.",
    "Helped me when my key broke in the lock. Quick response and professional service.",
    "Their smart lock installation was perfect. They even took time to show me how to use the app."
  ];
  
  const additionalReviews: Review[] = [];
  const neededCount = 150 - reviews.length;
  
  if (neededCount <= 0) return [];
  
  for (let i = 0; i < neededCount; i++) {
    const name = `Customer ${reviews.length + i + 1}`;
    const service = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const text = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
    const rating = Math.floor(Math.random() * 2) + 4; // Ratings between 4-5
    const date = new Date(Date.now() - Math.random() * 31536000000).toISOString().split('T')[0]; // Random date within last year
    
    additionalReviews.push({
      name,
      rating,
      text,
      service,
      location,
      date
    });
  }
  
  return additionalReviews;
};

// Combine original reviews with additional generated ones to reach 150
export const allReviews: Review[] = [
  ...reviews,
  ...generateAdditionalReviews()
];

// Cache for categorized reviews
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
      reviewsCache.car = allReviews.filter(review => isCarService(review.service));
      return reviewsCache.car;
    case 'residential':
      reviewsCache.residential = allReviews.filter(review => isResidentialService(review.service));
      return reviewsCache.residential;
    case 'commercial':
      reviewsCache.commercial = allReviews.filter(review => isCommercialService(review.service));
      return reviewsCache.commercial;
    case 'emergency':
      reviewsCache.emergency = allReviews.filter(review => isEmergencyService(review.service));
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
  
  locationCache[location] = allReviews.filter(review => 
    review.location.toLowerCase().includes(location.toLowerCase())
  );
  
  return locationCache[location];
};
