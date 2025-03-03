
import React, { useEffect, useState, ReactNode } from "react";
import { toast } from 'sonner';

interface GoogleMapsApiLoaderProps {
  children: ReactNode;
  apiKey: string;
  onLoaded: () => void;
  onError: (error: Error) => void;
}

const GoogleMapsApiLoader: React.FC<GoogleMapsApiLoaderProps> = ({
  children,
  apiKey,
  onLoaded,
  onError
}) => {
  useEffect(() => {
    if (!apiKey) return;
    
    // Check if API is already loaded
    if (window.google?.maps) {
      console.log("Google Maps API already loaded");
      onLoaded();
      return;
    }

    // Make sure we don't have duplicate callback
    if (window.initGoogleMaps) {
      // @ts-ignore - Clean up any existing callback
      window.initGoogleMaps = undefined;
    }

    // Log domain information for API key debugging
    console.log("Loading Google Maps API on domain:", window.location.hostname);
    console.log("Google Maps API key starts with:", apiKey.substring(0, 5) + "...");

    // Setup for CORS-friendly loading
    // First, create a meta tag to ensure proper CORS handling
    const corsMetaTag = document.createElement('meta');
    corsMetaTag.httpEquiv = 'Access-Control-Allow-Origin';
    corsMetaTag.content = '*';
    document.head.appendChild(corsMetaTag);
    
    // Add preconnect for Google Maps domains
    const addPreconnect = (domain: string) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };
    
    addPreconnect('https://maps.googleapis.com');
    addPreconnect('https://maps.gstatic.com');
    addPreconnect('https://fonts.googleapis.com');

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps&loading=async`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous"; // Add crossOrigin attribute
    
    // Define callback function that Google will call when API is loaded
    window.initGoogleMaps = () => {
      console.log("Google Maps API loaded successfully with key:", apiKey.substring(0, 5) + "...");
      onLoaded();
      
      // Inject DOCTYPE into any Google Maps iframes
      setTimeout(() => {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          if (iframe.src && iframe.src.includes('maps.googleapis.com')) {
            try {
              if (iframe.contentDocument && iframe.contentDocument.compatMode === 'BackCompat') {
                const doc = iframe.contentDocument;
                if (doc.open) {
                  const html = doc.documentElement.outerHTML;
                  doc.open();
                  doc.write(`<!DOCTYPE html>${html}`);
                  doc.close();
                }
              }
            } catch (e) {
              // Expected for cross-origin iframes
            }
          }
        });
      }, 1000);
    };
    
    // Handle error
    script.onerror = (e) => {
      console.error("Error loading Google Maps API:", e);
      toast.error("Failed to load Google Maps API");
      
      // Additional error logging for domain-specific issues
      console.error("Google Maps API failed to load. Check if the API key is restricted to specific domains in Google Cloud Console.");
      console.error("Current domain:", window.location.hostname);
      
      onError(new Error("Failed to load Google Maps API"));
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(corsMetaTag)) {
        document.head.removeChild(corsMetaTag);
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
  }, [apiKey, onLoaded, onError]);

  return <>{children}</>;
};

export default GoogleMapsApiLoader;
