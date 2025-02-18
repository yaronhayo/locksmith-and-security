
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
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    const isGoogleDefined = typeof google !== 'undefined' && google.maps;
    if (isGoogleDefined) {
      setIsScriptLoaded(true);
      return;
    }
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;

  // If script is already loaded, just render children
  if (isScriptLoaded) {
    return <>{children}</>;
  }

  // Only load script if it hasn't been loaded yet
  return (
    <LoadScript 
      googleMapsApiKey={apiKey} 
      libraries={libraries}
      onLoad={() => setIsScriptLoaded(true)}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
