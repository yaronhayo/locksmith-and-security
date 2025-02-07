
import { supabase } from "@/integrations/supabase/client";
import { FormDataType, SubmissionData } from "../types";
import { VisitorInfo } from "@/types/submissions";

export const getVisitorInfo = (): VisitorInfo => {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString(),
  };
};

export const submitBookingForm = async (
  formData: FormDataType, 
  showVehicleInfo: boolean, 
  location: string,
  recaptchaToken: string | null,
  address: string
) => {
  if (!recaptchaToken) {
    throw new Error("reCAPTCHA verification is required");
  }

  const visitorInfo = getVisitorInfo();
  const submissionData: SubmissionData = {
    type: 'booking',
    name: String(formData.get('name')),
    phone: String(formData.get('phone')),
    address: address,
    service: String(formData.get('service')),
    timeframe: String(formData.get('timeframe')),
    notes: formData.get('notes') ? String(formData.get('notes')) : null,
    vehicle_info: showVehicleInfo ? {
      year: String(formData.get('vehicleYear')),
      make: String(formData.get('vehicleMake')),
      model: String(formData.get('vehicleModel')),
    } : null,
    visitor_info: {
      userAgent: visitorInfo.userAgent,
      language: visitorInfo.language,
      platform: visitorInfo.platform,
      screenResolution: visitorInfo.screenResolution,
      windowSize: visitorInfo.windowSize,
      timestamp: visitorInfo.timestamp,
    },
    source_url: location,
    status: 'pending',
    recaptcha_token: recaptchaToken
  };

  console.log("Submitting booking form data:", submissionData);

  // First store in database
  const { error: dbError } = await supabase
    .from('submissions')
    .insert(submissionData);

  if (dbError) throw dbError;

  // Then send email notification
  const { data, error } = await supabase.functions.invoke('send-form-email', {
    body: submissionData
  });

  if (error) throw error;

  return { data, submissionData };
};
