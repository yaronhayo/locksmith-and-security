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
    {
      name: "Robert P.",
      rating: 5,
      text: "Outstanding emergency service at 2 AM when I was locked out of my apartment. Professional and quick!",
      date: "1 month ago",
      service: "Emergency Lockout",
      location: "Hoboken, NJ"
    },
    {
      name: "Emily W.",
      rating: 5,
      text: "Had all my home locks rekeyed after moving in. Great service and very reasonable prices.",
      date: "1 month ago",
      service: "Lock Rekey",
      location: "Secaucus, NJ"
    },
    {
      name: "David H.",
      rating: 5,
      text: "Installed a new security system for my small business. Very knowledgeable and professional team.",
      date: "1 month ago",
      service: "Security System Installation",
      location: "West New York, NJ"
    },
    {
      name: "Maria G.",
      rating: 5,
      text: "Quick response for an emergency car lockout. Fair pricing and excellent service!",
      date: "2 months ago",
      service: "Car Lockout",
      location: "Guttenberg, NJ"
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: "Great experience with key duplication. Perfect copies and reasonable prices.",
      date: "2 months ago",
      service: "Key Duplication",
      location: "North Bergen, NJ"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Professional lock installation for my new office. Excellent work and great attention to detail.",
      date: "2 months ago",
      service: "Commercial Lock Installation",
      location: "Jersey City, NJ"
    },
    {
      name: "Michael S.",
      rating: 5,
      text: "Helped me with a broken key extraction from my front door. Fast and efficient service!",
      date: "2 months ago",
      service: "Lock Repair",
      location: "Union City, NJ"
    },
    {
      name: "Patricia A.",
      rating: 5,
      text: "Excellent service installing new smart locks in my home. Very knowledgeable about the latest technology.",
      date: "3 months ago",
      service: "Smart Lock Installation",
      location: "Weehawken, NJ"
    },
    {
      name: "Kevin M.",
      rating: 5,
      text: "Quick response to my emergency call when locked out of my car at the mall. Great service!",
      date: "3 months ago",
      service: "Car Lockout",
      location: "Secaucus, NJ"
    },
    {
      name: "Rachel D.",
      rating: 5,
      text: "Professional key programming for my new car. Works perfectly and saved me money compared to the dealer.",
      date: "3 months ago",
      service: "Car Key Programming",
      location: "Hoboken, NJ"
    },
    {
      name: "Steven W.",
      rating: 5,
      text: "Excellent work installing high-security locks for my business. Very professional and thorough.",
      date: "3 months ago",
      service: "Commercial Security",
      location: "Jersey City, NJ"
    },
    {
      name: "Amanda C.",
      rating: 5,
      text: "Fast response time for a late-night lockout. Very professional and reasonable prices.",
      date: "4 months ago",
      service: "Emergency Lockout",
      location: "North Bergen, NJ"
    },
    {
      name: "George R.",
      rating: 5,
      text: "Great experience with their mobile key cutting service. Very convenient and professional.",
      date: "4 months ago",
      service: "Mobile Key Cutting",
      location: "Union City, NJ"
    },
    {
      name: "Sandra P.",
      rating: 5,
      text: "Excellent service installing new locks after a break-in attempt. Made us feel secure again.",
      date: "4 months ago",
      service: "Emergency Lock Change",
      location: "West New York, NJ"
    },
    {
      name: "Brian K.",
      rating: 5,
      text: "Professional installation of a keypad entry system for my business. Works great!",
      date: "4 months ago",
      service: "Access Control System",
      location: "Guttenberg, NJ"
    },
    {
      name: "Laura M.",
      rating: 5,
      text: "Quick and efficient car key replacement service. Very reasonable prices too!",
      date: "5 months ago",
      service: "Car Key Replacement",
      location: "Weehawken, NJ"
    },
    {
      name: "Daniel F.",
      rating: 5,
      text: "Excellent work rekeying all the locks in my new home. Very thorough and professional.",
      date: "5 months ago",
      service: "Residential Rekey",
      location: "Jersey City, NJ"
    },
    {
      name: "Michelle H.",
      rating: 5,
      text: "Great experience with their safe unlocking service. Professional and knowledgeable.",
      date: "5 months ago",
      service: "Safe Unlocking",
      location: "Hoboken, NJ"
    },
    {
      name: "Christopher L.",
      rating: 5,
      text: "Installed a complete access control system for my apartment building. Excellent work!",
      date: "5 months ago",
      service: "Access Control Installation",
      location: "Union City, NJ"
    },
    {
      name: "Nicole B.",
      rating: 5,
      text: "Fast response to my emergency lockout situation. Very professional and helpful.",
      date: "6 months ago",
      service: "Emergency Lockout",
      location: "North Bergen, NJ"
    },
    {
      name: "William T.",
      rating: 5,
      text: "Great job installing new locks on all my rental properties. Very efficient service.",
      date: "6 months ago",
      service: "Property Management Locks",
      location: "Secaucus, NJ"
    },
    {
      name: "Elizabeth R.",
      rating: 5,
      text: "Excellent service programming a new key fob for my car. Works perfectly!",
      date: "6 months ago",
      service: "Key Fob Programming",
      location: "West New York, NJ"
    },
    {
      name: "James O.",
      rating: 5,
      text: "Professional installation of high-security locks for my jewelry store. Very satisfied!",
      date: "6 months ago",
      service: "Commercial Security",
      location: "Jersey City, NJ"
    },
    {
      name: "Karen M.",
      rating: 5,
      text: "Quick response to my emergency call when locked out of my house. Great service!",
      date: "6 months ago",
      service: "House Lockout",
      location: "Guttenberg, NJ"
    },
    {
      name: "Richard S.",
      rating: 5,
      text: "Excellent work installing a master key system for my office building. Very professional!",
      date: "7 months ago",
      service: "Master Key System",
      location: "Weehawken, NJ"
    }
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
          <h2 className="text-2xl font-bold text-primary mb-4">Share Your Experience</h2>
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
