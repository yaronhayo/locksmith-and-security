
import React from 'react';
import { Star } from 'lucide-react';

export interface ServiceReviewStarsProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
}

const ServiceReviewStars: React.FC<ServiceReviewStarsProps> = ({ 
  rating, 
  reviewCount, 
  size = 'md' 
}) => {
  const stars = Array(5).fill(0);
  
  // Size classes for different star sizes
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  return (
    <div className="flex items-center">
      <div className="flex mr-2">
        {stars.map((_, index) => (
          <Star 
            key={index} 
            className={`${sizeClasses[size]} ${index < Math.floor(rating) 
              ? 'text-secondary fill-secondary' 
              : index < rating 
                ? 'text-secondary fill-secondary/50' 
                : 'text-gray-300'}`} 
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-sm text-gray-600">
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default ServiceReviewStars;
