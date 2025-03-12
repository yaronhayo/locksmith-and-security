
import { supabase } from "@/integrations/supabase/client";
import { SubmissionData } from "@/types/submissions";

export const submitFormData = async (formData: SubmissionData) => {
  try {
    console.log("Submitting form data to Supabase:", formData);
    
    // Insert data into Supabase submissions table
    const { data, error } = await supabase
      .from('submissions')
      .insert(formData)
      .select()
      .single();
      
    if (error) {
      console.error("Error inserting submission to Supabase:", error);
      throw new Error(`Failed to submit form: ${error.message}`);
    }
    
    console.log("Successfully submitted to Supabase:", data);
    
    // Trigger email notification via Edge Function
    const { error: emailError } = await supabase.functions.invoke('send-form-email', {
      body: formData
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
