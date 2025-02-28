
import { motion } from "framer-motion";
import { Bookmark, Compass, Shield, Award } from "lucide-react";

const MissionVision = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Background gradient with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl transform group-hover:scale-[1.03] transition-transform duration-300"></div>
          
          {/* Content */}
          <div className="relative p-8 pt-12">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-bl-3xl"></div>
            
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mr-4 shadow-lg">
                <Bookmark className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              At Locksmith & Security LLC, we're dedicated to providing expert security solutions 
              with integrity and professionalism. Our mission is to protect what matters most to our clients through 
              reliable, high-quality locksmith services tailored to each unique situation.
            </p>
            
            <div className="mt-8 p-6 bg-white/80 rounded-lg shadow-sm border border-primary/10">
              <p className="text-primary-dark font-medium italic text-lg">
                "We believe everyone deserves to feel secure in their home, business, and vehicle."
              </p>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary/30"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-primary/50"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-primary/70"></span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          {/* Background gradient with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl transform group-hover:scale-[1.03] transition-transform duration-300"></div>
          
          {/* Content */}
          <div className="relative p-8 pt-12">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-br-3xl"></div>
            
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mr-4 shadow-lg">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to be North Bergen's trusted security partner, known for our unwavering commitment to 
              excellence and customer satisfaction. Our goal is to continuously evolve with emerging security technologies 
              while maintaining the personalized service our community expects.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-white/80 rounded-lg shadow-sm border border-secondary/10">
                <Shield className="w-6 h-6 text-secondary mr-3" />
                <span className="text-gray-800 font-medium">Reliable Protection</span>
              </div>
              <div className="flex items-center p-4 bg-white/80 rounded-lg shadow-sm border border-secondary/10">
                <Award className="w-6 h-6 text-secondary mr-3" />
                <span className="text-gray-800 font-medium">Service Excellence</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary/30"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-secondary/50"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-secondary/70"></span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 flex justify-center items-center shadow-sm"
      >
        <div className="bg-white/80 px-6 py-3 rounded-lg shadow-sm border border-primary/5">
          <p className="text-gray-700 font-medium text-center">
            <span className="text-primary font-bold">NJ DCA License #13VH13153100</span> — Fully licensed, bonded, and insured for your protection
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
