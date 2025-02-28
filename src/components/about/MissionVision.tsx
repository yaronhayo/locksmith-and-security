
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4 bg-white p-8 rounded-xl shadow-md border-l-4 border-primary">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Locksmith & Security LLC (NJ DCA License #13VH13153100), we are dedicated to providing expert security solutions 
              with integrity and professionalism. Our mission is to protect what matters most to our clients through 
              reliable, high-quality locksmith services and thoughtful security recommendations tailored to each 
              unique situation.
            </p>
          </div>
          <div className="space-y-4 bg-white p-8 rounded-xl shadow-md border-l-4 border-secondary">
            <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to be North Bergen's trusted security partner, known for our unwavering commitment to 
              excellence and customer satisfaction. Our goal is to continuously evolve with emerging security technologies 
              while maintaining the personalized service and reliability that our community has come to expect from us.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
          <img
            src="/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png"
            alt="Professional locksmith working on a door lock installation"
            className="rounded-lg shadow-xl w-full object-cover h-[500px]"
          />
          
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-bold text-primary mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">
              NJ DCA License #13VH13153100
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
