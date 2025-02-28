
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, Shield } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock, color: "from-primary/80 to-primary" },
  { number: "97%", label: "Satisfaction Rate", icon: Users, color: "from-primary/70 to-primary/90" },
  { number: "3K+", label: "Projects Completed", icon: CheckCircle, color: "from-secondary/80 to-secondary" },
  { number: "24/7", label: "Customer Support", icon: Shield, color: "from-secondary/70 to-secondary/90" },
];

const CompanyStats = () => {
  return (
    <section className="mb-12">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Top decoration */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${stat.color}`}></div>
            
            <div className="p-6 pt-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <stat.icon className={`w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>
              
              <h3 className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                {stat.number}
              </h3>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
              
              {/* Bottom decoration */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1 opacity-50">
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
