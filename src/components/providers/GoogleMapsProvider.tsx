
import { ReactNode, useEffect, useState, useCallback } from "react";
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
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);

  const handleLoad = useCallback(() => {
    console.log("Google Maps script loaded successfully");
    setIsScriptLoaded(true);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError("Failed to load Google Maps");
  }, []);

  useEffect(() => {
    // Check if script is already loaded
    if (window.google?.maps) {
      console.log("Google Maps already loaded");
      setIsScriptLoaded(true);
    }

    return () => {
      // Cleanup
      if (window.google?.maps) {
        console.log("Cleaning up Google Maps script");
        delete window.google.maps;
      }
    };
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  if (isScriptLoaded) {
    return <>{children}</>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      onUnmount={() => {
        console.log("Google Maps script unmounting");
        setIsScriptLoaded(false);
      }}
      cleanupOnUnmount={true}
      loadingElement={<MapLoader />}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
