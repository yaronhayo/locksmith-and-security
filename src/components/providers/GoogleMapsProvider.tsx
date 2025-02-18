
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
    if (!window.google?.maps) {
      console.error("Google Maps not available after load");
      setScriptError("Failed to initialize Google Maps");
      return;
    }
    console.log("Google Maps script loaded successfully");
    setIsScriptLoaded(true);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError("Failed to load Google Maps");
  }, []);

  useEffect(() => {
    // Clear any existing script tags to prevent duplicates
    const existingScripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
    existingScripts.forEach(script => script.remove());

    if (window.google?.maps) {
      console.log("Google Maps already available");
      setIsScriptLoaded(true);
    }

    return () => {
      setIsScriptLoaded(false);
    };
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  if (isScriptLoaded && window.google?.maps) {
    return <>{children}</>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      onUnmount={() => setIsScriptLoaded(false)}
    >
      <div className="w-full h-full">
        <MapLoader />
      </div>
    </LoadScript>
  );
};

export default GoogleMapsProvider;
