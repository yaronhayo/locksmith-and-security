import { Shield, Car, Key, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDescription = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none bg-white rounded-lg shadow-sm p-8 mb-12"
    >
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        Professional car key replacement and programming services for all vehicle makes and models. Whether you've lost all your keys, 
        need a spare, or want to program an existing key, our expert automotive locksmiths have the advanced equipment and expertise 
        to help. We provide mobile service and can create new keys on-site.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Comprehensive Car Key Solutions</h3>
        <p className="text-gray-600 mb-4">Our professional car key services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Lost key replacement",
            "Spare key creation",
            "Key programming",
            "Transponder key cutting",
            "Smart key programming",
            "Push-to-start key creation",
            "Key fob programming",
            "Remote key duplication",
            "Chip key programming",
            "Proximity key creation",
            "European car keys",
            "Japanese car keys"
          ].map((service, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Key Creation Technology</h3>
        <p className="text-gray-600 mb-4">
          We use state-of-the-art key cutting and programming equipment to ensure:
        </p>
        <ul className="space-y-4 mb-8">
          {[
            "On-site key cutting for immediate replacement",
            "Advanced diagnostic equipment for all vehicle brands",
            "Latest programming software for modern vehicles",
            "High-precision key cutting machines",
            "Original key blanks for perfect fit",
            "Full testing and verification before handover"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-600"
            >
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Vehicle Coverage</h3>
        <p className="text-gray-600 mb-4">
          We provide key services for all major vehicle brands including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            "Toyota", "Honda", "Ford", "Chevrolet",
            "BMW", "Mercedes", "Audi", "Volkswagen",
            "Nissan", "Hyundai", "Kia", "Lexus",
            "Jeep", "Dodge", "Chrysler", "And more..."
          ].map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="text-center p-2 bg-gray-50 rounded-lg"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Car className="h-6 w-6" />
          <span className="font-medium">All Vehicle Types</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Key className="h-6 w-6" />
          <span className="font-medium">OEM Quality</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Smartphone className="h-6 w-6" />
          <span className="font-medium">Modern Tech</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;