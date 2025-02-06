
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    // Log the RESEND_API_KEY presence (not the actual key)
    console.log("RESEND_API_KEY present:", !!Deno.env.get("RESEND_API_KEY"));

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
