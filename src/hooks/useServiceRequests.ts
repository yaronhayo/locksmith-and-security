import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase-client';
import { toast } from '@/components/ui/use-toast';

export interface ServiceRequest {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  address: string;
  service: string;
  timeframe: string;
  vehicle_year?: string;
  vehicle_make?: string;
  vehicle_model?: string;
  other_service?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export const useServiceRequests = () => {
  const queryClient = useQueryClient();

  const createServiceRequest = useMutation({
    mutationFn: async (data: Omit<ServiceRequest, 'id' | 'created_at' | 'status'>) => {
      const { data: result, error } = await supabase
        .from('service_requests')
        .insert([{ ...data, status: 'pending' }])
        .select()
        .single();

      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });
    },
    onError: (error) => {
      console.error('Service request error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  return {
    createServiceRequest,
  };
};