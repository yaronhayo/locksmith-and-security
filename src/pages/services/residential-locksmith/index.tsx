
import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';
import FAQSection from '@/components/sections/FAQSection';
import { residentialFaqs } from '@/data/faqData';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Key, Lock, ShieldCheck, Wrench, Home, ArrowRight } from 'lucide-react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';

const residentialServices = [
  {
    icon: Lock,
    title: "Lock Replacement",
    description: "Upgrade your home's security with modern, high-security lock installation services.",
    path: "/services/residential-locksmith/lock-replacement"
  },
  {
    icon: Key,
    title: "Lock Rekey",
    description: "Keep your existing hardware while changing who has access with our lock rekeying services.",
    path: "/services/residential-locksmith/lock-rekey"
  },
  {
    icon: Wrench,
    title: "Lock Repair",
    description: "Extend the life of your locks with our expert repair services for all types of residential locks.",
    path: "/services/residential-locksmith/lock-repair"
  },
  {
    icon: ShieldCheck,
    title: "Gate Locks",
    description: "Secure your property's perimeter with specialized gate lock installation and repair services.",
    path: "/services/residential-locksmith/gate-locks"
  }
];

const lockBrands = [
  "Schlage", "Kwikset", "Baldwin", "Yale", "Medeco", "Mul-T-Lock", "ASSA Abloy", "Emtek"
];

const ResidentialLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Residential Locksmith Services"
        description="Secure your home with our comprehensive residential locksmith services. From lock repair to advanced security solutions, our certified technicians provide expert service."
      />
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold">Home Security Experts</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
              Complete Residential Locksmith Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our residential locksmith services are designed to keep your home secure and your family safe. From basic lock maintenance to advanced security systems, we do it all.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialServices.map((service, index) => (
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
              <Home className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Protecting What Matters Most
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your home is your sanctuary, and its security shouldn't be compromised. Our residential locksmith services provide peace of mind with solutions tailored to your specific needs and budget. From traditional deadbolts to smart lock systems, we offer comprehensive services to keep your home secure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Customized Security Solutions</h3>
                    <p className="text-gray-600">We assess your home's unique security needs and provide tailored recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Experienced Technicians</h3>
                    <p className="text-gray-600">Our locksmiths are highly trained and experienced with all types of residential locks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties on parts and labor.</p>
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
              <h3 className="text-2xl font-bold mb-6 text-center">Our Residential Services Include</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Home className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Home Lockouts</h4>
                    <p className="text-gray-600 text-sm">Fast, damage-free entry to your home</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Lock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Deadbolt Installation</h4>
                    <p className="text-gray-600 text-sm">Enhance security with quality deadbolts</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Key className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Master Key Systems</h4>
                    <p className="text-gray-600 text-sm">Convenient access management for your home</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Smart Lock Installation</h4>
                    <p className="text-gray-600 text-sm">Modern keyless entry solutions</p>
                  </div>
                </li>
                <li className="flex items-center p-4">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Wrench className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Security Assessments</h4>
                    <p className="text-gray-600 text-sm">Comprehensive evaluation of your home's security</p>
                  </div>
                </li>
              </ul>
              
              <Button className="w-full mt-8 py-6" size="lg">
                <Link to="/contact" className="flex items-center justify-center">
                  Schedule Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              We Work With All Major Lock Brands
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our locksmiths are trained to work with all major residential lock brands, ensuring we can service, repair, or replace any lock in your home.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {lockBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-semibold text-gray-700">{brand}</span>
              </motion.div>
            ))}
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
              Home Security Tips
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 mt-12 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Install Quality Deadbolts</h3>
                <p className="text-white/80">
                  All exterior doors should have quality deadbolts with a minimum 1-inch throw bolt for maximum security.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Secure Sliding Doors</h3>
                <p className="text-white/80">
                  Use specialized locks or security bars to prevent sliding doors from being forced open.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Rekey After Moving</h3>
                <p className="text-white/80">
                  Always rekey your locks when moving into a new home to ensure previous residents can't access your property.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Consider Smart Locks</h3>
                <p className="text-white/80">
                  Smart locks offer convenience and enhanced security with features like activity logs and remote access.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <FAQSection 
        faqs={residentialFaqs.slice(0, 12)}
        title="Residential Locksmith FAQ"
        description="Common questions about our residential locksmith services"
      />
      
      <ServicesCTA />
    </main>
  );
};

export default ResidentialLocksmith;
