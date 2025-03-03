
import React, { useState, ReactNode } from "react";
import { LoadingState } from "@/components/layouts/LoadingState";
import { useMapConfig } from "@/hooks/useMap";
import GoogleMapsApiLoader from "./GoogleMapsApiLoader";

interface GoogleMapsProviderProps {
  children: ReactNode;
  apiKey?: string;
}

const GoogleMapsProvider: React.FC<GoogleMapsProviderProps> = ({ 
  children, 
  apiKey
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { data: configApiKey, isLoading, error } = useMapConfig();
  
  // Use provided apiKey or fall back to the one from Supabase settings
  const effectiveApiKey = apiKey || configApiKey;

  const handleApiLoaded = () => {
    setIsLoaded(true);
  };

  const handleApiError = () => {
    setHasError(true);
  };

  if (error || hasError) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        <p>There was an error loading the Google Maps API.</p>
        <p>Please check your internet connection and try refreshing the page.</p>
        <p className="text-sm mt-2">If you're accessing this site on a custom domain, please ensure the Google Maps API key is configured for this domain.</p>
      </div>
    );
  }

  if (!isLoaded || isLoading) {
    return <LoadingState />;
  }

  // If we have an API key and it's not already loaded, load it
  if (effectiveApiKey && !isLoaded && !isLoading) {
    return (
      <GoogleMapsApiLoader 
        apiKey={effectiveApiKey}
        onLoaded={handleApiLoaded}
        onError={handleApiError}
      >
        <LoadingState />
      </GoogleMapsApiLoader>
    );
  }

  return <>{children}</>;
};

export default GoogleMapsProvider;
