
import { BookingSubmission } from '../../types/submissions';

// Extend the built-in FormData type without recursion
export type FormDataType = globalThis.FormData;

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  recaptchaToken: string | null;
  errors: Record<string, string>;
}

export type { BookingSubmission as SubmissionData };
