
import { motion } from "framer-motion";
import { Shield, Key, Wrench } from "lucide-react";

const team = [
  {
    name: "Michael Johnson",
    role: "Master Locksmith",
    avatar: "/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
    description: "With over 15 years of experience, Michael leads our residential locksmith services with expertise in high-security systems.",
    icon: Key
  },
  {
    name: "Sarah Thompson",
    role: "Security Specialist",
    avatar: "/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
    description: "Sarah specializes in commercial security solutions and access control systems for businesses of all sizes.",
    icon: Shield
  },
  {
    name: "David Rodriguez",
    role: "Automotive Expert",
    avatar: "/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
    description: "David is our automotive locksmith expert, with specialized training in modern vehicle security systems and key programming.",
    icon: Wrench
  }
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
            Meet Our Team
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our team of certified professionals is dedicated to providing you with the highest level of service.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-r from-primary/10 to-blue-100 flex justify-center items-center">
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                  <member.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex space-x-3">
                  {["Certified", "Professional", "Reliable"].map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-xs text-gray-600 rounded-full shadow-sm border border-gray-200">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 italic">
            "Our strength is in our team — dedicated professionals committed to your security and peace of mind."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
