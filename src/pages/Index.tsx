import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Car, Building2, Key, Star, Clock, Shield } from "lucide-react";

const Index = () => {
  const services = [
    { icon: Lock, title: "House Lockout", description: "Quick access restoration to your home" },
    { icon: Car, title: "Car Lockout", description: "Fast vehicle lockout assistance" },
    { icon: Building2, title: "Business Lockout", description: "Commercial security solutions" },
    { icon: Key, title: "Lock Change", description: "Complete lock replacement service" }
  ];

  const process = [
    { icon: Clock, title: "Contact Us", description: "Call or fill out our form" },
    { icon: Car, title: "Quick Response", description: "We'll arrive within 30 minutes" },
    { icon: Shield, title: "Problem Solved", description: "Professional service guaranteed" }
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
              <a href="/about">Learn More About Us</a>
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
                  <p className="text-gray-600">{service.description}</p>
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