
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
  const isScriptLoadedRef = useRef(false);

  const handleLoad = useCallback(() => {
    if (isScriptLoadedRef.current) {
      console.log("Google Maps script already loaded, skipping initialization");
      return;
    }

    console.log("Google Maps script loading...");
    if (!window.google?.maps) {
      console.error("Google Maps not available after load");
      setScriptError("Failed to initialize Google Maps");
      return;
    }

    console.log("Google Maps script loaded successfully");
    isScriptLoadedRef.current = true;
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError(error.message || "Failed to load Google Maps");
    isScriptLoadedRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isScriptLoadedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (apiKeyError) {
      console.error("API Key Error:", apiKeyError);
    }
  }, [apiKeyError]);

  // Only try to load the script if we have an API key and haven't encountered any errors
  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  // If the script is already loaded globally, just render children
  if (window.google?.maps && isScriptLoadedRef.current) {
    return <>{children}</>;
  }

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
