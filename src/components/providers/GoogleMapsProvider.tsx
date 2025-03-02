
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
  const { data: apiKey, error: apiKeyError, isLoading, isError } = useMapConfig();
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const providerIdRef = useRef(`google-maps-provider-${Math.random().toString(36).substring(2, 9)}`);

  const handleLoad = useCallback(() => {
    console.log("Google Maps script loaded successfully");
    setScriptLoaded(true);
    setScriptError(null);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError(error.message || "Failed to load Google Maps");
  }, []);

  // For debugging
  useEffect(() => {
    console.log(`GoogleMapsProvider(${providerIdRef.current}) state:`, { 
      apiKey: apiKey ? "Available" : "Not available", 
      isLoading, 
      hasError: !!apiKeyError || isError,
      scriptLoaded,
      scriptError
    });
    
    return () => {
      console.log(`GoogleMapsProvider(${providerIdRef.current}) unmounted`);
    };
  }, [apiKey, isLoading, apiKeyError, isError, scriptLoaded, scriptError]);

  if (isLoading) return <MapLoader />;
  if (apiKeyError || isError) return <MapError error={apiKeyError?.message || "Failed to load Google Maps API key"} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      loadingElement={<MapLoader />}
      key={providerIdRef.current}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
