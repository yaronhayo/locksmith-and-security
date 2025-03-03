
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
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const mountedRef = useRef(true); // Track if component is mounted
  
  // Use provided apiKey or fall back to the one from Supabase settings
  const effectiveApiKey = apiKey || configApiKey;

  // Cleanup function to prevent memory leaks and DOM errors
  const cleanupMapResources = () => {
    // Clear any timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Clean up callback to prevent memory leaks
    if (window.initGoogleMaps) {
      // @ts-ignore - Clean up callback
      window.initGoogleMaps = undefined;
    }
    
    // Safely remove script element if it exists
    if (scriptRef.current) {
      // Check if script is still in DOM before removing
      if (scriptRef.current.parentNode) {
        try {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        } catch (e) {
          console.error("Error removing Google Maps script:", e);
        }
      }
      scriptRef.current = null;
    }
  };

  useEffect(() => {
    // Set mounted ref
    mountedRef.current = true;
    
    // Only proceed if we have an API key and we're not already loading
    if (isLoading || !effectiveApiKey) return;
    
    // Check if API is already loaded
    if (window.google?.maps) {
      if (import.meta.env.DEV) {
        console.log("Google Maps API already loaded");
      }
      setIsLoaded(true);
      return cleanupMapResources;
    }

    // Make sure we don't have duplicate callback
    if (window.initGoogleMaps) {
      // @ts-ignore - Clean up existing callback
      window.initGoogleMaps = undefined;
    }

    // Set a timeout to prevent infinite loading
    timeoutRef.current = window.setTimeout(() => {
      if (!mountedRef.current) return; // Don't update state if unmounted
      
      console.error("Google Maps API loading timeout after 10 seconds");
      setHasError(true);
      toast.error("Maps API took too long to load, proceeding without maps functionality");
      // Continue with the app even if Maps fails to load
      setIsLoaded(true);
    }, 10000);

    try {
      // Load Google Maps API
      const script = document.createElement("script");
      // Add a version parameter to prevent caching issues
      script.src = `https://maps.googleapis.com/maps/api/js?key=${effectiveApiKey}&libraries=places&callback=initGoogleMaps&v=${new Date().getTime()}`;
      script.async = true;
      script.defer = true;
      scriptRef.current = script;
      
      // Define callback function that Google will call when API is loaded
      window.initGoogleMaps = () => {
        if (!mountedRef.current) return; // Don't update state if unmounted
        
        if (import.meta.env.DEV) {
          console.log("Google Maps API loaded successfully");
        }
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        
        setIsLoaded(true);
      };
      
      // Handle error
      script.onerror = () => {
        if (!mountedRef.current) return; // Don't update state if unmounted
        
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
    } catch (error) {
      if (mountedRef.current) {
        console.error("Error adding Google Maps script to DOM:", error);
        setHasError(true);
        setIsLoaded(true); // Allow app to continue
      }
    }

    // Return cleanup function
    return () => {
      mountedRef.current = false; // Mark as unmounted
      cleanupMapResources();
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
    return <LoadingState timeoutMs={2000} fallback={<>{children}</>} />;
  }

  return <>{children}</>;
};

export default GoogleMapsProvider;
