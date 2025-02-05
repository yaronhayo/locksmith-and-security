import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useMapConfig = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const fetchApiKey = useCallback(async () => {
    try {
      setIsRetrying(true);
      setLoadError(null);
      
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'google_maps_api_key')
        .single();

      if (error) {
        console.error('Error fetching Google Maps API key:', error);
        throw new Error('Failed to fetch API key');
      }

      if (!data?.value) {
        throw new Error('Google Maps API key not found');
      }

      setApiKey(data.value);
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : 'Failed to load map configuration');
    } finally {
      setIsRetrying(false);
    }
  }, []);

  useEffect(() => {
    fetchApiKey();
  }, [fetchApiKey]);

  return {
    apiKey,
    loadError,
    isRetrying,
    fetchApiKey
  };
};