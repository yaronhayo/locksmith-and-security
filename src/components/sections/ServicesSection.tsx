
import { Lock, Car, Building2, Key } from 'lucide-react';
import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

const services = [
  { 
    icon: Lock, 
    title: "Emergency Locksmith", 
    description: "24/7 emergency locksmith services for cars, homes, and businesses. Fast response times and professional service.", 
    link: "/services/emergency-locksmith", 
    cta: "Emergency Services" 
  },
  { 
    icon: Building2, 
    title: "Residential Locksmith", 
    description: "Complete residential locksmith services including lock replacement, rekeying, repairs, and security upgrades.", 
    link: "/services/residential-locksmith", 
    cta: "Residential Services" 
  },
  { 
    icon: Building2, 
    title: "Commercial Locksmith", 
    description: "Professional commercial locksmith solutions for businesses, including access control and master key systems.", 
    link: "/services/commercial-locksmith", 
    cta: "Commercial Services" 
  },
  { 
    icon: Car, 
    title: "Auto Locksmith", 
    description: "Comprehensive auto locksmith services including car key replacement, programming, and ignition repair.", 
    link: "/services/auto-locksmith", 
    cta: "Auto Services" 
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Professional locksmith solutions for your security needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
