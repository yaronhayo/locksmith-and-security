import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useMapConfig = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const fetchApiKey = useCallback(async () => {
    if (retryCount >= MAX_RETRIES) {
      setLoadError('Maximum retry attempts reached. Please try again later.');
      return;
    }

    try {
      setIsRetrying(true);
      setLoadError(null);
      
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'google_maps_api_key')
        .single();

      if (error) {
        console.error('Error fetching API key:', error);
        throw new Error('Failed to fetch API key');
      }

      if (!data?.value) {
        console.error('No API key found');
        throw new Error('Google Maps API key not found');
      }

      setApiKey(data.value);
      setRetryCount(0);
    } catch (error) {
      console.error('Error in fetchApiKey:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to load map configuration';
      setLoadError(errorMessage);
      
      if (retryCount < MAX_RETRIES) {
        const backoffTime = Math.min(1000 * Math.pow(2, retryCount), 8000);
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchApiKey();
        }, backoffTime);
      }
    } finally {
      setIsRetrying(false);
    }
  }, [retryCount]);

  useEffect(() => {
    fetchApiKey();
  }, [fetchApiKey]);

  return {
    apiKey,
    loadError,
    isRetrying,
    retryCount,
    fetchApiKey
  };
};