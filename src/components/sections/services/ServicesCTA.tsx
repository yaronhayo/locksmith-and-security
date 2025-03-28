
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicPhoneNumber from "@/components/common/DynamicPhoneNumber";
import { usePhoneNumber } from "@/utils/phoneUtils";

const ServicesCTA = () => {
  const { phoneHref } = usePhoneNumber();
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute top-[50%] right-[25%] w-40 h-40 rounded-full bg-secondary/20 blur-xl"></div>
      </div>
      
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFA500" fillOpacity="1" d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,218.7C560,224,640,160,720,149.3C800,139,880,181,960,181.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-block p-4 rounded-full bg-white/10">
              <Shield className="h-10 w-10 text-secondary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Emergency Locksmith Service?
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Our professional locksmiths are available 24/7 to help you with any lock-related emergency
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={phoneHref} className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call <DynamicPhoneNumber asLink={false} />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="text-primary font-semibold hover:bg-secondary-hover hover:text-primary-dark shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/book-online" className="flex items-center">
                Book Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
