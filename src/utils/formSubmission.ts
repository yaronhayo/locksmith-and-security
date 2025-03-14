
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
    
    try {
      // Insert data into Supabase submissions table
      const { data, error } = await supabase
        .from('submissions')
        .insert(enhancedFormData)
        .select();
        
      if (error) {
        console.error("Error inserting submission to Supabase:", error);
        toast.error(`Failed to submit form: ${error.message}`);
        throw new Error(`Failed to submit form: ${error.message}`);
      }
      
      console.log("Successfully submitted to Supabase database:", data);
      
      // Set session storage flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      toast.success("Your message has been sent! We'll be in touch soon.");
      
      // Trigger email notification via Edge Function
      try {
        console.log("Invoking send-form-email function");
        const { data: emailData, error: emailError } = await supabase.functions.invoke('send-form-email', {
          body: enhancedFormData
        });
        
        if (emailError) {
          console.error("Error sending email notification:", emailError);
          console.warn(`Email notification failed, but form data was saved: ${emailError.message}`);
          // Don't throw error here since form data was saved successfully
        } else {
          console.log("Email notification sent successfully:", emailData);
        }
      } catch (emailFunctionError: any) {
        console.error("Failed to invoke email function:", emailFunctionError);
        // Don't throw here, still consider the form submission successful
      }
      
      // Redirect to thank-you page - using a safer approach with a separate function
      console.log("Preparing to redirect to thank-you page");
      redirectToThankYou();
      
      return { success: true, data };
    } catch (submitError: any) {
      console.error("Submit error:", submitError);
      toast.error(`Submit error: ${submitError.message}`);
      throw submitError;
    }
  } catch (error: any) {
    console.error("Form submission error:", error);
    toast.error(`Form submission failed: ${error.message}`);
    throw error;
  }
};

// Separate function for redirection to avoid issues with React state updates
function redirectToThankYou() {
  console.log("Setting up redirection to thank-you page");
  
  // Force a delay to ensure toasts are shown and all async operations complete
  setTimeout(() => {
    console.log("Executing redirect to thank-you page now");
    window.location.href = '/thank-you';
  }, 1000); // Increased timeout for more reliability
}
