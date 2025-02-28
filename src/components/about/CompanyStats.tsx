
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, Shield } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "97%", label: "Satisfaction Rate", icon: Users },
  { number: "3K+", label: "Projects Completed", icon: CheckCircle },
  { number: "24/7", label: "Customer Support", icon: Shield },
];

const CompanyStats = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</h3>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
