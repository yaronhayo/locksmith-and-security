
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
    all_keys_lost?: boolean;
    has_unused_key?: boolean;
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
  traffic_source?: {
    source: string;
    medium: string;
    campaign: string;
    keyword: string;
    clickPath: string[];
  };
}

const formatVisitorInfo = (info?: FormData['visitor_info']): string => {
  if (!info) return '';
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Visitor Information</h3>
        <p style="margin: 5px 0;"><strong>Browser:</strong> ${info.userAgent}</p>
        <p style="margin: 5px 0;"><strong>Language:</strong> ${info.language}</p>
        <p style="margin: 5px 0;"><strong>Platform:</strong> ${info.platform}</p>
        <p style="margin: 5px 0;"><strong>Screen Size:</strong> ${info.screenResolution}</p>
        <p style="margin: 5px 0;"><strong>Window Size:</strong> ${info.windowSize}</p>
        <p style="margin: 5px 0;"><strong>Timestamp:</strong> ${info.timestamp}</p>
      </td>
    </tr>
  `;
};

const formatTrafficSource = (info?: FormData['traffic_source']): string => {
  if (!info) return '';
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Traffic Source Information</h3>
        <p style="margin: 5px 0;"><strong>Source:</strong> ${info.source || 'Direct'}</p>
        <p style="margin: 5px 0;"><strong>Medium:</strong> ${info.medium || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Campaign:</strong> ${info.campaign || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Keyword:</strong> ${info.keyword || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Click Path:</strong> ${info.clickPath?.join(' → ') || 'N/A'}</p>
      </td>
    </tr>
  `;
};

const formatInEasternTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

const getEmailTemplate = (formData: FormData): string => {
  const commonStyles = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #2d3748;
  `;

  const headerStyle = `
    background-color: #1a365d;
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `;

  const sectionHeaderStyle = `
    color: #1a365d;
    margin: 25px 0 15px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
  `;

  const currentTimeEastern = formatInEasternTime(new Date());

  if (formData.type === 'booking') {
    return `
      <div style="${commonStyles}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 24px;">New Service Booking Request</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">Received on ${currentTimeEastern} EST</p>
        </div>
        <div style="padding: 30px; background-color: white; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Customer Information</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${formData.phone}" style="color: #4299e1;">${formData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Address:</strong></td>
              <td style="padding: 8px 0;">${formData.address}</td>
            </tr>
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Service Details</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Service:</strong></td>
              <td style="padding: 8px 0;">${formData.service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Timeframe:</strong></td>
              <td style="padding: 8px 0;">${formData.timeframe}</td>
            </tr>
            ${formData.vehicle_info ? `
              <tr>
                <td colspan="2">
                  <h2 style="${sectionHeaderStyle}">Vehicle Information</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Year:</strong></td>
                <td style="padding: 8px 0;">${formData.vehicle_info.year}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Make:</strong></td>
                <td style="padding: 8px 0;">${formData.vehicle_info.make}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Model:</strong></td>
                <td style="padding: 8px 0;">${formData.vehicle_info.model}</td>
              </tr>
              ${formData.vehicle_info.all_keys_lost !== undefined ? `
                <tr>
                  <td style="padding: 8px 0;"><strong>All Keys Lost:</strong></td>
                  <td style="padding: 8px 0;">${formData.vehicle_info.all_keys_lost ? 'Yes' : 'No'}</td>
                </tr>
              ` : ''}
              ${formData.vehicle_info.has_unused_key !== undefined ? `
                <tr>
                  <td style="padding: 8px 0;"><strong>Has Unused Key:</strong></td>
                  <td style="padding: 8px 0;">${formData.vehicle_info.has_unused_key ? 'Yes' : 'No'}</td>
                </tr>
              ` : ''}
            ` : ''}
            ${formData.notes ? `
              <tr>
                <td colspan="2">
                  <h2 style="${sectionHeaderStyle}">Additional Notes</h2>
                  <p style="margin: 5px 0;">${formData.notes}</p>
                </td>
              </tr>
            ` : ''}
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Submission Details</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Source URL:</strong></td>
              <td style="padding: 8px 0;">${formData.source_url || 'Not available'}</td>
            </tr>
            ${formatTrafficSource(formData.traffic_source)}
            ${formatVisitorInfo(formData.visitor_info)}
          </table>
        </div>
        <div style="text-align: center; padding: 20px; color: #718096; font-size: 14px;">
          <p>© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
        </div>
      </div>
    `;
  } else {
    return `
      <div style="${commonStyles}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">Received on ${currentTimeEastern} EST</p>
        </div>
        <div style="padding: 30px; background-color: white; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Contact Information</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${formData.phone}" style="color: #4299e1;">${formData.phone}</a></td>
            </tr>
            ${formData.email ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #4299e1;">${formData.email}</a></td>
              </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0;"><strong>Address:</strong></td>
              <td style="padding: 8px 0;">${formData.address}</td>
            </tr>
            ${formData.service ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Service:</strong></td>
                <td style="padding: 8px 0;">${formData.service}</td>
              </tr>
            ` : ''}
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Message</h2>
                <p style="margin: 5px 0; white-space: pre-wrap;">${formData.message}</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h2 style="${sectionHeaderStyle}">Submission Details</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Source URL:</strong></td>
              <td style="padding: 8px 0;">${formData.source_url || 'Not available'}</td>
            </tr>
            ${formatTrafficSource(formData.traffic_source)}
            ${formatVisitorInfo(formData.visitor_info)}
          </table>
        </div>
        <div style="text-align: center; padding: 20px; color: #718096; font-size: 14px;">
          <p>© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
        </div>
      </div>
    `;
  }
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Starting handler with method:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting form submission handler");
    
    const formData: FormData = await req.json();
    console.log("Received form data:", formData);

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

serve(handler);
