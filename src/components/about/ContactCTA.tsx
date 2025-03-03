
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="my-24">
      <motion.div 
        className="rounded-3xl overflow-hidden shadow-2xl relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800 opacity-90"></div>
        
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-dark/20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/20 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Secure <br className="hidden md:block" />Your Property?
              </h2>
              
              <p className="text-primary-50 mb-8 text-lg max-w-lg">
                Our team of certified locksmiths is available 24/7 to help with all your security needs. 
                Contact us today for a consultation or emergency locksmith service.
              </p>
              
              <div className="grid gap-5 mb-10">
                <motion.div 
                  className="flex items-center text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">(201) 748-2070</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">info@northbergenlocksmith.com</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">North Bergen, NJ 07047</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Available 24/7 for Emergencies</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Licensed & Insured (NJ DCA #13VH13153100)</span>
                </motion.div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-base">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/10 hover:border-blue-300 hover:text-blue-300 font-semibold text-base">
                  <Link to="/book-online">Book Online</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary opacity-70"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
