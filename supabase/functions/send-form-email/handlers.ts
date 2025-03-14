
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { corsHeaders } from "./utils.ts";
import { getEmailTemplate } from "./templates.ts";
import { FormData } from "./types.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export const handleFormSubmission = async (req: Request): Promise<Response> => {
  console.log("Starting form submission handler");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const formData: FormData = await req.json();
    console.log("Received form data:", JSON.stringify(formData, null, 2));

    const emailHtml = getEmailTemplate(formData);
    const subject = formData.type === 'booking' ? 'New Service Booking Request' : 'New Contact Form Submission';

    console.log("Preparing to send email with subject:", subject);
    
    // Use the configured email addresses
    const fromEmail = "support@247locksmithandsecurity.com";
    const toEmails = ["eviatarmarketing@gmail.com", "yaron@gettmarketing.com"];
    
    console.log("Using from email:", fromEmail);
    console.log("Using to emails:", toEmails);

    try {
      const emailResponse = await resend.emails.send({
        from: `Locksmith & Security <${fromEmail}>`,
        to: toEmails,
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
    } catch (emailError: any) {
      console.error("Resend API Error:", {
        message: emailError.message,
        code: emailError.statusCode,
        name: emailError.name
      });
      throw emailError;
    }
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
