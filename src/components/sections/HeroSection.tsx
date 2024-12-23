import BookingForm from "@/components/BookingForm";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;