import { Shield, Clock, DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

const HouseLockoutHero = () => {
  return (
    <section className="hero-gradient relative min-h-[calc(100vh-80px)] flex items-center -mt-8">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Locked Out? We've Got You Covered!
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional locksmith service in North Bergen available 24/7. 
              Fast response time, fair pricing, and damage-free entry guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <a href="tel:5513037874" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (551) 303-7874
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
                Get Free Quote
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-secondary" />
                <span className="text-white">15-30 Min Response</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-secondary" />
                <span className="text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-secondary" />
                <span className="text-white">Upfront Pricing</span>
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
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Request Emergency Service</h2>
                <p className="text-gray-600 mt-2">Get help within 15-30 minutes</p>
              </div>
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HouseLockoutHero;