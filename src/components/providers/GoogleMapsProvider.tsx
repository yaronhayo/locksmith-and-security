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
  const loadStartedRef = useRef(false); // Track if loading has started
  
  // Use provided apiKey or fall back to the one from Supabase settings
  const effectiveApiKey = apiKey || configApiKey;

  // Improved cleanup function to prevent memory leaks and DOM errors
  const cleanupMapResources = () => {
    // Clear any timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Clean up callback to prevent memory leaks
    if (window.initGoogleMaps) {
      try {
        // @ts-ignore - Clean up callback
        window.initGoogleMaps = undefined;
      } catch (e) {
        console.warn("Error cleaning up Google Maps callback:", e);
      }
    }
    
    // Safely remove script element if it exists
    if (scriptRef.current) {
      try {
        // Check if script is still in DOM before removing
        if (scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
      } catch (e) {
        console.warn("Error removing Google Maps script:", e);
      } finally {
        scriptRef.current = null;
      }
    }
  };

  useEffect(() => {
    // Set mounted ref
    mountedRef.current = true;
    loadStartedRef.current = false;
    
    // Only proceed if we have an API key and we're not already loading
    if (isLoading || !effectiveApiKey) return;
    
    // Check if API is already loaded
    if (window.google?.maps) {
      if (import.meta.env.DEV) {
        console.log("Google Maps API already loaded");
      }
      setIsLoaded(true);
      return;
    }

    // Prevent duplicate loading
    if (loadStartedRef.current) {
      console.log("Google Maps API loading already in progress");
      return;
    }
    
    loadStartedRef.current = true;

    // Make sure we don't have duplicate callback
    if (window.initGoogleMaps) {
      try {
        // @ts-ignore - Clean up existing callback
        window.initGoogleMaps = undefined;
      } catch (e) {
        console.warn("Error cleaning up existing Google Maps callback:", e);
      }
    }

    // Set a timeout to prevent infinite loading
    timeoutRef.current = window.setTimeout(() => {
      if (!mountedRef.current) return; // Don't update state if unmounted
      
      console.warn("Google Maps API loading timeout after 10 seconds");
      setHasError(true);
      
      // Only show toast in dev mode
      if (import.meta.env.DEV) {
        toast.error("Maps API took too long to load, proceeding without maps functionality");
      }
      
      // Continue with the app even if Maps fails to load
      setIsLoaded(true);
      
      // Clean up loading resources
      cleanupMapResources();
    }, 10000);

    try {
      // Load Google Maps API
      const script = document.createElement("script");
      // Add a version parameter to prevent caching issues
      script.src = `https://maps.googleapis.com/maps/api/js?key=${effectiveApiKey}&libraries=places&callback=initGoogleMaps&v=${new Date().getTime()}`;
      script.async = true;
      script.defer = true;
      
      // Save reference to script element
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
        
        // Only show toast in dev mode
        if (import.meta.env.DEV) {
          toast.error("Failed to load Google Maps API");
        }
        
        // Continue with the app even if Maps fails to load
        setIsLoaded(true);
      };

      // Append the script to head
      if (document.head) {
        document.head.appendChild(script);
      } else {
        console.error("Document head not available, cannot load Google Maps");
        setHasError(true);
        setIsLoaded(true); // Continue without Maps
      }
    } catch (error) {
      if (mountedRef.current) {
        console.error("Error adding Google Maps script to DOM:", error);
        setHasError(true);
        setIsLoaded(true); // Allow app to continue
      }
    }

    // Return improved cleanup function
    return () => {
      mountedRef.current = false; // Mark as unmounted
      cleanupMapResources();
    };
  }, [effectiveApiKey, isLoading]);

  // Don't block rendering on errors
  if (error) {
    console.warn('Error loading map configuration:', error);
    return <>{children}</>;
  }

  if (hasError) {
    return <>{children}</>;
  }

  // Keep timeout short to avoid blocking the UI
  if (!isLoaded || isLoading) {
    return <LoadingState timeoutMs={1000} fallback={<>{children}</>} />;
  }

  return <>{children}</>;
};

export default GoogleMapsProvider;
