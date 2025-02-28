import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="my-20">
      <motion.div 
        className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Security?</h2>
            <p className="text-primary-50 mb-6">
              Our team of expert locksmiths is ready to help with all your security needs. 
              Contact us today for a consultation or emergency service.
            </p>
            
            <div className="grid gap-4">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>(551) 303-7874</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@northbergenlocksmith.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>North Bergen, NJ 07047</span>
              </div>
              <div className="flex items-center text-white">
                <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Available 24/7 for Emergencies</span>
              </div>
              <div className="flex items-center text-white">
                <Wrench className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Licensed & Insured (NJ DCA #13VH13153100)</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-primary-dark/50">
                <Link to="/book-online">Book Online</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-[url('/placeholder.svg')] bg-cover bg-center hidden md:block">
            {/* Image will be displayed as background */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
