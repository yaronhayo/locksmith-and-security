
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
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our certified technicians bring years of experience and specialized training to every job.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => {
          const Icon = member.icon;
          
          return (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-white text-center">
                <div className="bg-white/20 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary-50">{member.role}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{member.description}</p>
                
                <h4 className="font-semibold text-primary-dark mb-3">Specialties:</h4>
                <ul className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
