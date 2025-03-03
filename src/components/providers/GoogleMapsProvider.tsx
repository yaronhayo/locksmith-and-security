
import React, { useEffect, useState, ReactNode, useRef } from "react";
import LoadingState from "@/components/layouts/LoadingState";
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
  const timeoutRef = useRef<number | null>(null);
  
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

    // Set a timeout to prevent infinite loading
    timeoutRef.current = window.setTimeout(() => {
      console.error("Google Maps API loading timeout after 10 seconds");
      setHasError(true);
      toast.error("Maps API took too long to load, proceeding without maps functionality");
      // Continue with the app even if Maps fails to load
      setIsLoaded(true);
    }, 10000);

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${effectiveApiKey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    
    // Define callback function that Google will call when API is loaded
    window.initGoogleMaps = () => {
      console.log("Google Maps API loaded successfully with key:", effectiveApiKey.substring(0, 5) + "...");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsLoaded(true);
    };
    
    // Handle error
    script.onerror = () => {
      console.error("Error loading Google Maps API");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setHasError(true);
      toast.error("Failed to load Google Maps API");
      // Continue with the app even if Maps fails to load
      setIsLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
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

  if (error) {
    // Don't block rendering on Maps error
    console.error('Error loading map configuration:', error);
    return <>{children}</>;
  }

  if (hasError) {
    // Don't block rendering on Maps error
    return <>{children}</>;
  }

  if (!isLoaded || isLoading) {
    // Show loading state for a maximum of 3 seconds, then render anyway
    return <LoadingState timeoutMs={3000} fallback={<>{children}</>} />;
  }

  return <>{children}</>;
};

export default GoogleMapsProvider;
