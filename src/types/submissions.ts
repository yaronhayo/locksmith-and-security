
export interface TrafficSource {
  source: string;
  medium: string;
  campaign: string;
  keyword: string;
  clickPath: string[];
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
  status: 'pending';
  visitor_info: VisitorInfo;
  source_url: string;
  traffic_source?: TrafficSource;
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
  } | null;
}

export type SubmissionData = ContactSubmission | BookingSubmission;
