
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Car, Building2, Key, Wrench, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    icon: Lock, 
    subIcons: {
      "Car Lockout": Car,
      "House Lockout": Key,
      "Business Lockout": Building2,
      "Storage Unit Lockout": Lock
    },
    title: "Emergency Locksmith", 
    description: "Professional emergency locksmith services by certified technicians. Licensed and insured experts available 24/7.", 
    link: "/services/emergency-locksmith",
    highlight: "Available 24/7",
    cta: "Emergency Services",
    subServices: [
      { name: "Car Lockout", link: "/services/emergency-locksmith/car-lockout" },
      { name: "House Lockout", link: "/services/emergency-locksmith/house-lockout" },
      { name: "Business Lockout", link: "/services/emergency-locksmith/business-lockout" },
      { name: "Storage Unit Lockout", link: "/services/emergency-locksmith/storage-unit-lockout" }
    ]
  },
  { 
    icon: Home,
    subIcons: {
      "Lock Replacement": Lock,
      "Lock Rekey": Key,
      "Lock Repair": Wrench,
      "Gate Locks": Shield
    },
    title: "Residential Locksmith", 
    description: "Professional residential locksmith services by certified technicians. Expert solutions for all your home security needs.", 
    link: "/services/residential-locksmith",
    highlight: "Home Security",
    cta: "Home Security",
    subServices: [
      { name: "Lock Replacement", link: "/services/residential-locksmith/lock-replacement" },
      { name: "Lock Rekey", link: "/services/residential-locksmith/lock-rekey" },
      { name: "Lock Repair", link: "/services/residential-locksmith/lock-repair" },
      { name: "Gate Locks", link: "/services/residential-locksmith/gate-locks" }
    ]
  },
  { 
    icon: Building2,
    subIcons: {
      "Lock Replacement": Lock,
      "Master Key Systems": Key,
      "Access Control": Shield,
      "Emergency Exit Devices": Wrench
    },
    title: "Commercial Locksmith", 
    description: "Professional commercial security solutions by certified technicians. Expert systems for business protection.", 
    link: "/services/commercial-locksmith",
    highlight: "Business Security",
    cta: "Business Security",
    subServices: [
      { name: "Lock Replacement", link: "/services/commercial-locksmith/lock-replacement" },
      { name: "Master Key Systems", link: "/services/commercial-locksmith/master-key" },
      { name: "Access Control", link: "/services/commercial-locksmith/access-control" },
      { name: "Emergency Exit Devices", link: "/services/commercial-locksmith/emergency-exit-device" }
    ]
  },
  { 
    icon: Car,
    subIcons: {
      "Car Key Replacement": Key,
      "Key Fob Programming": Shield,
      "Car Key Duplicate": Wrench,
      "Ignition Repair": Wrench
    },
    title: "Auto Locksmith", 
    description: "Professional automotive locksmith services by certified technicians. Expert solutions for all vehicle security needs.", 
    link: "/services/auto-locksmith",
    highlight: "Mobile Service",
    cta: "Auto Services",
    subServices: [
      { name: "Car Key Replacement", link: "/services/auto-locksmith/car-key-replacement" },
      { name: "Key Fob Programming", link: "/services/auto-locksmith/key-fob-programming" },
      { name: "Car Key Duplicate", link: "/services/auto-locksmith/car-key-duplicate" },
      { name: "Ignition Repair", link: "/services/auto-locksmith/ignition-lock-cylinder" }
    ]
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Professional Locksmith Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert security solutions for all your residential, commercial, and automotive needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8 justify-items-center w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="relative h-full overflow-hidden border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6 pb-4 flex flex-col items-center text-center">
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {service.highlight}
                      </span>
                    </div>
                    
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                  </div>

                  <div className="bg-gray-50 p-6 pt-4 flex flex-col items-center">
                    <div className="space-y-2 mb-6 w-full">
                      {service.subServices.map((subService, subIndex) => {
                        const SubIcon = service.subIcons[subService.name as keyof typeof service.subIcons];
                        return (
                          <div key={subIndex} className="flex items-center justify-center">
                            <Link 
                              to={subService.link}
                              className="flex items-center text-sm text-gray-600 py-1.5 hover:text-primary relative"
                            >
                              {SubIcon && (
                                <SubIcon className="w-4 h-4 mr-2 text-primary/70" />
                              )}
                              <span className="relative inline-block">
                                {subService.name}
                                <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-primary transition-all duration-300 hover:w-full"></span>
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    <div className="inline-block">
                      <Link
                        to={service.link}
                        className="inline-flex items-center px-4 py-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white hover:text-black rounded-md font-medium transition-colors"
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
