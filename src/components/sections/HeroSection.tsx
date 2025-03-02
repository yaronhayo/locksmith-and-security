
import { useState, useEffect, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroFeatures from "@/components/hero/HeroFeatures";
import HeroActions from "@/components/hero/HeroActions";

const words = ["Expert", "Quick", "Reliable"] as const;

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const rotateWords = useCallback(() => {
    setCurrentWord((prev) => (prev + 1) % words.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateWords, 1800);
    return () => clearInterval(interval);
  }, [rotateWords]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section 
      className="relative min-h-screen overflow-visible pt-16 pb-8 md:pt-20 md:pb-12 lg:pb-20"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <source 
            src="https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Background%20Video-%20Keys%20Getting%20into%20Ignition.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback gradient background while video loads */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary to-primary-hover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`} 
          aria-hidden="true"
        />
        
        {/* Overlay to darken video and improve text contrast */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" 
          aria-hidden="true"
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10 h-full flex items-start lg:items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full">
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
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
            
            <HeroTitle currentWord={currentWord} words={words} />

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Available 24/7 for all your residential, commercial, and automotive locksmith needs. Professional service and reliable solutions when you need them.
            </motion.p>

            <HeroActions />
            <HeroFeatures />
          </div>

          <motion.div 
            className="w-full lg:w-5/12 bg-white rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            role="complementary"
            aria-label="Request service form"
          >
            <div className="text-center mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Request Service</h2>
              <p className="text-sm text-gray-600 mt-1">Get a response from our team</p>
            </div>
            <BookingForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
