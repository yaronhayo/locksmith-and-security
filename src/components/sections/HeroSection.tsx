import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-primary to-primary-hover">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-8">
          <div className="lg:w-1/2 space-y-8 text-white">
            <div 
              className="flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full w-fit group hover:bg-secondary/90 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-[1000ms] before:ease-in-out"
            >
              <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Top-Rated Local Locksmith</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Professional Locksmith Services in North Bergen
            </h1>
            
            <p className="text-xl opacity-90 leading-relaxed">
              Available 24/7 for all your residential, commercial, and automotive locksmith needs. Fast response and reliable service guaranteed. NJ DCA License #13VH13153100
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg group transform hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                asChild
              >
                <a href="tel:5513037874" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5 animate-phone-ring group-hover:rotate-12 transition-transform duration-300" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg bg-white/10 hover:bg-white/20 group transform hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                asChild
              >
                <a href="/services" className="inline-flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer">
                <Clock className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold">24/7 Service</h3>
                  <p className="text-sm">Always available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer">
                <Shield className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold">Licensed & Insured</h3>
                  <p className="text-sm">Your safety first</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer">
                <Star className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold">5-Star Rated</h3>
                  <p className="text-sm">Trusted service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Request Service</h2>
              <p className="text-gray-600 mt-2">Get a quick response from our team</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
