
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { formatInTimeZone } from "npm:date-fns-tz@3.0.0";

// CORS headers for browser requests
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Format date for email templates
export const formatDate = (date: string | Date, format = 'MMM dd, yyyy h:mm a') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatInTimeZone(dateObj, 'America/New_York', format);
};

// Helper for creating response objects
export const createResponse = (body: any, status = 200) => {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 
      ...corsHeaders,
      'Content-Type': 'application/json' 
    },
  });
};

// Helper for creating error responses
export const createErrorResponse = (message: string, status = 400) => {
  return createResponse({ error: message }, status);
};

// Strip HTML from strings
export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>?/gm, '');
};

// Truncate text to a specified length
export const truncate = (text: string, length = 200): string => {
  if (text.length <= length) return text;
  return text.substring(0, length - 3) + '...';
};

// Create a debug log function that adds a timestamp
export const createLogger = (prefix: string) => {
  return (...args: any[]) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}][${prefix}]`, ...args);
  };
};
