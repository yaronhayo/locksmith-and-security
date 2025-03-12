
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { handleFormSubmission } from "./handlers.ts";
import { corsHeaders } from "./utils.ts";

const handler = async (req: Request): Promise<Response> => {
  console.log("Starting handler with method:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    return await handleFormSubmission(req);
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
