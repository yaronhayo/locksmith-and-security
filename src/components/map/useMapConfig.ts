import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useMapConfig = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const fetchApiKey = async () => {
    try {
      setIsRetrying(true);
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'GOOGLE_MAPS_API_KEY')
        .single();

      if (error) throw new Error('Failed to fetch API key');
      if (!data?.value) throw new Error('No API key found in settings');

      setApiKey(data.value);
      setLoadError(null);
    } catch (error) {
      setLoadError('Failed to load map configuration');
    } finally {
      setIsRetrying(false);
    }
  };

  useEffect(() => {
    fetchApiKey();
  }, []);

  return {
    apiKey,
    loadError,
    isRetrying,
    fetchApiKey
  };
};