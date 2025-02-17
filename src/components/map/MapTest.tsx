
import { useEffect, useState } from "react";
import { useMapConfig } from "@/hooks/useMap";

const MapTest = () => {
  const { apiKey, loadError, isLoading } = useMapConfig();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    if (apiKey) {
      console.log('Testing with API key:', apiKey.substring(0, 8) + '...');
      
      // Check if Google Maps script is already loaded
      if (window.google?.maps) {
        console.log('Google Maps already loaded');
        setGoogleLoaded(true);
        return;
      }

      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Google Maps script loaded successfully');
        setScriptLoaded(true);
        if (window.google?.maps) {
          console.log('Google object available');
          setGoogleLoaded(true);
        } else {
          console.error('Google object not available after script load');
        }
      };

      script.onerror = (error) => {
        console.error('Google Maps script failed to load:', error);
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [apiKey]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Map Loading Status:</h3>
      <ul className="space-y-2">
        <li>
          API Key: {apiKey ? 'Present' : 'Missing'} 
          {apiKey && ` (starts with ${apiKey.substring(0, 8)}...)`}
        </li>
        <li>Loading State: {isLoading ? 'Loading...' : 'Complete'}</li>
        <li>Load Error: {loadError || 'None'}</li>
        <li>Script Loaded: {scriptLoaded ? 'Yes' : 'No'}</li>
        <li>Google Object Available: {googleLoaded ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default MapTest;
