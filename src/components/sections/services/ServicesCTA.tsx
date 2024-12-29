import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";

const ServicesCTA = () => {
  const { toast } = useToast();

  const handleCallClick = () => {
    console.log("Call button clicked");
    toast({
      title: "Calling...",
      description: "Connecting you to our emergency service line.",
    });
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section 
        className="py-16 lg:py-20 bg-primary text-white" 
        aria-labelledby="cta-title"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              id="cta-title"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Need Emergency Locksmith Service?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Our professional locksmiths are available 24/7 to help you with any lock-related emergency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-white text-white bg-transparent hover:bg-white/10"
                onClick={handleCallClick}
              >
                <a 
                  href="tel:5513037874" 
                  className="flex items-center justify-center"
                  aria-label="Call our emergency service line"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (551) 303-7874
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="text-primary hover:text-primary-foreground"
              >
                <Link 
                  to="/book-online" 
                  className="flex items-center justify-center"
                  aria-label="Book our services online"
                >
                  Book Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ServicesCTA;