
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Locksmith & Security LLC (NJ DCA License #13VH13153100), we provide fast, reliable locksmith services and expert solutions, 
              prioritizing safety and security for homes, businesses, and vehicles. Our goal is to deliver 
              tailored solutions with a focus on customer satisfaction and security.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We aim to be North Bergen's top locksmith provider, known for our commitment to strong customer trust 
              and consistent improvement. We strive to give all customers reliable, effective solutions to meet 
              security needs and exceed safety expectations.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png"
            alt="Professional locksmith working on a door lock installation"
            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
