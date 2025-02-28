
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-lg p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
              <p className="text-white/85 mb-8 text-lg">
                Our team of professional locksmiths is ready to help with all your security needs. 
                From residential to commercial and automotive services, we're here to provide expert solutions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="bg-white/10 p-5 rounded-lg flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p className="text-white/80 text-sm">North Bergen, NJ</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-5 rounded-lg flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-white/80 text-sm">(551) 303-7874</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-5 rounded-lg flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-white/80 text-sm">info@locksmithandsecurity.com</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                <a href="/contact">Contact Us Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <a href="/services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
