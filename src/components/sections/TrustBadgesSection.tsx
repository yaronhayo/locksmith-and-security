import { Shield, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadgesSection = () => {
  return (
    <section className="py-8 border-t bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <motion.div 
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
              <Shield className="w-8 h-8 text-primary group-hover:text-primary-hover transition-colors duration-300" />
            </div>
            <span className="font-semibold text-lg text-gray-800">Licensed & Insured</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
              <Clock className="w-8 h-8 text-primary group-hover:text-primary-hover transition-colors duration-300" />
            </div>
            <span className="font-semibold text-lg text-gray-800">24/7 Service</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
              <Star className="w-8 h-8 text-primary group-hover:text-primary-hover transition-colors duration-300" />
            </div>
            <span className="font-semibold text-lg text-gray-800">5-Star Rated</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;