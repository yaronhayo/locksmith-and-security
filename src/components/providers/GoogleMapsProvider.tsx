
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

  // Prevent duplicate script loading
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
    if (existingScript) {
      console.log("Google Maps script already loaded, reusing existing script");
      return;
    }
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
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
