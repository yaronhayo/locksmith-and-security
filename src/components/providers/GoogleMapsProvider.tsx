
import { ReactNode, useEffect, useState, useCallback, useRef } from "react";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "../map/MapError";
import MapLoader from "../map/MapLoader";

const libraries: LoadScriptProps['libraries'] = ['places'];

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const scriptLoadedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLoad = useCallback(() => {
    console.log("Google Maps script loading...");
    
    // Set a timeout to verify the script loaded successfully
    scriptLoadedTimeoutRef.current = setTimeout(() => {
      if (!window.google?.maps) {
        console.error("Google Maps not available after load timeout");
        setScriptError("Failed to initialize Google Maps");
        return;
      }
      console.log("Google Maps script loaded and verified");
      setIsScriptLoaded(true);
    }, 1000);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError(error.message || "Failed to load Google Maps");
    setIsScriptLoaded(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scriptLoadedTimeoutRef.current) {
        clearTimeout(scriptLoadedTimeoutRef.current);
      }
      setIsScriptLoaded(false);
    };
  }, []);

  useEffect(() => {
    if (apiKeyError) {
      console.error("API Key Error:", apiKeyError);
    }
  }, [apiKeyError]);

  // Show loading state while checking API key
  if (isLoading) return <MapLoader />;
  
  // Show errors if they exist
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      loadingElement={<MapLoader />}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
