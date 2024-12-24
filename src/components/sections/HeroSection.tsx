import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-primary to-primary-hover py-4"
      role="banner"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 w-full">
          <div className="lg:w-1/2 space-y-4">
            <div 
              className="flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full w-fit group hover:bg-secondary/90 transition-all duration-300 relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #FFA500, #FFA500)',
                backgroundSize: '200% 100%',
                backgroundRepeat: 'no-repeat'
              }}
              role="status"
              aria-label="Top-rated local locksmith"
            >
              <Star className="w-5 h-5 transition-transform duration-300" aria-hidden="true" />
              <span className="text-sm font-medium">Top-Rated Local Locksmith</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
              Professional Locksmith Services in North Bergen
            </h1>
            
            <p className="text-lg opacity-90 leading-relaxed text-white">
              Available 24/7 for all your residential, commercial, and automotive locksmith needs. Fast response and reliable service guaranteed. NJ DCA License #13VH13153100
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg group transform hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                asChild
                aria-label="Call us now"
              >
                <a href="tel:5513037874" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5 animate-phone-ring group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg bg-white/10 hover:bg-white/20 group transform hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                asChild
                aria-label="View our services"
              >
                <a href="/services" className="inline-flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                </a>
              </Button>
            </div>

            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              role="list"
              aria-label="Key features"
            >
              <div 
                className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer"
                role="listitem"
              >
                <Clock className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">24/7 Service</h3>
                  <p className="text-sm">Always available</p>
                </div>
              </div>
              <div 
                className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer"
                role="listitem"
              >
                <Shield className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Licensed & Insured</h3>
                  <p className="text-sm">Your safety first</p>
                </div>
              </div>
              <div 
                className="flex items-center space-x-3 text-white/90 group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer"
                role="listitem"
              >
                <Star className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">5-Star Rated</h3>
                  <p className="text-sm">Trusted service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="lg:w-[45%] bg-white rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 overflow-y-auto"
            style={{ maxHeight: '82vh' }}
            role="complementary"
            aria-label="Request service form"
          >
            <div className="text-center mb-2">
              <h2 className="text-lg font-bold text-gray-900">Request Service</h2>
              <p className="text-gray-600 mt-0.5 text-sm">Get a quick response from our team</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;