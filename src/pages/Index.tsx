import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Car, Building2, Key, Star, Clock, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    { icon: Lock, title: "House Lockout", description: "Quick access restoration to your home", link: "/services/house-lockout" },
    { icon: Car, title: "Car Lockout", description: "Fast vehicle lockout assistance", link: "/services/car-lockout" },
    { icon: Building2, title: "Business Lockout", description: "Commercial security solutions", link: "/services/business-lockout" },
    { icon: Key, title: "Lock Change", description: "Complete lock replacement service", link: "/services/lock-change" }
  ];

  const process = [
    { icon: Clock, title: "Contact Us", description: "Call or fill out our form for immediate assistance" },
    { icon: Car, title: "Quick Response", description: "Our technician will arrive within 30 minutes" },
    { icon: Shield, title: "Problem Solved", description: "Professional service with satisfaction guaranteed" }
  ];

  const reviews = [
    {
      name: "John D.",
      rating: 5,
      text: "Fast and professional service. Got me back into my car in no time!"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "Excellent emergency locksmith service. Very responsive and professional."
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Great experience with their business locksmith services. Highly recommend!"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you arrive?",
      answer: "We typically arrive within 30 minutes of your call in the North Bergen area."
    },
    {
      question: "Do you provide 24/7 emergency service?",
      answer: "Yes, we offer round-the-clock emergency locksmith services."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured for your peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold">
                24/7 Emergency Locksmith Services in North Bergen
              </h1>
              <p className="text-xl opacity-90">
                Professional, reliable, and fast locksmith services when you need them most.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="text-secondary w-5 h-5" />
                  <Star className="text-secondary w-5 h-5" />
                  <Star className="text-secondary w-5 h-5" />
                  <Star className="text-secondary w-5 h-5" />
                  <Star className="text-secondary w-5 h-5" />
                </div>
                <span>Trusted by 1000+ customers</span>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-lg">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Your Trusted Local Locksmith</h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience serving North Bergen and surrounding areas, we provide professional locksmith services for residential, commercial, and automotive needs.
            </p>
            <Button asChild>
              <a href="/about">Learn More About Us <ArrowRight className="ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="secondary">
                    <a href={service.link}>Learn More <ArrowRight className="ml-2" /></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <step.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-semibold">24/7 Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-primary" />
              <span className="font-semibold">5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;