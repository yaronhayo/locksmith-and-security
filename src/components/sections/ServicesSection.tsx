
import { Lock, Car, Building2, Key } from 'lucide-react';
import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Expert locksmith service for residential lockouts. Available 24/7 with fast response times for homeowners and renters.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Professional automotive lockout service available 24/7. We come to your location and safely unlock any vehicle make or model.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Commercial lockout solutions for all business types. Fast response service available 24/7 to get you back to work quickly.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Professional lock replacement service with high-security options. Ideal for new homeowners or upgrading existing locks.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Expert lock rekeying service to maintain security with new keys. Perfect solution for landlords and new property owners.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Commercial-grade lock installation and security upgrades. Specialized solutions for offices, retail stores, and facilities.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost your car key? We make and program new keys for all vehicle types using advanced equipment.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a car key programmed? We program all types of electronic car keys and key fobs.", 
    link: "/services/car-key-program", 
    cta: "Program Your Car Key" 
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
