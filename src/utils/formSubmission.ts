
import { supabase } from "@/integrations/supabase/client";
import { SubmissionData } from "@/types/submissions";
import { getSessionData } from "./sessionTracker";

export const submitFormData = async (formData: SubmissionData) => {
  try {
    console.log("Collecting session data...");
    const sessionData = await getSessionData();
    
    console.log("Session data collected:", sessionData);
    
    // Prepare the traffic source data with correct field names for database
    const trafficSourceData = {
      source: sessionData.trafficSource.source,
      medium: sessionData.trafficSource.medium,
      campaign: sessionData.trafficSource.campaign,
      keyword: sessionData.trafficSource.keyword,
      click_path: sessionData.trafficSource.clickPath // Map clickPath to click_path for database
    };
    
    // Convert visitor info to a plain JSON-serializable object
    // This ensures all nested objects are compatible with Json type
    const visitorInfo = {
      ...formData.visitor_info,
      ...sessionData.visitorInfo,
      // If geolocation exists, convert it to a plain object
      geolocation: sessionData.visitorInfo.geolocation ? 
        { ...sessionData.visitorInfo.geolocation } : 
        undefined
    };
    
    // Merge the session data with the form data
    const enhancedFormData = {
      ...formData,
      visitor_info: visitorInfo,
      traffic_source: trafficSourceData, // Use the converted data structure
      page_metrics: sessionData.pageMetrics
    };
    
    console.log("Submitting enhanced form data to Supabase:", JSON.stringify(enhancedFormData, null, 2));
    
    // Insert data into Supabase submissions table
    const { data, error } = await supabase
      .from('submissions')
      .insert(enhancedFormData)
      .select()
      .single();
      
    if (error) {
      console.error("Error inserting submission to Supabase:", error);
      throw new Error(`Failed to submit form: ${error.message}`);
    }
    
    console.log("Successfully submitted to Supabase:", data);
    
    // Trigger email notification via Edge Function
    try {
      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: enhancedFormData
      });
      
      if (emailError) {
        console.error("Error sending email notification:", emailError);
        // Don't throw here, we still want to consider the form submission successful
        console.warn(`Email notification failed: ${emailError.message}`);
      } else {
        console.log("Email notification sent successfully");
      }
    } catch (emailFunctionError) {
      console.error("Failed to invoke email function:", emailFunctionError);
      // Don't throw here, still consider the form submission successful
    }
    
    return data;
  } catch (error: any) {
    console.error("Form submission error:", error);
    throw error;
  }
};
