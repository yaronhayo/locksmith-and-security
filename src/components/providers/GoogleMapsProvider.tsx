
import React, { useEffect, useState, ReactNode } from "react";
import { LoadingState } from "@/components/layouts/LoadingState";
import { useMapConfig } from "@/hooks/useMap";
import { toast } from "sonner";

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

  useEffect(() => {
    // Only proceed if we have an API key and we're not already loading
    if (isLoading || !effectiveApiKey) return;
    
    // Check if API is already loaded
    if (window.google?.maps) {
      console.log("Google Maps API already loaded");
      setIsLoaded(true);
      return;
    }

    // Make sure we don't have duplicate callback
    if (window.initGoogleMaps) {
      // @ts-ignore - Clean up any existing callback
      window.initGoogleMaps = undefined;
    }

    // Log domain information for API key debugging
    console.log("Loading Google Maps API on domain:", window.location.hostname);
    console.log("Google Maps API key starts with:", effectiveApiKey.substring(0, 5) + "...");

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${effectiveApiKey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    
    // Define callback function that Google will call when API is loaded
    window.initGoogleMaps = () => {
      console.log("Google Maps API loaded successfully with key:", effectiveApiKey.substring(0, 5) + "...");
      setIsLoaded(true);
    };
    
    // Handle error
    script.onerror = (e) => {
      console.error("Error loading Google Maps API:", e);
      setHasError(true);
      toast.error("Failed to load Google Maps API");
      
      // Additional error logging for domain-specific issues
      console.error("Google Maps API failed to load. Check if the API key is restricted to specific domains in Google Cloud Console.");
      console.error("Current domain:", window.location.hostname);
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
  }, [effectiveApiKey, isLoading]);

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

  return <>{children}</>;
};

export default GoogleMapsProvider;
