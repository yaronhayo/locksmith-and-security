
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useState, useEffect } from 'react';

const MAX_RETRIES = 3;

const fetchMapApiKey = async () => {
  console.log('Fetching Google Maps API key from settings table');
  
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'GOOGLE_MAPS_API_KEY')
      .single();

    if (error) {
      console.error('Error fetching API key:', error);
      throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
    }

    if (!data?.value) {
      console.error('No API key found in settings table');
      throw new Error('Google Maps API key not found in settings');
    }

    return data.value;
  } catch (error) {
    console.error('Error in fetchMapApiKey:', error);
    throw error;
  }
};

// Global variable to track script loading state
let isScriptLoading = false;
let isScriptLoaded = false;

export const useMapConfig = () => {
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  const { 
    data: apiKey,
    error: keyError,
    isLoading: isKeyLoading,
    refetch
  } = useQuery({
    queryKey: ['mapApiKey'],
    queryFn: fetchMapApiKey,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: MAX_RETRIES
  });

  useEffect(() => {
    if (!apiKey || isScriptLoaded || isScriptLoading) return;

    const loadScript = () => {
      isScriptLoading = true;
      console.log('Loading Google Maps script with key:', apiKey.substring(0, 8) + '...');

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        console.log('Google Maps script loaded successfully');
        isScriptLoaded = true;
        isScriptLoading = false;
        if (window.google?.maps) {
          console.log('Google Maps object is available');
          setGoogleLoaded(true);
        } else {
          const error = 'Google Maps object not available after script load';
          console.error(error);
          setScriptError(error);
        }
      };

      script.onerror = (error) => {
        const errorMsg = 'Failed to load Google Maps script';
        console.error(errorMsg, error);
        setScriptError(errorMsg);
        isScriptLoading = false;
      };

      document.head.appendChild(script);
    };

    if (window.google?.maps) {
      console.log('Google Maps already loaded');
      isScriptLoaded = true;
      setGoogleLoaded(true);
    } else {
      loadScript();
    }
  }, [apiKey]);

  return {
    apiKey,
    loadError: scriptError || keyError?.message || null,
    isLoading: isKeyLoading || (!googleLoaded && !scriptError),
    isReady: googleLoaded,
    fetchApiKey: refetch
  };
};
