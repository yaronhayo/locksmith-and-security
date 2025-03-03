import React, { useEffect, useState, ReactNode, useRef, useCallback } from "react";
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const mountedRef = useRef(true); // Track if component is mounted
  const loadStartedRef = useRef(false); // Track if loading has started
  const retryCountRef = useRef(0); // Track retry attempts
  
  // Use provided apiKey or fall back to the one from Supabase settings
  const effectiveApiKey = apiKey || configApiKey;

  // Custom ID for this specific map instance
  const mapInstanceId = useRef(`map-${Math.random().toString(36).substr(2, 8)}`);
  
  // Define a comprehensive cleanup function
  const cleanupMapResources = useCallback(() => {
    console.log(`GoogleMapsProvider(${mapInstanceId.current}) cleaning up resources`);
    
    // Clear any timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
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
        if (scriptRef.current.parentNode && scriptRef.current.parentElement === scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
      } catch (e) {
        console.warn("Error removing Google Maps script:", e);
      } finally {
        scriptRef.current = null;
      }
    }
  }, []);

  useEffect(() => {
    // Set mounted ref
    mountedRef.current = true;
    
    console.log(`GoogleMapsProvider(${mapInstanceId.current}) initializing`);
    
    // Only proceed if we have an API key and we're not already loading
    if (isLoading) {
      console.log(`GoogleMapsProvider(${mapInstanceId.current}) waiting for API key`);
      return;
    }

    // If no API key is available, use a fallback or proceed without maps
    if (!effectiveApiKey) {
      console.warn(`GoogleMapsProvider(${mapInstanceId.current}) no API key available, skipping maps initialization`);
      setIsLoaded(true); // Continue without maps
      return;
    }
    
    // Check if API is already loaded
    if (window.google?.maps) {
      console.log(`GoogleMapsProvider(${mapInstanceId.current}) Google Maps API already loaded`);
      setIsLoaded(true);
      return;
    }

    // Prevent duplicate loading
    if (loadStartedRef.current) {
      console.log(`GoogleMapsProvider(${mapInstanceId.current}) loading already in progress`);
      return;
    }
    
    loadStartedRef.current = true;
    console.log(`GoogleMapsProvider(${mapInstanceId.current}) starting maps load with key: ${effectiveApiKey?.substring(0, 5)}...`);

    // Set a timeout to prevent infinite loading (15 seconds)
    timeoutRef.current = setTimeout(() => {
      if (!mountedRef.current) return; // Don't update state if unmounted
      
      console.warn(`GoogleMapsProvider(${mapInstanceId.current}) loading timeout after 15 seconds`);
      
      // If we've tried less than 3 times, retry loading
      if (retryCountRef.current < 2) {
        retryCountRef.current++;
        console.log(`GoogleMapsProvider(${mapInstanceId.current}) retrying maps load (attempt ${retryCountRef.current})`);
        
        // Clean up current attempt
        cleanupMapResources();
        
        // Reset loading flag to allow another attempt
        loadStartedRef.current = false;
        
        // Try again by forcing a re-render
        setHasError(false);
        return;
      }
      
      // After retry attempts, fall back to continuing without maps
      setHasError(true);
      console.error(`GoogleMapsProvider(${mapInstanceId.current}) giving up after ${retryCountRef.current} retry attempts`);
      
      // Only show toast in dev mode
      if (import.meta.env.DEV) {
        toast.error("Maps took too long to load, proceeding without maps functionality");
      }
      
      // Continue with the app even if Maps fails to load
      setIsLoaded(true);
      
      // Clean up loading resources
      cleanupMapResources();
    }, 15000);

    try {
      // Define unique callback name for this instance
      const callbackName = `initGoogleMaps_${mapInstanceId.current}`;
      
      // Load Google Maps API with a unique callback
      const script = document.createElement("script");
      // Add version and instance parameters to prevent caching issues
      script.src = `https://maps.googleapis.com/maps/api/js?key=${effectiveApiKey}&libraries=places&callback=${callbackName}&v=${new Date().getTime()}&instance=${mapInstanceId.current}`;
      script.async = true;
      script.defer = true;
      
      // Save reference to script element
      scriptRef.current = script;
      
      // Define callback function that Google will call when API is loaded
      window[callbackName] = () => {
        if (!mountedRef.current) return; // Don't update state if unmounted
        
        console.log(`GoogleMapsProvider(${mapInstanceId.current}) loaded successfully`);
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        
        setIsLoaded(true);
        
        // Clean up this specific callback
        delete window[callbackName];
      };
      
      // Handle error
      script.onerror = () => {
        if (!mountedRef.current) return; // Don't update state if unmounted
        
        console.error(`GoogleMapsProvider(${mapInstanceId.current}) error loading API`);
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        
        // If we've tried less than 3 times, retry loading
        if (retryCountRef.current < 2) {
          retryCountRef.current++;
          console.log(`GoogleMapsProvider(${mapInstanceId.current}) retrying after error (attempt ${retryCountRef.current})`);
          
          // Clean up current attempt
          cleanupMapResources();
          
          // Reset loading flag to allow another attempt
          loadStartedRef.current = false;
          
          // Try again by forcing a re-render
          setHasError(false);
          return;
        }
        
        setHasError(true);
        console.error(`GoogleMapsProvider(${mapInstanceId.current}) giving up after ${retryCountRef.current} errors`);
        
        // Continue with the app even if Maps fails to load
        setIsLoaded(true);
        
        // Only show toast in dev mode
        if (import.meta.env.DEV) {
          toast.error("Failed to load Google Maps API");
        }
      };

      // Append the script to head
      if (document.head) {
        document.head.appendChild(script);
        console.log(`GoogleMapsProvider(${mapInstanceId.current}) script added to DOM`);
      } else {
        console.error(`GoogleMapsProvider(${mapInstanceId.current}) document head not available`);
        setHasError(true);
        setIsLoaded(true); // Continue without Maps
      }
    } catch (error) {
      if (mountedRef.current) {
        console.error(`GoogleMapsProvider(${mapInstanceId.current}) error adding script:`, error);
        setHasError(true);
        setIsLoaded(true); // Allow app to continue
      }
    }

    // Return improved cleanup function
    return () => {
      console.log(`GoogleMapsProvider(${mapInstanceId.current}) unmounting`);
      mountedRef.current = false; // Mark as unmounted
      
      // Clean up this specific callback if it exists
      const specificCallbackName = `initGoogleMaps_${mapInstanceId.current}`;
      if (window[specificCallbackName]) {
        delete window[specificCallbackName];
      }
      
      cleanupMapResources();
    };
  }, [effectiveApiKey, isLoading, cleanupMapResources]);

  // Don't block rendering on errors
  if (error) {
    console.warn('Error loading map configuration:', error);
    return <>{children}</>;
  }

  if (hasError) {
    console.warn(`GoogleMapsProvider(${mapInstanceId.current}) has error, continuing without maps`);
    return <>{children}</>;
  }

  // Keep timeout short to avoid blocking the UI
  if (!isLoaded || isLoading) {
    return <LoadingState timeoutMs={1000} fallback={<>{children}</>} />;
  }

  console.log(`GoogleMapsProvider(${mapInstanceId.current}) rendering with maps loaded`);
  return <>{children}</>;
};

export default GoogleMapsProvider;
