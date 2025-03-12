import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';
import FAQSection from '@/components/sections/FAQSection';
import { automotiveFaqs } from '@/data/faqData';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Key, 
  ShieldCheck, 
  Wrench, 
  Settings, 
  ArrowRight, 
  CarFront, 
  CircleUserRound,
  BarChart4,
  Zap,
  CircleDollarSign,
  BadgeCheck
} from 'lucide-react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';

const autoServices = [
  {
    icon: Key,
    title: "Car Key Replacement",
    description: "Lost or broken car keys? We create new keys for virtually all vehicle makes and models.",
    path: "/services/auto-locksmith/car-key-replacement"
  },
  {
    icon: Settings,
    title: "Key Fob Programming",
    description: "Restore functionality to your remote entry system with our expert key fob programming services.",
    path: "/services/auto-locksmith/key-fob-programming"
  },
  {
    icon: Key,
    title: "Car Key Duplicate",
    description: "Get spare keys made to avoid future lockout situations and for your convenience.",
    path: "/services/auto-locksmith/car-key-duplicate"
  },
  {
    icon: Wrench,
    title: "Car Key Cutting",
    description: "Precision key cutting services for all types of automotive keys, including high-security keys.",
    path: "/services/auto-locksmith/car-key-cutting"
  },
  {
    icon: Settings,
    title: "Ignition Lock Cylinder",
    description: "Fix ignition problems with our expert ignition lock cylinder repair and replacement services.",
    path: "/services/auto-locksmith/ignition-lock-cylinder"
  }
];

const carBrands = [
  { name: "Toyota", icon: CarFront },
  { name: "Honda", icon: Car },
  { name: "Ford", icon: Car },
  { name: "Chevrolet", icon: CarFront },
  { name: "BMW", icon: BadgeCheck },
  { name: "Mercedes", icon: CircleUserRound },
  { name: "Lexus", icon: CircleDollarSign },
  { name: "Audi", icon: BadgeCheck },
  { name: "Volkswagen", icon: Car },
  { name: "Nissan", icon: CarFront },
  { name: "Hyundai", icon: Zap },
  { name: "Kia", icon: BarChart4 }
];

const AutoLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Auto Locksmith Services"
        description="Professional automotive locksmith services for all vehicle makes and models. From car lockouts to key replacement and programming, our mobile technicians come to you."
      />
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold">Mobile Auto Locksmith Experts</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
              Complete Automotive Locksmith Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our automotive locksmith services cover everything from emergency lockouts to sophisticated key programming. Our mobile technicians come to your location with all the necessary equipment to solve your car key and lock problems on the spot.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autoServices.map((service, index) => (
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
              <Car className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Advanced Automotive Locksmith Technology
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Modern vehicles require specialized equipment and expertise. Our auto locksmiths stay up-to-date with the latest automotive security technology, including transponder keys, proximity keys, and keyless entry systems. We invest in state-of-the-art key cutting and programming equipment to provide fast, accurate service for virtually any vehicle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cutting-Edge Equipment</h3>
                    <p className="text-gray-600">We use the latest diagnostic tools and key cutting technology for precise results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Factory-Level Programming</h3>
                    <p className="text-gray-600">Our equipment allows for dealer-level programming at a fraction of the cost.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mobile Service</h3>
                    <p className="text-gray-600">Our fully-equipped mobile units bring the locksmith shop to your location.</p>
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
              <h3 className="text-2xl font-bold mb-6 text-center">Our Auto Locksmith Services Include</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Car className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Car Lockouts</h4>
                    <p className="text-gray-600 text-sm">Fast, damage-free vehicle entry</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Key className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Transponder Key Programming</h4>
                    <p className="text-gray-600 text-sm">Program chip keys for modern vehicles</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Settings className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ignition Repair</h4>
                    <p className="text-gray-600 text-sm">Fix or replace damaged ignition systems</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Wrench className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Broken Key Extraction</h4>
                    <p className="text-gray-600 text-sm">Remove broken keys from locks or ignitions</p>
                  </div>
                </li>
                <li className="flex items-center p-4">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Key className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">High-Security Keys</h4>
                    <p className="text-gray-600 text-sm">Create sophisticated laser-cut and sidewinder keys</p>
                  </div>
                </li>
              </ul>
              
              <Button className="w-full mt-8 py-6" size="lg">
                <Link to="/contact" className="flex items-center justify-center">
                  Request Auto Service
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
              We Service All Vehicle Makes and Models
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our automotive locksmiths are trained to work with domestic and imported vehicles from all major manufacturers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {carBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <brand.icon className="h-8 w-8 text-primary mb-2" />
                <span className="font-semibold text-gray-700">{brand.name}</span>
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
              Car Key Types We Work With
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 mt-12 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Traditional Car Keys</h3>
                <p className="text-white/80">
                  Basic mechanical keys for older vehicles that don't contain electronic components.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Transponder Keys</h3>
                <p className="text-white/80">
                  Keys with embedded chips that must be programmed to start your vehicle.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Remote Head Keys</h3>
                <p className="text-white/80">
                  Keys with built-in remote controls for locking/unlocking and sometimes remote start.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Smart Keys & Proximity Fobs</h3>
                <p className="text-white/80">
                  Advanced keyless systems that allow for push-button start and passive entry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <FAQSection 
        faqs={automotiveFaqs.slice(0, 12)}
        title="Auto Locksmith FAQ"
        description="Common questions about our automotive locksmith services"
      />
      
      <ServicesCTA />
    </main>
  );
};

export default AutoLocksmith;
