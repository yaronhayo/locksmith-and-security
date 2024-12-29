import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
        >
          <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2">Cookie Consent</h2>
              <p className="text-gray-600">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                Learn more in our{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDecline}>
                Decline
              </Button>
              <Button onClick={handleAccept}>
                Accept All
              </Button>
              <button
                onClick={handleDecline}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close cookie consent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;