
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Star, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCategory } from "@/types/reviews";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "@/utils/inputValidation";

interface CategoryHeroProps {
  title: string;
  description: string;
  category: ServiceCategory;
  features: {
    title: string;
    description: string;
  }[];
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ 
  title, 
  description, 
  category,
  features
}) => {
  const finishRenderTracking = trackComponentRender('CategoryHero');
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    finishRenderTracking();
  }, [finishRenderTracking]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;
    
    setIsSubmitting(true);
    
    // Store form data in session storage to be used on the booking page
    sessionStorage.setItem('bookingFormData', JSON.stringify({
      name,
      phone,
      address,
      service: category === 'car' ? 'Car Lockout' : 
               category === 'residential' ? 'House Lockout' :
               category === 'commercial' ? 'Business Lockout' : 
               '24/7 Lockout Service'
    }));
    
    // Navigate to booking page after short delay to simulate processing
    setTimeout(() => {
      navigate('/book-online');
    }, 400);
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-br from-primary via-primary/90 to-primary-hover text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
        <div className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full bg-secondary/20 blur-2xl"></div>
      </div>
      
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFA500" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="flex items-center text-white/90 font-medium">
                <ShieldCheck className="h-5 w-5 mr-2 text-secondary" />
                Professional {category.charAt(0).toUpperCase() + category.slice(1)} Locksmith
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
              {title}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="text-primary font-semibold hover:text-primary-dark hover:bg-secondary-hover text-base sm:text-lg py-6 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:2017482070" className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  (201) 748-2070
                </a>
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10"
            >
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="ml-2 text-white/90">5-Star Service</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90">
                  {category === 'emergency' ? 'Available 24/7' : 'Affordable Rates'}
                </span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Quick Booking Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 shadow-xl"
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Request {category.charAt(0).toUpperCase() + category.slice(1)} Service</h2>
              <p className="text-white/80">
                Quick response for {category === 'emergency' ? 'emergencies' : 'your needs'} - fill the form below
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Your Name</Label>
                <Input 
                  id="name" 
                  placeholder="Full Name" 
                  className="bg-white/20 text-white border-white/30 placeholder:text-white/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="(201) 555-1234" 
                  className="bg-white/20 text-white border-white/30 placeholder:text-white/50"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address" className="text-white">Service Address</Label>
                <Input 
                  id="address" 
                  placeholder="Your Address" 
                  className="bg-white/20 text-white border-white/30 placeholder:text-white/50"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-primary text-base font-semibold py-6 mt-2 transition-all"
              >
                {isSubmitting ? "Processing..." : `Request ${category.charAt(0).toUpperCase() + category.slice(1)} Service`}
              </Button>
            </form>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-secondary/20 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
