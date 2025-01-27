export interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  timeframe: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  otherService?: string;
  notes?: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface BookingFormState {
  selectedService: string;
  showVehicleInfo: boolean;
  isSubmitting: boolean;
  errors: FormErrors;
}