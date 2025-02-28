
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const values = [
  "Professionalism",
  "Reliability", 
  "Quality", 
  "Integrity", 
  "Excellence",
  "Security",
  "Trust",
  "Innovation"
];

const CompanyValues = () => {
  return (
    <section className="mb-20">
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-full bg-primary/10 p-8">
                <Heart className="w-16 h-16 text-primary" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h3>
              <p className="text-gray-600 mb-6">
                At Locksmith & Security LLC, we understand that security is about more than just locks and keys—it's about providing peace of mind. 
                Our core values drive everything we do and shape how we serve our community.
              </p>
              <div className="flex flex-wrap gap-4">
                {values.map((value, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 bg-gray-50 rounded-full text-primary shadow-sm border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompanyValues;
