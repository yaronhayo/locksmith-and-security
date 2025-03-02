
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceAreaLocation } from '@/types/service-area';
import { toast } from 'sonner';
import { trackApiCall } from '@/utils/performanceMonitoring';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      console.log('Fetching locations from Supabase...');
      const startTime = performance.now();
      
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('*')
          .order('name');

        if (error) {
          console.error('Error fetching locations:', error);
          throw new Error(`Failed to fetch locations: ${error.message}`);
        }

        if (!data) {
          console.error('No locations data returned');
          throw new Error('No locations data available');
        }

        console.log('Locations fetched successfully:', data);
        
        const duration = performance.now() - startTime;
        trackApiCall({
          url: 'locations',
          method: 'GET',
          duration,
          success: true
        });

        return data.map(location => ({
          name: location.name,
          slug: location.slug,
          description: location.description || '',
          lat: Number(location.lat),
          lng: Number(location.lng),
          title: location.title || `${location.name} Locksmith Services`
        })) as ServiceAreaLocation[];
      } catch (error) {
        const duration = performance.now() - startTime;
        trackApiCall({
          url: 'locations',
          method: 'GET',
          duration,
          success: false
        });
        throw error;
      }
    },
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    gcTime: 60 * 60 * 1000,    // Keep in cache for 1 hour
    retry: 3,                  // Retry failed requests 3 times
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    meta: {
      errorMessage: 'Failed to load service area locations',
      onError: (error: Error) => {
        console.error('Location fetch error:', error);
        toast.error('Could not load service locations. Please try again later.');
      }
    }
  });
};
