
import { ReactNode, useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "../map/MapError";
import MapLoader from "../map/MapLoader";

const libraries: ("places")[] = ['places'];

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Prevent duplicate script loading
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
    if (existingScript) {
      console.log("Google Maps script already loaded, reusing existing script");
      // If script is already in the DOM, check if Google object is initialized
      if (window.google?.maps) {
        setScriptLoaded(true);
        // Dispatch event for components that might be waiting for Maps to load
        document.dispatchEvent(new Event('google-maps-loaded'));
      }
      return;
    }
  }, []);

  // Handle script load success
  const handleScriptLoad = () => {
    console.log("Google Maps script loaded successfully");
    setScriptLoaded(true);
    document.dispatchEvent(new Event('google-maps-loaded'));
  };

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  // If script is already loaded, just render children
  if (scriptLoaded) {
    return <>{children}</>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleScriptLoad}
      onError={(error) => {
        console.error("Error loading Google Maps script:", error);
        setScriptError(error?.message || "Failed to load Google Maps");
      }}
      loadingElement={<MapLoader />}
      preventGoogleFontsLoading
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
