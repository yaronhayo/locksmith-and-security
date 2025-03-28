
import { supabase } from "@/integrations/supabase/client";
import { SubmissionData } from "@/types/submissions";
import { getSessionData } from "./sessionTracker";

export const submitFormData = async (formData: SubmissionData) => {
  try {
    console.log("Collecting session data...");
    const sessionData = await getSessionData();
    
    console.log("Session data collected:", sessionData);
    
    // Convert visitor info to a plain JSON-serializable object
    const visitorInfo = {
      userAgent: sessionData.visitorInfo.userAgent,
      language: sessionData.visitorInfo.language,
      platform: sessionData.visitorInfo.platform,
      screenResolution: sessionData.visitorInfo.screenResolution,
      windowSize: sessionData.visitorInfo.windowSize,
      timestamp: sessionData.visitorInfo.timestamp,
      timezone: sessionData.visitorInfo.timezone,
      deviceType: sessionData.visitorInfo.deviceType,
      browser: sessionData.visitorInfo.browser,
      browserVersion: sessionData.visitorInfo.browserVersion,
      operatingSystem: sessionData.visitorInfo.operatingSystem,
      formCompletionTime: sessionData.visitorInfo.formCompletionTime,
      pageLoadTime: sessionData.visitorInfo.pageLoadTime,
      visitDuration: sessionData.visitorInfo.visitDuration
    };
    
    // Prepare the traffic source data with correct field names for database
    const trafficSourceData = {
      source: sessionData.trafficSource.source || 'direct',
      medium: sessionData.trafficSource.medium || 'none',
      campaign: sessionData.trafficSource.campaign || '',
      keyword: sessionData.trafficSource.keyword || '',
      click_path: sessionData.trafficSource.clickPath || [] // Map clickPath to click_path for database
    };
    
    // Prepare page metrics for storage
    const pageMetricsData = {
      timeOnPage: sessionData.pageMetrics.timeOnPage || 0,
      scrollDepth: sessionData.pageMetrics.scrollDepth || 0,
      pageInteractions: sessionData.pageMetrics.pageInteractions || 0,
      formFocusEvents: sessionData.pageMetrics.formFocusEvents || 0,
      conversionTime: sessionData.pageMetrics.conversionTime || 0
    };
    
    // Merge the session data with the form data
    const enhancedFormData = {
      ...formData,
      visitor_info: visitorInfo as any,
      traffic_source: trafficSourceData as any, // Use the converted data structure
      page_metrics: pageMetricsData as any,
      // Ensure unit_number and gate_code are included if they exist
      unit_number: formData.unit_number || null,
      gate_code: formData.gate_code || null
    };
    
    console.log("Submitting enhanced form data to Supabase:", enhancedFormData);
    
    // Insert data into Supabase submissions table
    const { data, error } = await supabase
      .from('submissions')
      .insert(enhancedFormData as any)
      .select()
      .single();
      
    if (error) {
      console.error("Error inserting submission to Supabase:", error);
      throw new Error(`Failed to submit form: ${error.message}`);
    }
    
    console.log("Successfully submitted to Supabase:", data);
    
    // Trigger email notification via Edge Function
    console.log("Calling send-form-email function with data:", enhancedFormData);
    const { error: emailError } = await supabase.functions.invoke('send-form-email', {
      body: enhancedFormData
    });
    
    if (emailError) {
      console.error("Error sending email notification:", emailError);
      throw new Error(`Failed to send email notification: ${emailError.message}`);
    }
    
    console.log("Email notification sent successfully");
    return data;
  } catch (error: any) {
    console.error("Form submission error:", error);
    throw error;
  }
};
