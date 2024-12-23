import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary" fill="currentColor" />
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