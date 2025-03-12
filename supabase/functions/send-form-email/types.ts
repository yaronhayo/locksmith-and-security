
export interface FormData {
  type: 'booking' | 'contact';
  name: string;
  phone: string;
  email?: string;
  address: string;
  service?: string;
  timeframe?: string;
  notes?: string;
  vehicle_info?: {
    year: string;
    make: string;
    model: string;
    all_keys_lost?: boolean;
    has_unused_key?: boolean;
  };
  message?: string;
  visitor_info?: {
    userAgent: string;
    language: string;
    platform: string;
    screenResolution: string;
    windowSize: string;
    timestamp: string;
  };
  source_url?: string;
  traffic_source?: {
    source: string;
    medium: string;
    campaign: string;
    keyword: string;
    clickPath: string[];
  };
}
