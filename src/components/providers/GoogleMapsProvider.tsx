
import { ReactNode, useEffect, useState, useCallback, useRef } from "react";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { useMapConfig, clearMapConfigCache } from "@/hooks/useMap";
import MapError from "../map/MapError";
import MapLoader from "../map/MapLoader";
import { toast } from "sonner";

// Define libraries once to prevent reloading warnings
const libraries: LoadScriptProps['libraries'] = ['places'];

// Use a global flag to prevent multiple script loads
let scriptLoaded = false;

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const { data: apiKey, error: apiKeyError, isLoading, isError, refetch } = useMapConfig();
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const providerIdRef = useRef(`google-maps-provider-${Math.random().toString(36).substring(2, 9)}`);
  const retryCount = useRef(0);
  const maxRetries = 3;

  // Check if Google Maps is already available globally
  const isGoogleMapsLoaded = useCallback(() => {
    const isLoaded = typeof window !== 'undefined' && 
           typeof window.google !== 'undefined' && 
           typeof window.google.maps !== 'undefined';
    
    const hasPlaces = isLoaded && typeof window.google.maps.places !== 'undefined';
    
    if (isLoaded && !hasPlaces) {
      console.warn("Google Maps loaded but Places API is missing. Check API key permissions.");
    }
    
    return isLoaded && hasPlaces;
  }, []);

  const handleLoad = useCallback(() => {
    console.log("Google Maps script loaded successfully");
    setIsScriptLoaded(true);
    setScriptError(null);
    scriptLoaded = true;
    
    // Verify Places API is available
    if (window.google && window.google.maps && !window.google.maps.places) {
      console.error("Google Maps loaded but Places API is unavailable. Check API key permissions.");
      setScriptError("Places API unavailable. Check API key permissions.");
      return;
    }
    
    // Notify for debugging
    if (import.meta.env.DEV) {
      toast.success("Google Maps loaded successfully");
    }
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Error loading Google Maps script:", error);
    setScriptError(error.message || "Failed to load Google Maps");
    
    // If we've reached max retries, report the error
    if (retryCount.current >= maxRetries) {
      console.error(`Failed to load Google Maps after ${maxRetries} attempts. Please refresh the page.`);
      toast.error("Failed to load Google Maps after multiple attempts");
    } else {
      // Otherwise increment retry count and attempt to refetch the API key
      retryCount.current += 1;
      clearMapConfigCache();
      refetch();
      
      toast.error(`Error loading maps. Retrying (${retryCount.current}/${maxRetries})...`);
    }
  }, [refetch]);

  // If Google Maps is already loaded, we don't need LoadScript
  useEffect(() => {
    if (isGoogleMapsLoaded()) {
      console.log("Google Maps already loaded in window, skipping LoadScript");
      setIsScriptLoaded(true);
      setScriptError(null);
      scriptLoaded = true;
    }
  }, [isGoogleMapsLoaded]);

  // Debug logging
  useEffect(() => {
    console.log(`GoogleMapsProvider(${providerIdRef.current}) state:`, { 
      apiKey: apiKey ? "Available" : "Not available", 
      isLoading, 
      hasError: !!apiKeyError || isError,
      isScriptLoaded,
      scriptError,
      googleMapsGloballyAvailable: isGoogleMapsLoaded(),
      scriptLoaded,
      retryCount: retryCount.current
    });
    
    return () => {
      console.log(`GoogleMapsProvider(${providerIdRef.current}) unmounted`);
    };
  }, [apiKey, isLoading, apiKeyError, isError, isScriptLoaded, scriptError, isGoogleMapsLoaded]);

  // Reset error state if we've refetched the API key
  useEffect(() => {
    if (apiKey && scriptError) {
      setScriptError(null);
    }
  }, [apiKey, scriptError]);

  // If Google Maps is already loaded globally, just render children
  if (isGoogleMapsLoaded()) {
    return <>{children}</>;
  }

  if (isLoading) return <MapLoader text="Loading map configuration..." />;
  
  if (apiKeyError || isError) {
    console.error("API key error:", apiKeyError || "Unknown error");
    return <MapError 
      error={(apiKeyError as Error)?.message || "Failed to load Google Maps API key"} 
      resetErrorBoundary={() => { clearMapConfigCache(); refetch(); }} 
    />;
  }
  
  if (!apiKey) {
    console.error("No API key available");
    return <MapError 
      error="Google Maps API key not found. Please check your API key configuration." 
      resetErrorBoundary={() => { clearMapConfigCache(); refetch(); }} 
    />;
  }
  
  if (scriptError) {
    return <MapError 
      error={scriptError} 
      resetErrorBoundary={() => { 
        setScriptError(null); 
        clearMapConfigCache(); 
        refetch(); 
      }} 
    />;
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={handleLoad}
      onError={handleError}
      loadingElement={<MapLoader text="Loading Google Maps..." />}
      key={`gmaps-script-${apiKey}-${retryCount.current}`}
      preventGoogleFontsLoading={false}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
