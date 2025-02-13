
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "97%", label: "Satisfaction Rate", icon: Users },
  { number: "3K+", label: "Projects Completed", icon: CheckCircle },
];

const CompanyStats = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
