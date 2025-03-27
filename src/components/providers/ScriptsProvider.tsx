
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useGoogleMapsApiKey, useRecaptchaKey } from "@/hooks/useApiKeys";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { toast } from "sonner";

type ScriptType = 'maps' | 'recaptcha';

interface ScriptsContextType {
  googleMapsLoaded: boolean;
  recaptchaLoaded: boolean;
  mapsError: string | null;
  recaptchaError: string | null;
  isLoadingMaps: boolean;
  isLoadingRecaptcha: boolean;
  reloadMapsScript: () => void;
  reloadRecaptchaScript: () => void;
}

const ScriptsContext = createContext<ScriptsContextType | undefined>(undefined);

export const useScripts = () => {
  const context = useContext(ScriptsContext);
  if (!context) {
    throw new Error('useScripts must be used within a ScriptsProvider');
  }
  return context;
};

interface ScriptsProviderProps {
  children: ReactNode;
}

export const ScriptsProvider = ({ children }: ScriptsProviderProps) => {
  // State for script loading status
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [mapsScriptAttempt, setMapsScriptAttempt] = useState(0);
  const [recaptchaScriptAttempt, setRecaptchaScriptAttempt] = useState(0);

  // Fetch API keys
  const { 
    data: mapsApiKey, 
    error: mapsKeyError, 
    isLoading: isLoadingMapsKey
  } = useGoogleMapsApiKey();
  
  const { 
    data: recaptchaKey, 
    error: recaptchaKeyError, 
    isLoading: isLoadingRecaptchaKey
  } = useRecaptchaKey();

  // Manual reload functions
  const reloadMapsScript = () => {
    console.log("Manually reloading Google Maps script");
    setGoogleMapsLoaded(false);
    setMapsError(null);
    const script = document.getElementById('google-maps-script');
    if (script) script.remove();
    setMapsScriptAttempt(prev => prev + 1);
  };
  
  const reloadRecaptchaScript = () => {
    console.log("Manually reloading reCAPTCHA script");
    setRecaptchaLoaded(false);
    setRecaptchaError(null);
    const script = document.getElementById('recaptcha-script');
    if (script) script.remove();
    setRecaptchaScriptAttempt(prev => prev + 1);
  };

  // Load Google Maps script
  useEffect(() => {
    if (isLoadingMapsKey || !mapsApiKey || mapsKeyError) return;
    if (googleMapsLoaded) return;

    // Check if script is already loaded
    if (window.google?.maps) {
      console.log("Google Maps already loaded");
      setGoogleMapsLoaded(true);
      return;
    }

    console.log("Loading Google Maps script...");
    const scriptId = 'google-maps-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
    }

    const handleLoad = () => {
      console.log("Google Maps script loaded successfully");
      setGoogleMapsLoaded(true);
      setMapsError(null);
      document.dispatchEvent(new Event('google-maps-loaded'));
    };

    const handleError = (e: Event | string) => {
      let errorMsg = "Failed to load Google Maps";
      
      // Check for specific Google Maps errors in console
      if (e instanceof ErrorEvent && e.error) {
        errorMsg = `Google Maps error: ${e.error.message || e.message}`;
        
        if (e.error.message?.includes('billing')) {
          errorMsg = "You must enable Billing on the Google Cloud Project. For development purposes only.";
          toast.error("Google Maps API Billing Required", {
            description: "Please enable billing in your Google Cloud Console for full functionality.",
            duration: 10000,
          });
        }
      }
      
      console.error(errorMsg);
      setMapsError(errorMsg);
      setGoogleMapsLoaded(false);
      script.remove();
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    // Also listen for Google Maps specific errors
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (source?.includes('maps.googleapis.com') || 
          message?.toString().includes('google') || 
          message?.toString().includes('maps')) {
        handleError(String(message));
      }
      return originalOnError ? originalOnError(message, source, lineno, colno, error) : false;
    };

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      window.onerror = originalOnError;
    };
  }, [mapsApiKey, isLoadingMapsKey, mapsKeyError, googleMapsLoaded, mapsScriptAttempt]);

  // Load reCAPTCHA script
  useEffect(() => {
    if (isLoadingRecaptchaKey || !recaptchaKey || recaptchaKeyError) return;
    if (recaptchaLoaded) return;

    // Check if script is already loaded
    if (window.grecaptcha) {
      console.log("reCAPTCHA already loaded");
      setRecaptchaLoaded(true);
      return;
    }

    console.log("Loading reCAPTCHA script...");
    const scriptId = 'recaptcha-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
    }

    const handleLoad = () => {
      console.log("reCAPTCHA script loaded successfully");
      setRecaptchaLoaded(true);
      setRecaptchaError(null);
      document.dispatchEvent(new Event('recaptcha-loaded'));
    };

    const handleError = () => {
      const errorMsg = "Failed to load reCAPTCHA script";
      console.error(errorMsg);
      setRecaptchaError(errorMsg);
      script.remove();
      
      toast.error("reCAPTCHA API Error", {
        description: "Please check your reCAPTCHA configuration in the Google Cloud Console.",
        duration: 8000,
      });
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [recaptchaKey, isLoadingRecaptchaKey, recaptchaKeyError, recaptchaLoaded, recaptchaScriptAttempt]);

  // Handle reload requests
  useEffect(() => {
    const handleMapsReload = () => reloadMapsScript();
    const handleRecaptchaReload = () => reloadRecaptchaScript();

    document.addEventListener('reload-google-maps', handleMapsReload);
    document.addEventListener('reload-recaptcha', handleRecaptchaReload);

    return () => {
      document.removeEventListener('reload-google-maps', handleMapsReload);
      document.removeEventListener('reload-recaptcha', handleRecaptchaReload);
    };
  }, []);

  const value = {
    googleMapsLoaded,
    recaptchaLoaded,
    mapsError: mapsKeyError ? mapsKeyError.message : mapsError,
    recaptchaError: recaptchaKeyError ? recaptchaKeyError.message : recaptchaError,
    isLoadingMaps: isLoadingMapsKey || (!googleMapsLoaded && !mapsError && !mapsKeyError),
    isLoadingRecaptcha: isLoadingRecaptchaKey || (!recaptchaLoaded && !recaptchaError && !recaptchaKeyError),
    reloadMapsScript,
    reloadRecaptchaScript
  };

  return (
    <ScriptsContext.Provider value={value}>
      {children}
    </ScriptsContext.Provider>
  );
};

