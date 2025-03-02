
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings, Info, AlertTriangle } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  thirdParty: boolean;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    thirdParty: false
  });

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      try {
        const savedSettings = JSON.parse(consent);
        if (typeof savedSettings === 'object') {
          setCookieSettings(prevSettings => ({ 
            ...prevSettings, 
            ...savedSettings 
          }));
        }
      } catch (e) {
        // If parsing fails, keep default settings
        console.log('Failed to parse saved cookie settings');
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      thirdParty: true
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setCookieSettings(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieSettings));
    setIsVisible(false);
    setSettingsOpen(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      thirdParty: false
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setCookieSettings(necessaryOnly);
    setIsVisible(false);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    setCookieSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleOpenSettings = () => {
    setSettingsOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600 flex-grow">
                <p className="mb-2">
                  We use cookies to enhance your experience. Some cookies are necessary, while others help us improve 
                  functionality and analyze traffic.
                </p>
                <p className="text-xs flex items-center">
                  <AlertTriangle className="h-3 w-3 inline-block mr-1 text-amber-500" />
                  <span>
                    Some features like reCAPTCHA require third-party cookies which may be blocked by modern browsers.
                    <a href="/privacy-policy" className="text-primary hover:text-primary-hover underline ml-1">
                      Learn more
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptNecessary}
                  className="whitespace-nowrap"
                >
                  Necessary Only
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={handleOpenSettings}
                  className="whitespace-nowrap"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Cookie Settings
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="whitespace-nowrap"
                >
                  Accept All
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleAcceptNecessary}
                  className="rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie Settings</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Necessary cookies are required for basic site functionality.
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="privacy">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Information</TabsTrigger>
            </TabsList>
            
            <TabsContent value="privacy" className="space-y-4 pt-4">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <Label htmlFor="necessary-cookies" className="font-medium">Necessary Cookies</Label>
                  <p className="text-xs text-gray-500">Required for the website to function properly.</p>
                </div>
                <Switch id="necessary-cookies" checked disabled />
              </div>
              
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <Label htmlFor="analytics-cookies" className="font-medium">Analytics Cookies</Label>
                  <p className="text-xs text-gray-500">Help us understand how visitors interact with our website.</p>
                </div>
                <Switch 
                  id="analytics-cookies" 
                  checked={cookieSettings.analytics} 
                  onCheckedChange={() => toggleSetting('analytics')}
                />
              </div>
              
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <Label htmlFor="marketing-cookies" className="font-medium">Marketing Cookies</Label>
                  <p className="text-xs text-gray-500">Used to deliver advertisements more relevant to you.</p>
                </div>
                <Switch 
                  id="marketing-cookies" 
                  checked={cookieSettings.marketing} 
                  onCheckedChange={() => toggleSetting('marketing')}
                />
              </div>
              
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <Label htmlFor="third-party-cookies" className="font-medium">Third-Party Cookies</Label>
                  <p className="text-xs text-gray-500">Set by services like Google reCAPTCHA and analytics tools.</p>
                </div>
                <Switch 
                  id="third-party-cookies" 
                  checked={cookieSettings.thirdParty} 
                  onCheckedChange={() => toggleSetting('thirdParty')}
                />
              </div>
              
              <Alert variant="warning" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Browser Privacy Changes</AlertTitle>
                <AlertDescription className="text-xs">
                  Chrome and other browsers are phasing out third-party cookies. 
                  Some features (like reCAPTCHA) rely on these cookies and may be affected. 
                  Enabling third-party cookies in your browser settings might be required for full functionality.
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="cookies" className="pt-4">
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly.
                  They don't collect any personal information and are always enabled.
                </p>
                <p>
                  <strong>Analytics Cookies:</strong> These help us analyze how visitors use our website,
                  allowing us to improve your experience. They collect anonymous data about your visit.
                </p>
                <p>
                  <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites
                  to enable us to display relevant advertisements.
                </p>
                <p>
                  <strong>Third-Party Cookies:</strong> These cookies are set by services like Google reCAPTCHA, 
                  Google Analytics, and other external services.
                </p>
                
                <div className="bg-amber-50 p-3 rounded-md border border-amber-200 mt-4">
                  <h4 className="font-medium text-amber-800 flex items-center mb-1">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Third-Party Cookie Changes
                  </h4>
                  <p className="text-xs text-amber-700">
                    Chrome and other browsers are phasing out third-party cookies for enhanced privacy. 
                    Features like reCAPTCHA require these cookies to function properly. You may need to:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-amber-700 mt-1">
                    <li>Allow third-party cookies in your browser settings</li>
                    <li>Check that you can complete the reCAPTCHA verification</li>
                    <li>Try a different browser if you experience issues</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Button 
              onClick={handleAcceptNecessary} 
              variant="outline"
              size="sm"
            >
              Necessary Only
            </Button>
            <div className="flex gap-2">
              <Button 
                onClick={handleAcceptSelected} 
                variant="default"
                size="sm"
              >
                Save Preferences
              </Button>
              <Button 
                onClick={handleAcceptAll} 
                variant="secondary"
                size="sm"
              >
                Accept All
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
