
export interface TrafficSource {
  source: string;
  medium: string;
  campaign: string;
  keyword: string;
  click_path: string[];
}

export interface VisitorInfo {
  userAgent: string;
  language: string;
  platform: string;
  screenResolution: string;
  windowSize: string;
  timestamp: string;
}

export interface BaseSubmission {
  name: string;
  phone: string;
  address: string;
  unit_number?: string | null;
  gate_code?: string | null;
  status: 'pending';
  visitor_info: Record<string, string>;  // Changed to match Json type
  source_url: string;
  traffic_source?: TrafficSource;
  recaptcha_token: string | null;
}

export interface ContactSubmission extends BaseSubmission {
  type: 'contact';
  email?: string;
  message: string;
}

export interface BookingSubmission extends BaseSubmission {
  type: 'booking';
  service: string;
  timeframe: string;
  notes: string | null;
  vehicle_info?: {
    year: string;
    make: string;
    model: string;
    all_keys_lost?: boolean;
    has_unused_key?: boolean;
  } | null;
}

export type SubmissionData = ContactSubmission | BookingSubmission;
