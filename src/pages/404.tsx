
import { Button } from "@/components/ui/button";
import { Phone, Home, ArrowLeft, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumbs from "@/components/Breadcrumbs";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Log 404 errors for monitoring
  useEffect(() => {
    console.error("404 page not found error triggered", {
      url: window.location.href,
      referrer: document.referrer,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Page Not Found | 24/7 Locksmith & Security LLC</title>
        <meta name="description" content="We couldn't find the page you're looking for. Return to our homepage or contact our 24/7 locksmith service for immediate assistance." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/404" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full space-y-8 text-center"
        >
          <div>
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. Let us help you get back on track.
            </p>
          </div>

          <div className="grid gap-4">
            <Button onClick={() => navigate(-1)} variant="outline" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            
            <Button asChild className="w-full">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/services">
                <Search className="mr-2 h-4 w-4" />
                Browse Services
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t">
            <p className="text-gray-600 mb-4">Need immediate assistance?</p>
            <Button asChild variant="secondary">
              <a href="tel:2017482070" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Call (201) 748-2070
              </a>
            </Button>
          </div>

          <div className="pt-6 text-sm text-gray-500">
            <p>Popular pages:</p>
            <ul className="mt-2 space-y-1">
              <li><Link to="/services/emergency-locksmith/car-lockout" className="text-primary hover:underline">Car Lockout</Link></li>
              <li><Link to="/services/residential-locksmith/lock-replacement" className="text-primary hover:underline">Residential Lock Replacement</Link></li>
              <li><Link to="/services/auto-locksmith/car-key-replacement" className="text-primary hover:underline">Car Key Replacement</Link></li>
              <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(NotFoundPage);