// Error component for script loading errors
export const ScriptError = ({ type, error }: { type: ScriptType, error: string }) => {
  const { reloadMapsScript, reloadRecaptchaScript } = useScripts();
  const isBillingError = error?.toLowerCase().includes('billing') || 
                          error?.toLowerCase().includes('payment');

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="space-y-1">
        <p>{`Failed to load ${type === 'maps' ? 'Google Maps' : 'reCAPTCHA'}: ${error}`}</p>
        
        {isBillingError && (
          <p className="text-xs mt-1">
            You need to enable billing for your Google Cloud Project.{' '}
            <a 
              href="https://console.cloud.google.com/project/_/billing/enable" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              Open Google Cloud Console
            </a>
          </p>
        )}
        
        <button
          onClick={type === 'maps' ? reloadMapsScript : reloadRecaptchaScript}
          className="text-xs underline mt-1 hover:text-blue-700"
        >
          Try again
        </button>
      </AlertDescription>
    </Alert>
  );
};

// Loading component for script loading state
export const ScriptLoading = ({ type }: { type: ScriptType }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <LoadingSpinner size="sm" />
      <span className="ml-2 text-sm text-gray-500">
        {`Loading ${type === 'maps' ? 'Google Maps' : 'reCAPTCHA'}...`}
      </span>
    </div>
  );
};
