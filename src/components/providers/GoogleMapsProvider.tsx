
import React, { useEffect, useState, ReactNode } from "react";
import { LoadingState } from "@/components/layouts/LoadingState";

interface GoogleMapsProviderProps {
  children: ReactNode;
  apiKey?: string;
}

const GoogleMapsProvider: React.FC<GoogleMapsProviderProps> = ({ 
  children, 
  apiKey = "AIzaSyD_lT8RmSAMEHUlTEgNIxHhLGGUMdLtFiE" // Public API key, safe to be in code
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if API is already loaded
    if (window.google && window.google.maps) {
      console.log("Google Maps API already loaded");
      setIsLoaded(true);
      return;
    }

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    
    // Define callback function that Google will call when API is loaded
    window.initGoogleMaps = () => {
      console.log("Google Maps API loaded successfully");
      setIsLoaded(true);
    };
    
    // Handle error
    script.onerror = () => {
      console.error("Error loading Google Maps API");
      setHasError(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.initGoogleMaps) {
        // @ts-ignore - Clean up the global callback
        window.initGoogleMaps = undefined;
      }
      // Remove script if it exists
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        <p>There was an error loading the Google Maps API.</p>
        <p>Please check your internet connection and try refreshing the page.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return <LoadingState />;
  }

  return <>{children}</>;
};

export default GoogleMapsProvider;
