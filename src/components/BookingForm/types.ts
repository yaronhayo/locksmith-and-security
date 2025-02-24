
import { BookingSubmission } from '../../types/submissions';

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  recaptchaToken: string | null;
  errors: Record<string, string>;
}

export type { BookingSubmission as SubmissionData };
