
import { Clock, Shield, MapPin, Award, CheckCircle, Key } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceAreaInfoProps {
  locationName: string;
  locationDescription?: string;
}

const ServiceAreaInfo = ({ locationName, locationDescription }: ServiceAreaInfoProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/90 p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl text-white font-bold">Professional Locksmith Services in {locationName}, NJ</h2>
      </div>
      
      <div className="p-4 sm:p-6 md:p-8">
        <div className="prose max-w-none">
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Welcome to your trusted local locksmith in {locationName}, NJ. We provide professional, reliable locksmith services for all residential, commercial, and automotive security needs. Our team of licensed and insured technicians are available 24/7 to serve the {locationName} community with expert security solutions.
          </p>
          
          {locationDescription && (
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              {locationDescription}
            </p>
          )}
          
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8 text-primary"
          >
            How We Serve {locationName}
          </motion.h3>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-700 mb-4"
          >
            For years, we've been providing {locationName} residents and businesses with exceptional locksmith services. Our local technicians know the area well and can quickly respond to your security needs.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-4 my-5 sm:my-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-secondary/5 p-4 sm:p-6 rounded-lg border-l-4 border-secondary"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-secondary">
                <MapPin className="h-5 w-5" />
                Local Expertise
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our technicians are familiar with {locationName}'s unique security needs, from residential neighborhoods to commercial districts.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-secondary/5 p-4 sm:p-6 rounded-lg border-l-4 border-secondary"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-secondary">
                <Award className="h-5 w-5" />
                Licensed & Certified
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our locksmiths are fully licensed, insured, and certified to provide locksmith services in {locationName} and throughout New Jersey.
              </p>
            </motion.div>
          </div>

          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary"
          >
            Why {locationName} Residents Choose Us
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg text-center"
            >
              <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-secondary mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2">24/7 Availability</h4>
              <p className="text-xs sm:text-sm text-gray-600">Always available</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg text-center"
            >
              <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-secondary mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2">Fully Insured</h4>
              <p className="text-xs sm:text-sm text-gray-600">Complete protection</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg text-center"
            >
              <Key className="h-7 w-7 sm:h-8 sm:w-8 text-secondary mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2">Expert Technicians</h4>
              <p className="text-xs sm:text-sm text-gray-600">Skilled professionals</p>
            </motion.div>
          </div>
          
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary"
            >
              Our Commitment to {locationName}
            </motion.h3>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Fast Response Times:</span> When you're locked out or facing a security emergency in {locationName}, you need help quickly.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Quality Workmanship:</span> We use high-quality materials and the latest techniques to ensure that every job is done right.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Customer Satisfaction:</span> Our technicians are not only skilled in locksmithing but also in providing excellent customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaInfo;
