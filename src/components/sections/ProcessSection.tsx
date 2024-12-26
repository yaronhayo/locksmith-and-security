import { Clock, Car, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const process = [
  { 
    icon: Clock, 
    title: "Contact Us", 
    description: "Call or fill out our form for immediate assistance",
    color: "bg-blue-50 text-blue-600" 
  },
  { 
    icon: Car, 
    title: "Quick Response", 
    description: "Our technician will arrive within 30 minutes",
    color: "bg-green-50 text-green-600"
  },
  { 
    icon: Shield, 
    title: "Problem Solved", 
    description: "Professional service with satisfaction guaranteed",
    color: "bg-purple-50 text-purple-600"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple process ensures you get the help you need quickly and efficiently
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full group hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;