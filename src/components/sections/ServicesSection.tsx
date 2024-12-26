import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential",
    description: "Home lockout assistance, lock installation, and rekeying services",
    link: "/services#residential",
    icon: "🏠",
  },
  {
    title: "Commercial",
    description: "Business security solutions, master key systems, and access control",
    link: "/services#commercial",
    icon: "🏢",
  },
  {
    title: "Automotive",
    description: "Car lockout help, key programming, and replacement services",
    link: "/services#automotive",
    icon: "🚗",
  },
];

const ServicesSection = () => {
  return (
    <section 
      aria-labelledby="services-heading"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="services-heading"
            className="text-3xl font-bold mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services for all your security needs
          </p>
        </div>
        
        <div 
          className="grid md:grid-cols-3 gap-8"
          role="list"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              role="listitem"
            >
              <span 
                className="text-4xl mb-4 block"
                role="img"
                aria-label={`${service.title} service icon`}
              >
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Button 
                asChild
                variant="secondary"
                className="w-full"
              >
                <a 
                  href={service.link}
                  aria-label={`Learn more about our ${service.title.toLowerCase()} services`}
                >
                  Learn More
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;