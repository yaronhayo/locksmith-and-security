import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "John D.",
    rating: 5,
    text: "Fast and professional service. Got me back into my car in no time!",
    service: "Car Lockout",
    location: "North Bergen, NJ"
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Excellent emergency locksmith service. Very responsive and professional.",
    service: "House Lockout",
    location: "Jersey City, NJ"
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Great experience with their business locksmith services. Highly recommend!",
    service: "Business Lock Change",
    location: "Union City, NJ"
  },
  {
    name: "Lisa K.",
    rating: 5,
    text: "They helped me with a car key replacement and everything works perfectly!",
    service: "Car Key Replacement",
    location: "Weehawken, NJ"
  },
  {
    name: "Robert P.",
    rating: 5,
    text: "Outstanding emergency service at 2 AM. Professional and quick!",
    service: "Emergency Lockout",
    location: "Hoboken, NJ"
  },
  {
    name: "Emily W.",
    rating: 5,
    text: "Had all my home locks rekeyed. Great service and reasonable prices.",
    service: "Lock Rekey",
    location: "Secaucus, NJ"
  }
];

const ReviewsSection = () => {
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

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <Card key={index} className="flex-none w-96 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-secondary" 
                      fill="currentColor"
                      loading="lazy"
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