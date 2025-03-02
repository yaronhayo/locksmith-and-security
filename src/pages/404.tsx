
import { Button } from "@/components/ui/button";
import { Phone, Home, ArrowLeft, Search, Key, LockKeyhole, DoorOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResponsiveImage from "@/components/ui/responsive-image";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Log 404 errors for monitoring
  useEffect(() => {
    console.error("404 page not found error triggered", {
      url: window.location.href,
      referrer: document.referrer,
    });
  }, []);

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Animated key that "unlocks" on hover
  const keyVariants = {
    idle: { rotate: 0 },
    hover: { rotate: 90, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Helmet>
        <title>Page Not Found | 24/7 Locksmith & Security LLC</title>
        <meta name="description" content="We couldn't find the page you're looking for. Return to our homepage or contact our 24/7 locksmith service for immediate assistance." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/404" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl w-full space-y-8 text-center"
        >
          {/* Top visual elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute w-full flex justify-center -top-28">
              <motion.div 
                initial="idle"
                whileHover="hover"
                variants={keyVariants}
                className="text-primary"
              >
                <Key size={120} className="filter drop-shadow-xl" />
              </motion.div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-2 border-gray-200 pt-24 pb-8 px-8 mt-16">
              <div className="flex justify-center space-x-4 mb-6">
                <LockKeyhole className="h-16 w-16 text-primary" />
                <h1 className="text-6xl font-bold text-primary">404</h1>
                <DoorOpen className="h-16 w-16 text-primary" />
              </div>
              
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                Looks Like This Door Doesn't Exist!
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 mb-8 max-w-lg mx-auto"
              >
                Even our master keys can't unlock this page! But don't worry, our expert locksmiths can help you find your way back.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto"
              >
                <Button 
                  onClick={() => navigate(-1)} 
                  variant="outline" 
                  className="flex items-center gap-2 h-12"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                
                <Button asChild className="flex items-center gap-2 h-12">
                  <Link to="/">
                    <Home className="h-4 w-4" />
                    Return Home
                  </Link>
                </Button>
                
                <Button asChild variant="secondary" className="flex items-center gap-2 h-12 sm:col-span-2">
                  <Link to="/services">
                    <Search className="h-4 w-4" />
                    Browse Our Services
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Fun illustrations or elements */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-medium mb-2">Did You Know?</h3>
              <p className="text-sm text-gray-600">The first locks were made of wood in Ancient Egypt over 6,000 years ago. Our technology has improved a bit since then!</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-medium mb-2">Pro Locksmith Tip:</h3>
              <p className="text-sm text-gray-600">Unlike this page, most locks can be opened! Call us if you're locked out, but maybe not if you're "404'd" out.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-medium mb-2">Emergency?</h3>
              <p className="text-sm text-gray-600">Locked out in real life? That we can fix! Call our 24/7 emergency locksmith service.</p>
            </div>
          </motion.div>
          
          {/* Emergency call section */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600 mb-4">Need immediate assistance?</p>
            <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
              <a href="tel:2017482070" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (201) 748-2070
              </a>
            </Button>
            <p className="mt-4 text-sm text-gray-500">We'll unlock your problems, not just your doors!</p>
          </motion.div>

          {/* Popular pages section */}
          <motion.div 
            variants={itemVariants}
            className="pt-6 text-sm text-gray-500"
          >
            <p>Popular pages you might be looking for:</p>
            <ul className="mt-2 space-y-1">
              <li><Link to="/services/emergency-locksmith/car-lockout" className="text-primary hover:underline">Car Lockout</Link></li>
              <li><Link to="/services/residential-locksmith/lock-replacement" className="text-primary hover:underline">Residential Lock Replacement</Link></li>
              <li><Link to="/services/auto-locksmith/car-key-replacement" className="text-primary hover:underline">Car Key Replacement</Link></li>
              <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(NotFoundPage);
