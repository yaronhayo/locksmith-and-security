
import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';
import FAQSection from '@/components/sections/FAQSection';
import { emergencyFaqs } from '@/data/faqData';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Car, Home, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import { Helmet } from 'react-helmet';

const EmergencyLocksmith = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>24/7 Emergency Locksmith | 20-Minute Response | Licensed & Insured</title>
        <meta name="description" content="Locked out? Our emergency locksmiths respond in 20 minutes or less. Available 24/7 for car, home & business lockouts with damage-free entry techniques." />
        <meta name="keywords" content="emergency locksmith, 24/7 locksmith, lockout service, car lockout, house lockout, business lockout, lost keys, broken key extraction" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith" />
      </Helmet>
      
      <ServicesHero 
        title="24/7 Emergency Locksmith Services"
        description="Professional emergency locksmith services available 24/7 for residential, commercial, and automotive needs. Fast response by certified technicians."
      />
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold">Fast Response Times</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
              Emergency Locksmith Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              When you're locked out or facing a security emergency, you need swift, reliable service. Our emergency locksmith team is ready 24/7 to handle any urgent situation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Fast Response</h3>
                    <p className="text-gray-600">Our team is available 24/7 to respond to your emergency locksmith needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center">
                  <Car className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Automotive Services</h3>
                    <p className="text-gray-600">We provide emergency lockout services for all vehicle makes and models.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center">
                  <Home className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Residential Services</h3>
                    <p className="text-gray-600">Locked out of your home? Our technicians can help you regain access quickly.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center">
                  <Building2 className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Commercial Services</h3>
                    <p className="text-gray-600">We offer comprehensive locksmith services for businesses and commercial properties.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-20 -mb-20"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-white rounded-full -ml-20 -mt-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What To Do In A Lockout Emergency
            </motion.h2>
            <motion.div
              className="space-y-8 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start text-left">
                <div className="bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-100">Stay Calm</h3>
                  <p className="text-white/80">
                    Take a deep breath. Panicking can lead to poor decisions. Remember that help is just a phone call away.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <div className="bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-100">Call Our Emergency Number</h3>
                  <p className="text-white/80">
                    Contact us at (201) 748-2070 for immediate assistance. Our dispatchers are available 24/7.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <div className="bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-100">Provide Your Location</h3>
                  <p className="text-white/80">
                    Share your exact location and the nature of your emergency. This helps us dispatch the right technician with the proper equipment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <div className="bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-100">Wait in a Safe Location</h3>
                  <p className="text-white/80">
                    If it's late at night or you're in an unfamiliar area, wait in a well-lit, populated location if possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <FAQSection 
        faqs={emergencyFaqs.slice(0, 12)}
        title="Emergency Locksmith FAQ"
        description="Common questions about our emergency locksmith services"
      />
      
      <ServicesCTA />
    </main>
  );
};

export default EmergencyLocksmith;
