
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormData {
  type: 'booking' | 'contact';
  name: string;
  phone: string;
  email?: string;
  address: string;
  service?: string;
  timeframe?: string;
  notes?: string;
  vehicleInfo?: {
    year: string;
    make: string;
    model: string;
  };
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting form submission handler");
    console.log("RESEND_API_KEY present:", !!Deno.env.get("RESEND_API_KEY"));
    console.log("SUPABASE_URL present:", !!supabaseUrl);
    console.log("SUPABASE_SERVICE_ROLE_KEY present:", !!supabaseServiceKey);

    const formData: FormData = await req.json();
    console.log("Received form data:", formData);

    // First, store the submission in the database
    const { data: submissionData, error: submissionError } = await supabase
      .from('submissions')
      .insert([{
        type: formData.type,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service: formData.service,
        timeframe: formData.timeframe,
        notes: formData.notes,
        vehicle_info: formData.vehicleInfo,
        message: formData.message,
        status: 'pending'
      }])
      .select()
      .single();

    if (submissionError) {
      console.error("Database submission error:", submissionError);
      throw new Error(`Failed to store submission: ${submissionError.message}`);
    }

    console.log("Submission stored in database:", submissionData);

    let emailHtml = '';
    let subject = '';

    if (formData.type === 'booking') {
      subject = 'New Service Booking Request';
      emailHtml = `
        <h1>New Service Booking Request</h1>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <h2>Service Details</h2>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Timeframe:</strong> ${formData.timeframe}</p>
        ${formData.vehicleInfo ? `
          <h2>Vehicle Information</h2>
          <p><strong>Year:</strong> ${formData.vehicleInfo.year}</p>
          <p><strong>Make:</strong> ${formData.vehicleInfo.make}</p>
          <p><strong>Model:</strong> ${formData.vehicleInfo.model}</p>
        ` : ''}
        ${formData.notes ? `
          <h2>Additional Notes</h2>
          <p>${formData.notes}</p>
        ` : ''}
      `;
    } else {
      subject = 'New Contact Form Submission';
      emailHtml = `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <h2>Message</h2>
        <p>${formData.message}</p>
      `;
    }

    console.log("Preparing to send email:", {
      subject,
      recipients: ["support@247locksmithandsecurity.com", "eviatarmarketing@gmail.com"]
    });

    const emailResponse = await resend.emails.send({
      from: "Locksmith & Security LLC <onboarding@resend.dev>",
      to: ["support@247locksmithandsecurity.com", "eviatarmarketing@gmail.com"],
      subject: subject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    // Update submission status to processed
    const { error: updateError } = await supabase
      .from('submissions')
      .update({ status: 'processed' })
      .eq('id', submissionData.id);

    if (updateError) {
      console.error("Error updating submission status:", updateError);
      // Don't throw here as the email was sent successfully
    }

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // If we have a submission ID, update its status to failed
    if (error.submissionId) {
      const { error: updateError } = await supabase
        .from('submissions')
        .update({ 
          status: 'failed',
          error_message: error.message
        })
        .eq('id', error.submissionId);

      if (updateError) {
        console.error("Error updating submission failure status:", updateError);
      }
    }

    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack,
        name: error.name
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
