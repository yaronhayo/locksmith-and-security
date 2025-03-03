
import { motion } from "framer-motion";
import { Shield, Key, Wrench } from "lucide-react";

const team = [{
  name: "Michael Johnson",
  role: "Master Locksmith",
  description: "With over 15 years of experience, Michael leads our residential locksmith services with expertise in high-security systems.",
  icon: Key,
  specialties: ["High Security Locks", "Smart Locks", "Residential Security"]
}, {
  name: "Sarah Thompson",
  role: "Security Specialist",
  description: "Sarah specializes in commercial security solutions and access control systems for businesses of all sizes.",
  icon: Shield,
  specialties: ["Access Control", "CCTV Systems", "Commercial Solutions"]
}, {
  name: "David Rodriguez",
  role: "Automotive Expert",
  description: "David is our automotive locksmith expert, with specialized training in modern vehicle security systems and key programming.",
  icon: Wrench,
  specialties: ["Key Programming", "Transponder Keys", "Vehicle Security"]
}];

const TeamSection = () => {
  return (
    <section className="container mx-auto py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our highly trained professionals are committed to providing top-quality locksmith and security services.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {team.map((member, index) => {
          const Icon = member.icon;
          
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary text-center font-medium mb-4">{member.role}</p>
              
              <p className="text-gray-600 mb-6 text-center">{member.description}</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((specialty) => (
                  <span 
                    key={specialty} 
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
