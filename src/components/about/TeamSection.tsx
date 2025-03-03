
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
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our locksmiths are licensed, insured, and highly trained professionals with years of experience in the security industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div 
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-primary font-medium text-center mb-4">{member.role}</p>
                  
                  <p className="text-gray-600 text-center mb-6">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-center">Specialties:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialties.map(specialty => (
                        <span key={specialty} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
