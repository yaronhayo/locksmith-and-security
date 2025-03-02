
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Check, MapPin, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';

interface HeroSectionProps {
  title: string;
  heroSubtitle: string;
  categoryName: string;
  keyPoints: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  heroSubtitle,
  categoryName,
  keyPoints
}) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary-hover">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-[5%] right-[10%] w-80 h-80 rounded-full bg-secondary/15 blur-3xl"></div>
        <div className="absolute top-[40%] right-[15%] w-40 h-40 rounded-full bg-white/5 blur-xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Shield className="h-5 w-5 mr-2 text-secondary" />
              <span className="text-white/90 font-medium">{categoryName} Services</span>
            </div>
            
            {/* Title and Subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {heroSubtitle}
            </p>
            
            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 p-1 bg-secondary/20 rounded-full mt-1 mr-3">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-white/90">{point}</p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-primary font-semibold shadow-md group"
                asChild
              >
                <a href="tel:2017482070" className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  <span>Call Now</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 hover:bg-white/10 text-white shadow-md group"
                asChild
              >
                <Link to="/book-online" className="flex items-center">
                  <span>Book Online</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center text-white/80">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="ml-2">5-Star Service</span>
              </div>
              
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Local Professionals</span>
              </div>
              
              <div className="flex items-center text-white/80">
                <Clock className="h-4 w-4 mr-2" />
                <span>Fast Response</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/30 rounded-xl blur-xl transform -rotate-3"></div>
            <div className="bg-white rounded-xl shadow-2xl p-6 relative z-10">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-bold text-primary mb-1">Request {categoryName} Service</h2>
                <p className="text-sm text-gray-600">Fill out the form below for quick assistance</p>
              </div>
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
