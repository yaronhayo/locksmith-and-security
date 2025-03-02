
import { ReactNode, useEffect, useState, useCallback, useRef } from "react";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "../map/MapError";
import MapLoader from "../map/MapLoader";
import { toast } from "sonner";

const libraries: LoadScriptProps['libraries'] = ['places'];

// Use a global flag to prevent multiple script loads
let scriptAttempted = false;

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const { data: apiKey, error: apiKeyError, isLoading, isError } = useMapConfig();
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const providerIdRef = useRef(`google-maps-provider-${Math.random().toString(36).substring(2, 9)}`);

  // Check if Google Maps is already available globally
  const isGoogleMapsLoaded = useCallback(() => {
    return typeof window !== 'undefined' && 
           typeof window.google !== 'undefined' && 
           typeof window.google.maps !== 'undefined';
  }, []);

  const handleLoad = useCallback(() => {
    console.log("Google Maps script loaded successfully");
    setScriptLoaded(true);
    setScriptError(null);
    scriptAttempted = true;
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError(error.message || "Failed to load Google Maps");
    toast.error("Failed to load map: Script error");
    scriptAttempted = true;
  }, []);

  // If Google Maps is already loaded, we don't need LoadScript
  useEffect(() => {
    if (isGoogleMapsLoaded()) {
      console.log("Google Maps already loaded in window, skipping LoadScript");
      setScriptLoaded(true);
      setScriptError(null);
    }
  }, [isGoogleMapsLoaded]);

  // Debug logging
  useEffect(() => {
    console.log(`GoogleMapsProvider(${providerIdRef.current}) state:`, { 
      apiKey: apiKey ? "Available" : "Not available", 
      isLoading, 
      hasError: !!apiKeyError || isError,
      scriptLoaded,
      scriptError,
      googleMapsGloballyAvailable: isGoogleMapsLoaded(),
      scriptAttempted
    });
    
    return () => {
      console.log(`GoogleMapsProvider(${providerIdRef.current}) unmounted`);
    };
  }, [apiKey, isLoading, apiKeyError, isError, scriptLoaded, scriptError, isGoogleMapsLoaded]);

  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      // Don't do anything special on unmount for now
      // The script should remain loaded for other components
    };
  }, []);

  if (isLoading) return <MapLoader text="Loading map configuration..." />;
  if (apiKeyError || isError) return <MapError error={apiKeyError?.message || "Failed to load Google Maps API key"} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  // If Google Maps is already loaded globally, just render children
  if (isGoogleMapsLoaded()) {
    return <>{children}</>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      loadingElement={<MapLoader text="Loading Google Maps..." />}
      key={providerIdRef.current}
      preventGoogleFontsLoading={false}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
