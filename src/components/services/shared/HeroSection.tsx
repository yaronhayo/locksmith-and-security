
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Check, Phone, Calendar } from 'lucide-react';
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
    <section className="py-12 lg:py-20 bg-gradient-to-b from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 bg-secondary/90 text-white rounded-full text-sm font-medium mb-4">
              {categoryName} Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8 text-white/90">{heroSubtitle}</p>
            
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 bg-secondary/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (201) 748-2070
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Service
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-white/80 mt-4 space-x-6">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>5-Star Service</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-5"
          >
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Request {categoryName} Service</h2>
              <p className="text-sm text-gray-600">We'll respond quickly to your request</p>
            </div>
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
