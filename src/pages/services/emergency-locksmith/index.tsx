
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

const emergencyServices = [
  {
    icon: Car,
    title: "Car Lockout",
    description: "Locked out of your vehicle? Our skilled automotive locksmiths can quickly get you back in without damage.",
    path: "/services/emergency-locksmith/car-lockout"
  },
  {
    icon: Home,
    title: "House Lockout",
    description: "Locked out of your home? Our residential specialists will safely get you back inside with minimal disruption.",
    path: "/services/emergency-locksmith/house-lockout"
  },
  {
    icon: Building2,
    title: "Business Lockout",
    description: "Business access problems? Our commercial experts use specialized techniques for damage-free commercial entry.",
    path: "/services/emergency-locksmith/business-lockout"
  },
  {
    icon: ShieldCheck,
    title: "Storage Unit Lockout",
    description: "Can't access your storage unit? Our technicians have specialized tools to help you regain access quickly.",
    path: "/services/emergency-locksmith/storage-unit-lockout"
  }
];

const EmergencyLocksmith = () => {
  return (
    <main className="flex-grow">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button asChild variant="outline" className="group w-full">
                      <Link to={service.path} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Clock className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Available 24/7 For All Emergency Locksmith Needs
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Emergencies don't follow a schedule. That's why our team of certified locksmith professionals is available around the clock, including weekends and holidays. We arrive quickly with all the necessary tools and equipment to resolve your emergency on the spot.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Rapid Response</h3>
                    <p className="text-gray-600">Our mobile locksmith units are stationed throughout the service area for fast arrival.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Non-Destructive Entry</h3>
                    <p className="text-gray-600">We use specialized techniques to gain entry without causing damage whenever possible.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600">All our technicians are fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Emergency Services Include</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Car className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vehicle Lockouts</h4>
                    <p className="text-gray-600 text-sm">All makes and models, including smart key systems</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Home className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Residential Lockouts</h4>
                    <p className="text-gray-600 text-sm">Homes, apartments, condos, and rental properties</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Building2 className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Commercial Lockouts</h4>
                    <p className="text-gray-600 text-sm">Offices, retail stores, and other business facilities</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Broken Key Extraction</h4>
                    <p className="text-gray-600 text-sm">Safely remove broken keys from any lock</p>
                  </div>
                </li>
                <li className="flex items-center p-4">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lock Repairs & Replacements</h4>
                    <p className="text-gray-600 text-sm">Emergency fixes for damaged or malfunctioning locks</p>
                  </div>
                </li>
              </ul>
              
              <Button className="w-full mt-8 py-6" size="lg">
                <Link to="/contact" className="flex items-center justify-center">
                  Request Emergency Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
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
                  <h3 className="text-xl font-semibold mb-2">Stay Calm</h3>
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
                  <h3 className="text-xl font-semibold mb-2">Call Our Emergency Number</h3>
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
                  <h3 className="text-xl font-semibold mb-2">Provide Your Location</h3>
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
                  <h3 className="text-xl font-semibold mb-2">Wait in a Safe Location</h3>
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
