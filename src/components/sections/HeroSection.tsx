import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary to-primary-hover pt-16 pb-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 bg-secondary/90 text-white px-4 py-2 rounded-full w-fit animate-float">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Top-Rated Local Locksmith</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              Professional Locksmith Services in North Bergen
            </h1>
            
            <p className="text-lg opacity-90 leading-relaxed text-white">
              Available 24/7 for all your residential, commercial, and automotive locksmith needs. Fast response and reliable service guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg group" asChild>
                <a href="tel:5513037874">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 group" asChild>
                <a href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center space-x-3 text-white/90">
                <Clock className="w-8 h-8 text-secondary" />
                <div>
                  <h3 className="font-semibold">24/7 Service</h3>
                  <p className="text-sm">Always available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Shield className="w-8 h-8 text-secondary" />
                <div>
                  <h3 className="font-semibold">Licensed & Insured</h3>
                  <p className="text-sm">Your safety first</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Star className="w-8 h-8 text-secondary" />
                <div>
                  <h3 className="font-semibold">5-Star Rated</h3>
                  <p className="text-sm">Trusted service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Request Service</h2>
              <p className="text-gray-600 mt-1">Get a quick response from our team</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;