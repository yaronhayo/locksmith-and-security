
import { useState, useEffect } from "react";

export const useGoogleMapsScript = (
  mapsApiKey: string | undefined,
  isLoadingMapsKey: boolean,
  mapsKeyError: Error | null
) => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapsError, setMapsError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoadingMapsKey || !mapsApiKey || mapsKeyError) return;
    if (googleMapsLoaded) return;

    // Check if script is already loaded
    if (window.google?.maps) {
      console.log("Google Maps already loaded");
      setGoogleMapsLoaded(true);
      return;
    }

    console.log("Loading Google Maps script...");
    const scriptId = 'google-maps-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
    }

    const handleLoad = () => {
      console.log("Google Maps script loaded successfully");
      setGoogleMapsLoaded(true);
      setMapsError(null);
      document.dispatchEvent(new Event('google-maps-loaded'));
    };

    const handleError = () => {
      console.error("Failed to load Google Maps script");
      setMapsError("Failed to load Google Maps");
      script.remove();
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [mapsApiKey, isLoadingMapsKey, mapsKeyError, googleMapsLoaded]);

  return { googleMapsLoaded, mapsError, setGoogleMapsLoaded };
};
