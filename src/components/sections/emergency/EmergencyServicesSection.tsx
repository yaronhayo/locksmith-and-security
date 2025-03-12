
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { Clock, PhoneCall, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Emergency service types
const emergencyServices = [
  {
    title: "Residential Lockout",
    description: "Locked out of your home? Our experienced technicians will help you regain access quickly and safely, with minimal disruption.",
    path: "/services/emergency-locksmith/house-lockout"
  },
  {
    title: "Car Lockout",
    description: "We can unlock virtually any vehicle, whether you've locked your keys inside or need key replacement for a lost or broken car key.",
    path: "/services/emergency-locksmith/car-lockout"
  },
  {
    title: "Business Lockout",
    description: "Our commercial lockout services ensure your business operations can resume quickly when you experience a lockout situation.",
    path: "/services/emergency-locksmith/business-lockout"
  },
  {
    title: "Broken Key Extraction",
    description: "If your key breaks in the lock, don't attempt to remove it yourself. Our locksmiths have specialized tools to safely extract it.",
    path: "/services/emergency-locksmith"
  }
];

const EmergencyServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Locksmith Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Locked out or facing a security emergency? Count on our fast, reliable response anytime.
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {emergencyServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-primary rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Emergency? Call Us Now</h3>
              <p className="text-white/90 text-lg mb-6">
                We respond to emergency locksmith calls 24/7/365. Our technicians will reach you quickly to resolve your lockout or security issue.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:2017482070" 
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "font-bold"
                  )}
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  (201) 748-2070
                </a>
                
                <Link 
                  to="/services/emergency-locksmith"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white text-white hover:bg-white/20"
                  )}
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-primary-dark md:w-1/3 p-8 md:p-10 flex flex-col justify-center items-start space-y-6">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-secondary mr-3" />
                <div>
                  <h4 className="text-white font-medium">24/7 Service</h4>
                  <p className="text-white/80">Always available</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Star className="w-6 h-6 text-secondary mr-3" />
                <div>
                  <h4 className="text-white font-medium">Licensed & Insured</h4>
                  <p className="text-white/80">#13VH13153100</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-medium">Response Time</h4>
                <p className="text-white/80">20-30 minutes in most areas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyServicesSection;
