
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified professionals bring years of experience and specialized training 
            to every job, ensuring top-quality service.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div 
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-primary-dark">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map(specialty => (
                        <span 
                          key={specialty} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light/20 text-primary-dark"
                        >
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
