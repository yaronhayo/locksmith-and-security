export interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  timeframe?: string;
  otherService?: string;
  notes?: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
}

export interface FormErrors {
  [key: string]: string;
}

export type FormStep = 1 | 2;