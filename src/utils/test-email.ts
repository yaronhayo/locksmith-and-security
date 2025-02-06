
import { supabase } from "@/integrations/supabase/client";

export const sendTestEmail = async () => {
  const testFormData = {
    type: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    phone: '(555) 123-4567',
    address: '123 Test Street, North Bergen, NJ',
    message: 'This is a test message to verify email functionality.',
  };

  try {
    console.log('Sending test email with data:', testFormData);
    
    const { data, error } = await supabase.functions.invoke('send-form-email', {
      body: testFormData
    });

    if (error) {
      console.error('Error sending test email:', error);
      throw error;
    }

    console.log('Test email sent successfully:', data);

    // Query the submissions table to verify the test submission was stored
    const { data: submission, error: queryError } = await supabase
      .from('submissions')
      .select('*')
      .eq('name', 'Test User')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (queryError) {
      console.error('Error querying test submission:', queryError);
    } else {
      console.log('Test submission stored successfully:', submission);
    }

    return data;
  } catch (error) {
    console.error('Failed to send test email:', error);
    throw error;
  }
};
