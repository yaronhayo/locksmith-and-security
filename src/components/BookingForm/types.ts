export interface FormErrors {
  [key: string]: string;
}

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  errors: FormErrors;
  recaptchaToken: string | null;
}

export interface BookingFormActions {
  setSelectedService: (service: string) => void;
  setShowVehicleInfo: (show: boolean) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setErrors: (errors: FormErrors) => void;
  setRecaptchaToken: (token: string | null) => void;
}