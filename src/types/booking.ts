export interface FormErrors {
  [key: string]: string;
}

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  errors: FormErrors;
}

export interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => Promise<void>;
  initialValues?: Partial<BookingFormData>;
}

export interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  timeframe: string;
  notes?: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  otherService?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}