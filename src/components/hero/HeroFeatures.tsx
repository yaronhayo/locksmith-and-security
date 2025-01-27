import { motion } from "framer-motion";
import { Clock, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Always available"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Your safety first"
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Trusted service"
  }
];

const HeroFeatures = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      role="list"
      aria-label="Key features"
    >
      {features.map(({ icon: Icon, title, description }, index) => (
        <div 
          key={index}
          className="flex items-center space-x-3 text-white group hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer backdrop-blur-sm bg-white/5 p-3 rounded-lg"
          role="listitem"
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-white text-sm sm:text-base">{title}</h3>
            <p className="text-xs sm:text-sm text-white/80">{description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;