
import { Shield, Clock } from "lucide-react";
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
        Being locked out of your home can be a stressful and potentially dangerous situation, 
        especially during late hours or severe weather. Our professional locksmiths provide 
        rapid, reliable house lockout services throughout North Bergen and surrounding areas, 
        ensuring you regain access to your home quickly and safely.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Professional House Lockout Solutions</h3>
        <p className="text-gray-600 mb-4">Our residential lockout services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Emergency house lockout assistance",
            "Non-destructive lock picking",
            "Broken key extraction",
            "Lock repair and replacement",
            "Key duplication on-site",
            "Smart lock installation",
            "Security assessment"
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Why Choose Our House Lockout Service</h3>
        <p className="text-gray-600 mb-4">
          Our residential locksmith specialists are highly trained professionals with extensive experience 
          in home lockout situations. We understand the urgency of being locked out of your house and 
          provide fast, reliable service to get you back inside safely. Our technicians are:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Licensed and certified residential locksmiths",
            "Background checked and fully insured",
            "Equipped with advanced residential lock tools",
            "Trained in the latest home security technologies"
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

      <div className="flex items-center gap-6 mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Clock className="h-6 w-6" />
          <span className="font-medium">15-30 Min Response</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;
