
import { ReactNode, useEffect, useState, createContext, useContext, useCallback } from "react";
import { useGoogleMapsApiKey, useRecaptchaKey } from "@/hooks/useApiKeys";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

type ScriptStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface ScriptsContextType {
  googleMapsStatus: ScriptStatus;
  recaptchaStatus: ScriptStatus;
  googleMapsApiKey: string | null;
  recaptchaKey: string | null;
  googleMapsError: Error | null;
  recaptchaError: Error | null;
  reloadGoogleMaps: () => void;
}

const ScriptsContext = createContext<ScriptsContextType>({
  googleMapsStatus: 'idle',
  recaptchaStatus: 'idle',
  googleMapsApiKey: null,
  recaptchaKey: null,
  googleMapsError: null,
  recaptchaError: null,
  reloadGoogleMaps: () => {},
});

export const useScripts = () => useContext(ScriptsContext);

interface ScriptsProviderProps {
  children: ReactNode;
}

export const ScriptsProvider = ({ children }: ScriptsProviderProps) => {
  // Fetch API keys
  const { 
    data: googleMapsApiKey, 
    error: googleMapsKeyError, 
    isLoading: isLoadingGoogleMapsKey,
    refetch: refetchGoogleMapsKey
  } = useGoogleMapsApiKey();
  
  const { 
    data: recaptchaKey, 
    error: recaptchaKeyError,
    isLoading: isLoadingRecaptchaKey
  } = useRecaptchaKey();

  // Track script loading status
  const [googleMapsStatus, setGoogleMapsStatus] = useState<ScriptStatus>('idle');
  const [recaptchaStatus, setRecaptchaStatus] = useState<ScriptStatus>('idle');
  const [googleMapsError, setGoogleMapsError] = useState<Error | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<Error | null>(null);

  // Function to load Google Maps script
  const loadGoogleMapsScript = useCallback((apiKey: string) => {
    if (googleMapsStatus === 'loading') return;

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
    if (existingScript) {
      // If script exists but Google object is not initialized yet, we're still loading
      if (!window.google?.maps) {
        setGoogleMapsStatus('loading');
        return;
      }
      
      // If Google object is initialized, we're already loaded
      setGoogleMapsStatus('loaded');
      document.dispatchEvent(new Event('google-maps-loaded'));
      return;
    }

    setGoogleMapsStatus('loading');
    setGoogleMapsError(null);

    // Create new script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Google Maps script loaded successfully');
      setGoogleMapsStatus('loaded');
      document.dispatchEvent(new Event('google-maps-loaded'));
    };
    
    script.onerror = (event) => {
      const error = new Error('Failed to load Google Maps script');
      console.error(error);
      setGoogleMapsStatus('error');
      setGoogleMapsError(error);
    };
    
    document.head.appendChild(script);
  }, [googleMapsStatus]);

  // Function to load reCAPTCHA script
  const loadRecaptchaScript = useCallback((siteKey: string) => {
    if (recaptchaStatus === 'loading') return;

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existingScript) {
      // If script exists but grecaptcha object is not initialized yet, we're still loading
      if (!window.grecaptcha) {
        setRecaptchaStatus('loading');
        return;
      }
      
      // If grecaptcha object is initialized, we're already loaded
      setRecaptchaStatus('loaded');
      return;
    }

    setRecaptchaStatus('loading');
    setRecaptchaError(null);

    // Create new script element
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('reCAPTCHA script loaded successfully');
      setRecaptchaStatus('loaded');
    };
    
    script.onerror = (event) => {
      const error = new Error('Failed to load reCAPTCHA script');
      console.error(error);
      setRecaptchaStatus('error');
      setRecaptchaError(error);
    };
    
    document.head.appendChild(script);
  }, [recaptchaStatus]);

  // Load Google Maps script when API key is available
  useEffect(() => {
    if (googleMapsApiKey && googleMapsStatus === 'idle') {
      loadGoogleMapsScript(googleMapsApiKey);
    }
  }, [googleMapsApiKey, googleMapsStatus, loadGoogleMapsScript]);

  // Load reCAPTCHA script when API key is available
  useEffect(() => {
    if (recaptchaKey && recaptchaStatus === 'idle') {
      loadRecaptchaScript(recaptchaKey);
    }
  }, [recaptchaKey, recaptchaStatus, loadRecaptchaScript]);

  // Handle Google Maps key error
  useEffect(() => {
    if (googleMapsKeyError) {
      setGoogleMapsStatus('error');
      setGoogleMapsError(googleMapsKeyError instanceof Error 
        ? googleMapsKeyError 
        : new Error('Failed to fetch Google Maps API key'));
    }
  }, [googleMapsKeyError]);

  // Handle reCAPTCHA key error
  useEffect(() => {
    if (recaptchaKeyError) {
      setRecaptchaStatus('error');
      setRecaptchaError(recaptchaKeyError instanceof Error 
        ? recaptchaKeyError 
        : new Error('Failed to fetch reCAPTCHA site key'));
    }
  }, [recaptchaKeyError]);

  // Function to reload Google Maps
  const reloadGoogleMaps = useCallback(() => {
    setGoogleMapsStatus('idle');
    setGoogleMapsError(null);
    refetchGoogleMapsKey();
  }, [refetchGoogleMapsKey]);

  // Listen for the custom event to reload Google Maps
  useEffect(() => {
    const handleGoogleMapsKeyChanged = () => {
      reloadGoogleMaps();
    };

    document.addEventListener('google-maps-key-changed', handleGoogleMapsKeyChanged);
    
    return () => {
      document.removeEventListener('google-maps-key-changed', handleGoogleMapsKeyChanged);
    };
  }, [reloadGoogleMaps]);

  // Provide context values
  const contextValue: ScriptsContextType = {
    googleMapsStatus,
    recaptchaStatus,
    googleMapsApiKey: googleMapsApiKey || null,
    recaptchaKey: recaptchaKey || null,
    googleMapsError,
    recaptchaError,
    reloadGoogleMaps
  };

  // Show loading state while fetching API keys
  if (isLoadingGoogleMapsKey || isLoadingRecaptchaKey) {
    return (
      <div className="flex items-center justify-center p-8">
        <LoadingSpinner />
        <span className="ml-2">Loading API keys...</span>
      </div>
    );
  }

  return (
    <ScriptsContext.Provider value={contextValue}>
      {children}
    </ScriptsContext.Provider>
  );
};

// Error component for scripts loading errors
export const ScriptLoadError = ({ error }: { error: Error | null }) => {
  if (!error) return null;
  
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {error.message || 'An error occurred loading the required script'}
      </AlertDescription>
    </Alert>
  );
};
