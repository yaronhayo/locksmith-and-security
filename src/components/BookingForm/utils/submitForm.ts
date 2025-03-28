
import { supabase } from "@/integrations/supabase/client";
import { BookingFormValues } from "../types";
import { getSessionData } from "@/utils/sessionTracker";

interface SubmitData extends BookingFormValues {
  recaptchaToken: string;
  source_url: string;
}

export const submitBookingForm = async (data: SubmitData) => {
  try {
    console.log("Collecting session data for booking form...");
    const sessionData = await getSessionData();
    
    // Convert visitor info to a plain JSON-serializable object
    const visitorInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
      timezone: sessionData.visitorInfo.timezone,
      deviceType: sessionData.visitorInfo.deviceType,
      browser: sessionData.visitorInfo.browser,
      browserVersion: sessionData.visitorInfo.browserVersion,
      operatingSystem: sessionData.visitorInfo.operatingSystem,
      formCompletionTime: sessionData.visitorInfo.formCompletionTime,
      pageLoadTime: sessionData.visitorInfo.pageLoadTime,
      visitDuration: sessionData.visitorInfo.visitDuration
    };
    
    // Prepare traffic source as a plain object
    const trafficSource = {
      source: sessionData.trafficSource.source || 'direct',
      medium: sessionData.trafficSource.medium || 'none',
      campaign: sessionData.trafficSource.campaign || '',
      keyword: sessionData.trafficSource.keyword || '',
      click_path: sessionData.trafficSource.clickPath || []
    };
    
    // Prepare the page metrics as a plain object
    const pageMetrics = {
      timeOnPage: sessionData.pageMetrics.timeOnPage || 0,
      scrollDepth: sessionData.pageMetrics.scrollDepth || 0,
      pageInteractions: sessionData.pageMetrics.pageInteractions || 0,
      formFocusEvents: sessionData.pageMetrics.formFocusEvents || 0,
      conversionTime: sessionData.pageMetrics.conversionTime || 0
    };
    
    // Prepare vehicle info if it exists
    const vehicleInfo = data.vehicle_info ? {
      year: data.vehicle_info.year || null,
      make: data.vehicle_info.make || null,
      model: data.vehicle_info.model || null,
      all_keys_lost: data.vehicle_info.all_keys_lost || false,
      has_unused_key: data.vehicle_info.has_unused_key || false
    } : null;
    
    // Prepare the submission data as a plain JSON-serializable object
    const submissionData = {
      type: "booking",
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      unit_number: data.unit_number || null,
      gate_code: data.gate_code || null,
      service: data.service,
      timeframe: data.timeframe,
      notes: data.notes || null,
      status: "pending",
      visitor_info: visitorInfo as any, // Type assertion to avoid TypeScript errors
      source_url: data.source_url,
      recaptcha_token: data.recaptchaToken,
      vehicle_info: vehicleInfo,
      traffic_source: trafficSource as any, // Type assertion to avoid TypeScript errors
      page_metrics: pageMetrics as any // Type assertion to avoid TypeScript errors
    };
    
    console.log("Submitting booking form data to Supabase:", submissionData);
    
    // Insert the submission into the Supabase table
    const { data: result, error } = await supabase
      .from('submissions')
      .insert(submissionData as any) // Type assertion to avoid TypeScript errors
      .select()
      .single();
      
    if (error) {
      console.error("Error submitting booking form to Supabase:", error);
      throw new Error(`Failed to submit booking: ${error.message}`);
    }
    
    console.log("Booking form submission successful:", result);
    
    // Trigger email notification via Edge Function
    console.log("Calling send-form-email function with booking data");
    const { error: emailError } = await supabase.functions.invoke('send-form-email', {
      body: submissionData
    });
    
    if (emailError) {
      console.error("Error sending booking email notification:", emailError);
      // Don't throw here, as the form submission was successful
    } else {
      console.log("Booking email notification sent successfully");
    }
    
    return result;
  } catch (error: any) {
    console.error("Booking form submission error:", error);
    throw error;
  }
};
