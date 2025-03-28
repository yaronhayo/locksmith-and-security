
import { Shield, DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const NewCarKeyHero = () => {
  return (
    <section className="hero-gradient relative min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Car Key Replacement Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Lost your car key or need a spare? Our expert automotive locksmiths can cut and program 
              new keys for all vehicle makes and models. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="text-lg transition-transform duration-200 hover:scale-105"
              >
                <a href="tel:2017482070" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (201) 748-2070
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <Link to="/book-online">
                  Get Free Quote
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-secondary" />
                <span className="text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-secondary" />
                <span className="text-white">Professional Service</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewCarKeyHero;
