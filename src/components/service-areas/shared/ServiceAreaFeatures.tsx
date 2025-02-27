
import { Shield, Key, Clock, Award, Wrench, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Our technicians are fully licensed, bonded, and insured for your complete protection"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your emergency locksmith needs"
  },
  {
    icon: Key,
    title: "All Lock Types",
    description: "Expertise with residential, commercial, and automotive locks of all types"
  },
  {
    icon: Award,
    title: "5-Star Service",
    description: "Highly rated by customers for quality, reliability, and professional service"
  },
  {
    icon: Wrench,
    title: "Advanced Equipment",
    description: "Using the latest tools and technology for efficient, damage-free service"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% customer satisfaction guarantee"
  }
];

const ServiceAreaFeatures = () => {
  return (
    <section className="bg-gradient-to-br from-white to-secondary/5 rounded-xl shadow-md p-8 md:p-12">
      <div className="text-center mb-12">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-sm mb-4"
        >
          Why Choose Us
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Professional Locksmith Services You Can Trust
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We provide expert locksmith services with a commitment to quality, reliability, and customer satisfaction.
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-sm p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md group"
          >
            <div className="bg-secondary/10 text-secondary rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreaFeatures;
