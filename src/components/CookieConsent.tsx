import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and unchangeable
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Always true
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    setPreferences(allRejected);
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600 flex-grow">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <span>We value your privacy</span>
                </div>
                <p className="mt-1">
                  We use cookies to enhance your experience and analyze our traffic. 
                  You can choose your preferences below.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Cookie Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Cookie Preferences</DialogTitle>
                      <DialogDescription>
                        Customize your cookie preferences below. Some cookies are necessary for the website to function and cannot be disabled.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Necessary Cookies</h4>
                          <p className="text-sm text-gray-500">Required for the website to function properly</p>
                        </div>
                        <input type="checkbox" checked disabled className="accent-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Analytics Cookies</h4>
                          <p className="text-sm text-gray-500">Help us improve our website</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences(prev => ({...prev, analytics: e.target.checked}))}
                          className="accent-primary"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Cookies</h4>
                          <p className="text-sm text-gray-500">Used for targeted advertising</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences(prev => ({...prev, marketing: e.target.checked}))}
                          className="accent-primary"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleRejectAll}>
                        Reject All
                      </Button>
                      <Button onClick={handleSavePreferences}>
                        Save Preferences
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="default"
                  onClick={handleAcceptAll}
                  size="sm"
                >
                  Accept All
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleRejectAll}
                  className="rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;