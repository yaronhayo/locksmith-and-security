
// Extend the built-in FormData type without recursion
export type FormDataType = globalThis.FormData;

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  errors: Record<string, string>;
}

export interface SubmissionData {
  type: 'booking';
  name: string;
  phone: string;
  address: string;
  service: string;
  timeframe: string;
  notes: string | null;
  vehicle_info: {
    year: string;
    make: string;
    model: string;
  } | null;
  visitor_info: {
    userAgent: string;
    language: string;
    platform: string;
    screenResolution: string;
    windowSize: string;
    timestamp: string;
  };
  source_url: string;
  status: 'pending';
}
