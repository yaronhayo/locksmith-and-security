
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
  vehicle_info?: {
    year: string;
    make: string;
    model: string;
  };
  message?: string;
  visitor_info?: {
    userAgent: string;
    language: string;
    platform: string;
    screenResolution: string;
    windowSize: string;
    timestamp: string;
  };
  source_url?: string;
}

const formatVisitorInfo = (info?: FormData['visitor_info']): string => {
  if (!info) return '';
  return `
    <h3>Visitor Information</h3>
    <p><strong>Browser:</strong> ${info.userAgent}</p>
    <p><strong>Language:</strong> ${info.language}</p>
    <p><strong>Platform:</strong> ${info.platform}</p>
    <p><strong>Screen Size:</strong> ${info.screenResolution}</p>
    <p><strong>Window Size:</strong> ${info.windowSize}</p>
    <p><strong>Timestamp:</strong> ${info.timestamp}</p>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting form submission handler");
    
    const formData: FormData = await req.json();
    console.log("Received form data:", formData);

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
        ${formData.vehicle_info ? `
          <h2>Vehicle Information</h2>
          <p><strong>Year:</strong> ${formData.vehicle_info.year}</p>
          <p><strong>Make:</strong> ${formData.vehicle_info.make}</p>
          <p><strong>Model:</strong> ${formData.vehicle_info.model}</p>
        ` : ''}
        ${formData.notes ? `
          <h2>Additional Notes</h2>
          <p>${formData.notes}</p>
        ` : ''}
        <h2>Submission Details</h2>
        <p><strong>Source URL:</strong> ${formData.source_url || 'Not available'}</p>
        ${formatVisitorInfo(formData.visitor_info)}
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
        <h2>Submission Details</h2>
        <p><strong>Source URL:</strong> ${formData.source_url || 'Not available'}</p>
        ${formatVisitorInfo(formData.visitor_info)}
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
