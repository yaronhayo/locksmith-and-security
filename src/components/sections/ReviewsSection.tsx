import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const cardWidth = 384; // w-96 = 24rem = 384px
    const gap = 32; // gap-8 = 2rem = 32px
    const totalWidth = (cardWidth + gap) * reviews.length;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  // Filter reviews by location if provided
  const filteredReviews = location 
    ? reviews.filter(review => review.location.includes(location))
    : reviews;

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {location ? `Customer Reviews in ${location}` : 'Customer Reviews'}
        </h2>
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...filteredReviews, ...filteredReviews].map((review, index) => (
            <Card key={index} className="flex-none w-96 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-secondary" 
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="space-y-2">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.service}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;