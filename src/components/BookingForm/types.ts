
import { BookingSubmission } from '../../types/submissions';

// Form values interface
export interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  unit_number?: string;
  gate_code?: string;
  service: string;
  timeframe: string;
  notes?: string;
  other_service?: string;
  vehicle_info?: {
    year?: string;
    make?: string;
    model?: string;
    all_keys_lost?: boolean;
    has_unused_key?: boolean;
  };
}

// Form submission status
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Form errors interface
export interface FormErrors {
  [key: string]: string;
}

export type { BookingSubmission as SubmissionData };
