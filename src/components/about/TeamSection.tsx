
import { motion } from "framer-motion";
import { Shield, Key, Wrench } from "lucide-react";

const team = [
  {
    name: "Michael Johnson",
    role: "Master Locksmith",
    description: "With over 15 years of experience, Michael leads our residential locksmith services with expertise in high-security systems.",
    icon: Key,
    specialties: ["High Security Locks", "Smart Locks", "Residential Security"]
  },
  {
    name: "Sarah Thompson",
    role: "Security Specialist",
    description: "Sarah specializes in commercial security solutions and access control systems for businesses of all sizes.",
    icon: Shield,
    specialties: ["Access Control", "CCTV Systems", "Commercial Solutions"]
  },
  {
    name: "David Rodriguez",
    role: "Automotive Expert",
    description: "David is our automotive locksmith expert, with specialized training in modern vehicle security systems and key programming.",
    icon: Wrench,
    specialties: ["Key Programming", "Transponder Keys", "Vehicle Security"]
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
              <div className="h-36 bg-gradient-to-r from-primary/10 to-blue-100 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                  <member.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
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
          className="text-center mt-12 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 italic text-lg">
            "Our strength is in our team — dedicated professionals committed to your security and peace of mind."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
