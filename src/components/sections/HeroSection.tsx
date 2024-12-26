import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-primary to-primary-hover py-20 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            24/7 Emergency Locksmith Services in North Bergen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Professional locksmith services available around the clock. Fast response times and competitive rates.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4"
            role="group"
            aria-label="Contact options"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-3"
            >
              <a 
                href="tel:5513037874"
                className="inline-flex items-center gap-2"
                aria-label="Call us now at 551-303-7874"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>(551) 303-7874</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-6 py-3"
            >
              <a 
                href="/booking"
                className="inline-flex items-center gap-2"
                aria-label="Book service online"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Book Online</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;