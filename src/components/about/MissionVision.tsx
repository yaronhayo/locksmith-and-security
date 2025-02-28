
import { motion } from "framer-motion";
import { Bookmark, Compass, Award } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary h-full"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Bookmark className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            At Locksmith & Security LLC (NJ DCA License #13VH13153100), we are dedicated to providing expert security solutions 
            with integrity and professionalism. Our mission is to protect what matters most to our clients through 
            reliable, high-quality locksmith services and thoughtful security recommendations tailored to each 
            unique situation.
          </p>
          
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-gray-700 italic">
              "We believe everyone deserves to feel secure in their home, business, and vehicle."
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-md border-l-4 border-secondary h-full"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
              <Compass className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            We strive to be North Bergen's trusted security partner, known for our unwavering commitment to 
            excellence and customer satisfaction. Our goal is to continuously evolve with emerging security technologies 
            while maintaining the personalized service and reliability that our community has come to expect from us.
          </p>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Award className="w-5 h-5 text-secondary mr-2" />
              <span className="text-sm font-medium">Certified Excellence</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Award className="w-5 h-5 text-secondary mr-2" />
              <span className="text-sm font-medium">Licensed Professionals</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg border border-gray-100 text-center"
      >
        <p className="text-gray-700 font-medium">
          <span className="text-primary font-bold">NJ DCA License #13VH13153100</span> - Fully licensed, bonded, and insured for your protection
        </p>
      </motion.div>
    </section>
  );
};

export default MissionVision;
