
import { supabase } from "@/integrations/supabase/client";
import { SubmissionData } from "@/types/submissions";
import { getSessionData } from "./sessionTracker";
import { toast } from "sonner";

export const submitFormData = async (formData: SubmissionData) => {
  try {
    console.log("Starting form submission process");
    console.log("Collecting session data...");
    const sessionData = await getSessionData();
    
    console.log("Session data collected:", sessionData);
    
    // Prepare the traffic source data with correct field names for database
    const trafficSourceData = sessionData.trafficSource ? {
      source: sessionData.trafficSource.source,
      medium: sessionData.trafficSource.medium,
      campaign: sessionData.trafficSource.campaign,
      keyword: sessionData.trafficSource.keyword,
      click_path: sessionData.trafficSource.clickPath // Map clickPath to click_path for database
    } : null;
    
    // Convert visitor info to a plain JSON-serializable object
    // This ensures all nested objects are compatible with Json type
    const visitorInfo = {
      ...formData.visitor_info,
      ...sessionData.visitorInfo,
      // If geolocation exists, convert it to a plain object
      geolocation: sessionData.visitorInfo?.geolocation ? 
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
      .select();
      
    if (error) {
      console.error("Error inserting submission to Supabase:", error);
      throw new Error(`Failed to submit form: ${error.message}`);
    }
    
    console.log("Successfully submitted to Supabase database:", data);
    toast.success("Your message has been sent successfully!", {
      duration: 6000,
      position: "top-center"
    });
    
    // Set the session storage flag for the thank-you page redirect protection
    sessionStorage.setItem('fromFormSubmission', 'true');
    
    // Trigger email notification via Edge Function
    try {
      console.log("Invoking send-form-email function");
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: enhancedFormData
      });
      
      if (emailError) {
        console.error("Error sending email notification:", emailError);
        // Don't throw here, we still want to consider the form submission successful
        console.warn(`Email notification failed: ${emailError.message}`);
      } else {
        console.log("Email notification sent successfully:", emailData);
      }
    } catch (emailFunctionError: any) {
      console.error("Failed to invoke email function:", emailFunctionError);
      // Don't throw here, still consider the form submission successful
    }
    
    // Return the result before redirecting
    return data || true;
  } catch (error: any) {
    console.error("Form submission error:", error);
    toast.error("There was a problem submitting the form", {
      description: error.message || "Please try again later",
      duration: 6000,
      position: "top-center"
    });
    throw error;
  }
};

// Helper function to redirect to thank-you page reliably
export const redirectToThankYou = (navigate: any) => {
  // Set a longer timeout to ensure data is properly saved before redirect
  console.log("Setting up thank-you page redirect");
  setTimeout(() => {
    console.log("Executing redirect to thank-you page");
    navigate('/thank-you');
  }, 2000); // 2 second delay for more reliable redirect
};
