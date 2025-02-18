
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
  const [scriptError, setScriptError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkGoogleMapsLoaded = () => {
      if (!isMounted) return false;
      
      try {
        if (window.google && window.google.maps) {
          console.log("Google Maps already loaded");
          setIsScriptLoaded(true);
          return true;
        }
        return false;
      } catch (err) {
        console.error("Error checking Google Maps load status:", err);
        return false;
      }
    };

    // Initial check
    checkGoogleMapsLoaded();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (scriptError) return <MapError error={scriptError} />;

  // If script is already loaded, just render children
  if (isScriptLoaded) {
    return <>{children}</>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey} 
      libraries={libraries}
      onLoad={() => {
        console.log("Google Maps script loaded successfully");
        setIsScriptLoaded(true);
      }}
      onError={(error) => {
        console.error("Error loading Google Maps script:", error);
        setScriptError("Failed to load Google Maps");
      }}
      onUnmount={() => {
        console.log("Google Maps script unmounting");
      }}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
