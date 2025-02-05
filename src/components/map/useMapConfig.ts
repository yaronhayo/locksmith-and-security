import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const MAX_RETRIES = 3;

export const useMapConfig = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const fetchApiKey = useCallback(async () => {
    if (retryCount >= MAX_RETRIES) {
      setLoadError('Maximum retry attempts reached. Please try again later.');
      return;
    }

    try {
      setIsRetrying(true);
      setLoadError(null);
      
      console.log('Starting API key fetch attempt:', retryCount + 1);
      
      const { data, error, status } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'google_maps_api_key')
        .single();

      console.log('Supabase response:', { data, error, status });

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
      }

      if (!data?.value) {
        console.error('No API key found in settings table');
        throw new Error('Google Maps API key not found in settings');
      }

      console.log('API key fetch successful, key length:', data.value.length);
      setApiKey(data.value);
      setRetryCount(0);
      setLoadError(null);
    } catch (error) {
      console.error('Error in fetchApiKey:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to load map configuration';
      setLoadError(errorMessage);
      
      if (retryCount < MAX_RETRIES) {
        const backoffTime = Math.min(1000 * Math.pow(2, retryCount), 8000);
        console.log(`Retrying in ${backoffTime}ms (attempt ${retryCount + 1}/${MAX_RETRIES})`);
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
    console.log('useMapConfig hook mounted, initiating API key fetch');
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