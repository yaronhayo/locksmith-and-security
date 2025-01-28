import { useEffect, useRef, useCallback, memo, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import ReviewsList from "@/components/reviews/ReviewsList";
import ReviewsHeader from "@/components/reviews/ReviewsHeader";

interface ReviewsSectionProps {
  location?: string;
}

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Called them at 2 AM when I was locked out of my car in North Bergen. The technician arrived in 20 minutes and had me back in my car quickly. Extremely professional and reasonable pricing.",
    service: "Emergency Car Lockout",
    location: "North Bergen, NJ",
    date: "Last week"
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Had all the locks changed in my new home. They were thorough in explaining the security options and completed the work efficiently. Great service!",
    service: "Residential Lock Change",
    location: "Jersey City, NJ",
    date: "2 weeks ago"
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "Installed a complete access control system for our office building. Their expertise in commercial security is impressive. Highly recommend for business security needs.",
    service: "Commercial Security Installation",
    location: "Union City, NJ",
    date: "1 month ago"
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "Lost my car keys and needed a replacement. They came to my location, programmed a new key, and had me back on the road in no time. Excellent mobile service!",
    service: "Car Key Programming",
    location: "Weehawken, NJ",
    date: "3 weeks ago"
  },
  {
    name: "James Wilson",
    rating: 5,
    text: "Regular maintenance service for our apartment complex. Always reliable, professional, and thorough. Great team to work with!",
    service: "Commercial Maintenance",
    location: "Hoboken, NJ",
    date: "1 month ago"
  },
  {
    name: "Lisa Rodriguez",
    rating: 5,
    text: "Quick response when I needed my locks rekeyed after losing my keys. Fair pricing and excellent workmanship. Will definitely use again!",
    service: "Lock Rekey",
    location: "Secaucus, NJ",
    date: "2 months ago"
  }
];

const ReviewsSection = ({ location }: ReviewsSectionProps) => {
  const [displayedReviews, setDisplayedReviews] = useState<typeof reviews[number][]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredReviews = location 
    ? reviews.filter(review => review.location.includes(location))
    : reviews;

  const loadMoreReviews = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    const newReviews = filteredReviews.slice(startIndex, endIndex);
    
    setTimeout(() => {
      if (newReviews.length > 0) {
        setDisplayedReviews(prev => [...prev, ...newReviews]);
        setPage(prev => prev + 1);
      }
      setIsLoading(false);
    }, 1500);
  }, [page, filteredReviews, isLoading]);

  useEffect(() => {
    setDisplayedReviews([]);
    setPage(1);
  }, [location]);

  useEffect(() => {
    loadMoreReviews();
  }, [loadMoreReviews]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreReviews();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreReviews, isLoading]);

  return (
    <section 
      className="py-20 overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4">
        <ReviewsHeader location={location} />
        <ReviewsList reviews={reviews} displayedReviews={displayedReviews} />
        <div ref={loadingRef} className="h-10">
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </section>
  );
};

export default memo(ReviewsSection);
