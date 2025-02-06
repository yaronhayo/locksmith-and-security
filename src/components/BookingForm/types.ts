
export interface FormData extends FormData {
  get(key: string): FormDataEntryValue | null;
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
