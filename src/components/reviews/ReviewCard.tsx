
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Review } from "@/types/reviews";
import { SchemaScripts } from "../meta/SchemaScripts";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  // Create review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": review.location,
        "addressRegion": "NJ",
        "addressCountry": "US"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "name": `Review by ${review.name}`,
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewBody": review.text,
    "datePublished": review.date
  };

  return (
    <>
      <SchemaScripts schemas={[{ type: 'Review', data: reviewSchema }]} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">{review.rating} out of 5 stars</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground italic">{review.text}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{review.service}</span>
                <time dateTime={review.date}>{review.date}</time>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default ReviewCard;
