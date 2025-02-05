export interface FormErrors {
  [key: string]: string;
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