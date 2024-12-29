import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useCallback, memo, useState, useMemo } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useInView } from "react-intersection-observer";

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

const ReviewCard = memo(({ review, index }: { review: typeof reviews[number]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && (
        <Card className="flex-none w-96 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-secondary" 
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
              <span className="sr-only">{review.rating} out of 5 stars</span>
            </div>
            <p className="text-gray-600 mb-4">{review.text}</p>
            <div className="space-y-2">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.service}</p>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

const ReviewsSection = memo(({ location }: ReviewsSectionProps) => {
  const [displayedReviews, setDisplayedReviews] = useState<typeof reviews[number][]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredReviews = useMemo(() => 
    location ? reviews.filter(review => review.location.includes(location)) : reviews,
    [location]
  );

  const loadMoreReviews = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    const newReviews = filteredReviews.slice(startIndex, endIndex);
    
    requestAnimationFrame(() => {
      if (newReviews.length > 0) {
        setDisplayedReviews(prev => [...prev, ...newReviews]);
        setPage(prev => prev + 1);
      }
      setIsLoading(false);
    });
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

  const scroll = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1;
    scrollContainer.scrollLeft = (scrollContainer.scrollLeft + scrollAmount) % 
      ((384 + 32) * displayedReviews.length); // cardWidth + gap
  }, [displayedReviews.length]);

  useEffect(() => {
    const intervalId = requestAnimationFrame(function animate() {
      scroll();
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(intervalId);
  }, [scroll]);

  return (
    <section 
      className="py-20 overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {location ? `Customer Reviews in ${location}` : 'Customer Reviews'}
        </h2>
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
          role="region"
          aria-label="Reviews carousel"
        >
          {[...displayedReviews, ...displayedReviews].map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
        <div ref={loadingRef} className="h-10">
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;