
import { Shield, Car, House, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServicesListProps {
  areaName: string;
}

const services = [
  {
    icon: House,
    title: "Residential Locksmith",
    description: "House lockouts, lock changes, rekeying, and security upgrades for your home.",
    link: "/services/residential-locksmith",
    features: ["24/7 Emergency Service", "Key Duplication", "Lock Installation", "Security Consultation"]
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Car lockouts, key replacement, and programming for all vehicle makes and models.",
    link: "/services/auto-locksmith",
    features: ["Emergency Car Lockout", "Key Programming", "Key Replacement", "Transponder Keys"]
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Business security solutions, master key systems, and access control installation.",
    link: "/services/commercial-locksmith",
    features: ["Access Control", "Master Key Systems", "Lock Maintenance", "Security Upgrades"]
  }
];

const ServicesList = ({ areaName }: ServicesListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services in {areaName}</h2>
      <div className="grid gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesList;
