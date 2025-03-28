
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
    
    // Prepare the submission data
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
      visitor_info: {
        ...sessionData.visitorInfo,
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        timestamp: new Date().toISOString()
      },
      source_url: data.source_url,
      recaptcha_token: data.recaptchaToken,
      vehicle_info: data.vehicle_info || null,
      traffic_source: {
        source: sessionData.trafficSource.source,
        medium: sessionData.trafficSource.medium,
        campaign: sessionData.trafficSource.campaign,
        keyword: sessionData.trafficSource.keyword,
        click_path: sessionData.trafficSource.clickPath
      },
      page_metrics: {
        timeOnPage: sessionData.pageMetrics.timeOnPage,
        scrollDepth: sessionData.pageMetrics.scrollDepth,
        pageInteractions: sessionData.pageMetrics.pageInteractions,
        formFocusEvents: sessionData.pageMetrics.formFocusEvents,
        conversionTime: sessionData.pageMetrics.conversionTime
      }
    };
    
    console.log("Submitting booking form data to Supabase:", submissionData);
    
    // Insert the submission into the Supabase table
    const { data: result, error } = await supabase
      .from('submissions')
      .insert(submissionData)
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
