import PageLayout from "@/components/layouts/PageLayout";
import { Star, ThumbsUp, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ReviewsPage = () => {
  const reviews = [
    {
      name: "John D.",
      rating: 5,
      text: "Excellent service! The technician arrived quickly and got me back into my car in no time. Very professional and friendly.",
      date: "2 days ago",
      service: "Car Lockout",
      location: "North Bergen, NJ"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "I was locked out of my house late at night, and they came to help within 30 minutes. Great service and reasonable prices!",
      date: "1 week ago",
      service: "House Lockout",
      location: "Jersey City, NJ"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Professional and reliable business locksmith services. They installed a new security system in our office, and we're very satisfied.",
      date: "2 weeks ago",
      service: "Business Lock Change",
      location: "Union City, NJ"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Fast response time and excellent work. They helped me with a car key replacement, and everything works perfectly.",
      date: "3 weeks ago",
      service: "New Car Key",
      location: "Weehawken, NJ"
    },
  ];

  return (
    <PageLayout
      title="Customer Reviews"
      description="See what our satisfied customers have to say about our locksmith services"
      heroTitle="Customer Testimonials"
      heroDescription="Read reviews from our valued customers in North Bergen and surrounding areas"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <p className="text-sm text-gray-500">{review.service}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center bg-gray-50 rounded-lg p-8">
          <ThumbsUp className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-6">
            We value your feedback! If you've used our services, please take a moment
            to share your experience.
          </p>
          <Button size="lg" variant="secondary">
            Write a Review
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;