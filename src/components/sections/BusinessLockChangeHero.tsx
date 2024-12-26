import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const BusinessLockChangeHero = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Licensed & Insured Service</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Business Lock Change Services
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Expert commercial lock change and security upgrade services for businesses in North Bergen and surrounding areas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base group"
              asChild
            >
              <a href="tel:+15513037874" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5 animate-phone-ring" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base bg-white/10 hover:bg-white/20 border-white"
              asChild
            >
              <a href="/book-online">Book Online</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">24/7 Service</h3>
              <p className="text-sm text-white/80">Available anytime</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Licensed & Insured</h3>
              <p className="text-sm text-white/80">Professional service</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Fast Response</h3>
              <p className="text-sm text-white/80">Quick arrival time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessLockChangeHero;