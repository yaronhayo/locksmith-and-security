import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useGoogleMapsApiKey, useRecaptchaKey } from "@/hooks/useApiKeys";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

type ScriptType = 'maps' | 'recaptcha';

interface ScriptsContextType {
  googleMapsLoaded: boolean;
  recaptchaLoaded: boolean;
  mapsError: string | null;
  recaptchaError: string | null;
  isLoadingMaps: boolean;
  isLoadingRecaptcha: boolean;
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

  // Load Google Maps script with async attribute and correct loading pattern
  useEffect(() => {
    if (isLoadingMapsKey || !mapsApiKey || mapsKeyError) return;
    if (googleMapsLoaded) return;

    // Check if script is already loaded
    if (window.google?.maps) {
      console.log("Google Maps already loaded");
      setGoogleMapsLoaded(true);
      return;
    }

    console.log("Loading Google Maps script with correct loading pattern...");
    const scriptId = 'google-maps-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      // Use the recommended pattern with callback=initMap
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
    }

    // Define global callback for Maps API
    window.initMap = () => {
      console.log("Google Maps script initialized via callback");
      setGoogleMapsLoaded(true);
      setMapsError(null);
      document.dispatchEvent(new Event('google-maps-loaded'));
    };

    const handleError = () => {
      console.error("Failed to load Google Maps script");
      setMapsError("Failed to load Google Maps");
      script.remove();
    };

    script.addEventListener('error', handleError);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('error', handleError);
    };
  }, [mapsApiKey, isLoadingMapsKey, mapsKeyError, googleMapsLoaded]);

  // Load reCAPTCHA script
  useEffect(() => {
    if (isLoadingRecaptchaKey || !recaptchaKey || recaptchaKeyError) return;
    if (recaptchaLoaded) return;

    // Check if script is already loaded or in the process of loading
    if (document.getElementById('recaptcha-script')) {
      // Script tag exists, check if API is available
      if (window.grecaptcha && window.grecaptcha.render) {
        console.log("reCAPTCHA already loaded and initialized");
        setRecaptchaLoaded(true);
        return;
      }
      
      // Script tag exists but API might not be ready yet, wait for it
      console.log("reCAPTCHA script tag exists but API not ready yet");
      // We'll continue with the loading process and let the load event handle it
    }

    console.log("Loading reCAPTCHA script...");
    const scriptId = 'recaptcha-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      // Explicitly use the explicit render mode
      script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit`;
      script.async = true;
      script.defer = true;
    }

    // Define global callback for reCAPTCHA
    window.onRecaptchaLoaded = () => {
      console.log("reCAPTCHA script loaded successfully via callback");
      setRecaptchaLoaded(true);
      setRecaptchaError(null);
      document.dispatchEvent(new Event('recaptcha-loaded'));
    };

    const handleLoad = () => {
      console.log("reCAPTCHA script onload event fired");
      // The onload callback should be triggered separately
      // Wait a bit for grecaptcha to be fully initialized
      setTimeout(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          console.log("reCAPTCHA fully initialized on script load");
          setRecaptchaLoaded(true);
          setRecaptchaError(null);
          document.dispatchEvent(new Event('recaptcha-loaded'));
        } else {
          console.log("reCAPTCHA not fully initialized yet, waiting for callback");
        }
      }, 500);
    };

    const handleError = () => {
      console.error("Failed to load reCAPTCHA script");
      setRecaptchaError("Failed to load reCAPTCHA");
      script.remove();
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [recaptchaKey, isLoadingRecaptchaKey, recaptchaKeyError, recaptchaLoaded]);

  // Handle reload requests
  useEffect(() => {
    const handleMapsReload = () => {
      setGoogleMapsLoaded(false);
      const script = document.getElementById('google-maps-script');
      if (script) script.remove();
    };

    const handleRecaptchaReload = () => {
      setRecaptchaLoaded(false);
      const script = document.getElementById('recaptcha-script');
      if (script) script.remove();
    };

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
    isLoadingRecaptcha: isLoadingRecaptchaKey || (!recaptchaLoaded && !recaptchaError && !recaptchaKeyError)
  };

  return (
    <ScriptsContext.Provider value={value}>
      {children}
    </ScriptsContext.Provider>
  );
};

// Error component for script loading errors
export const ScriptError = ({ type, error }: { type: ScriptType, error: string }) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {`Failed to load ${type === 'maps' ? 'Google Maps' : 'reCAPTCHA'}: ${error}`}
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
