import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Expert", "Quick", "Reliable"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-primary to-primary-hover overflow-hidden pt-20 pb-12 lg:pb-20"
      role="banner"
      aria-label="Hero section"
    >
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" 
        aria-hidden="true"
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10 h-full flex items-start lg:items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full">
          <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-white">
            <motion.div 
              className="flex items-center space-x-2 bg-secondary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full w-fit group hover:bg-secondary transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              role="status"
              aria-label="Top-rated local locksmith"
            >
              <Star className="w-5 h-5 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium">Top-Rated Local Locksmith</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4 lg:gap-8">
                <div className="w-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWord]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-secondary block"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-white">Locksmith</span>
              </div>
              <div className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl">Services in North Bergen</div>
            </motion.h1>

            <motion.p 
              className="subtitle text-white/90 leading-relaxed text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Available 24/7 for all your residential, commercial, and automotive locksmith needs. Fast response and reliable service guaranteed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg group transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden" 
                asChild
                aria-label="Call us now"
              >
                <a href="tel:5513037874" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5 animate-phone-ring group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                  <span className="relative z-10">Call Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg bg-white/10 hover:bg-white/20 group transform hover:scale-105 transition-all duration-300 hover:shadow-lg backdrop-blur-sm" 
                asChild
                aria-label="View our services"
              >
                <a href="/services" className="inline-flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              role="list"
              aria-label="Key features"
            >
              <div 
                className="flex items-center space-x-3 text-white group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer backdrop-blur-sm bg-white/5 p-3 rounded-lg"
                role="listitem"
              >
                <Clock className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-white">24/7 Service</h3>
                  <p className="text-sm text-white">Always available</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-3 text-white group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer backdrop-blur-sm bg-white/5 p-3 rounded-lg"
                role="listitem"
              >
                <Shield className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-white">Licensed & Insured</h3>
                  <p className="text-sm text-white">Your safety first</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-3 text-white group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer backdrop-blur-sm bg-white/5 p-3 rounded-lg"
                role="listitem"
              >
                <Star className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-white">5-Star Rated</h3>
                  <p className="text-sm text-white">Trusted service</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="lg:w-5/12 w-full bg-white rounded-2xl p-6 lg:p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            role="complementary"
            aria-label="Request service form"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Request Service</h2>
              <p className="text-gray-600 mt-2">Get a quick response from our team</p>
            </div>
            <BookingForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
