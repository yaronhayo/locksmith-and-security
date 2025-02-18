
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

  // Script initialization check
  useEffect(() => {
    if (window.google?.maps) {
      console.log("Google Maps already loaded");
      setIsScriptLoaded(true);
      return;
    }

    const checkGoogleMaps = setInterval(() => {
      if (window.google?.maps) {
        console.log("Google Maps initialized");
        setIsScriptLoaded(true);
        clearInterval(checkGoogleMaps);
      }
    }, 100);

    return () => {
      clearInterval(checkGoogleMaps);
      setIsScriptLoaded(false);
    };
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  // If script is already loaded, render children directly
  if (isScriptLoaded && window.google?.maps) {
    return <>{children}</>;
  }

  // Load script if not already loaded
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
    >
      <div className="w-full h-full">
        {children}
      </div>
    </LoadScript>
  );
};

export default GoogleMapsProvider;
