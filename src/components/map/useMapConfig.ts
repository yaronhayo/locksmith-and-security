import { useState, useCallback } from 'react';
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

      if (error) throw error;
      if (!data?.value) throw new Error('API key not found');

      setApiKey(data.value);
    } catch (error) {
      setLoadError('Failed to load map configuration');
      console.error('Error fetching Google Maps API key:', error);
    } finally {
      setIsRetrying(false);
    }
  }, []);

  // Fetch API key on mount
  useState(() => {
    fetchApiKey();
  });

  return {
    apiKey,
    loadError,
    isRetrying,
    fetchApiKey
  };
};