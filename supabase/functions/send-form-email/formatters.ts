
import { FormData } from './types';

export const formatSubjectLine = (data: FormData): string => {
  const prefix = data.type === 'booking' ? 'New Booking Request' : 'New Contact Inquiry';
  return `${prefix} - ${data.name} | ${data.service || 'General Inquiry'}`;
};

export const formatClientHeadingText = (data: FormData): string => {
  return data.type === 'booking' 
    ? 'Your booking request has been received'
    : 'Your message has been received';
};

export const formatContactDetails = (data: FormData): string => {
  return `
    <div style="margin-bottom: 20px;">
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
      <p><strong>Location:</strong> ${data.address}</p>
      ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ''}
      ${data.timeframe ? `<p><strong>Timeframe:</strong> ${data.timeframe}</p>` : ''}
    </div>
  `;
};

export const formatVehicleInfo = (data: FormData): string => {
  if (!data.vehicle_info) return '';
  
  const { year, make, model, all_keys_lost, has_unused_key } = data.vehicle_info;
  
  return `
    <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
      <h3 style="margin-top: 0; color: #333;">Vehicle Information</h3>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Make:</strong> ${make}</p>
      <p><strong>Model:</strong> ${model}</p>
      ${all_keys_lost !== undefined ? `<p><strong>All Keys Lost:</strong> ${all_keys_lost ? 'Yes' : 'No'}</p>` : ''}
      ${has_unused_key !== undefined ? `<p><strong>Has Unused Key:</strong> ${has_unused_key ? 'Yes' : 'No'}</p>` : ''}
    </div>
  `;
};

export const formatClientEmailBody = (data: FormData): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background-color: #1e3a8a; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <h2 style="margin: 0;">${formatClientHeadingText(data)}</h2>
      </div>
      
      <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <p>Dear ${data.name},</p>
        
        <p>Thank you for contacting Locksmith & Security LLC. We have received your ${data.type === 'booking' ? 'booking request' : 'message'}.</p>
        
        <p>Our team will review your information and get back to you as soon as possible. For urgent assistance, please call us at <strong>(201) 748-2070</strong>.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #1e3a8a;">Your Information</h3>
          ${formatContactDetails(data)}
          ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
          ${data.vehicle_info ? formatVehicleInfo(data) : ''}
        </div>
        
        <p>We appreciate your interest in our services.</p>
        
        <p>Best regards,<br>Locksmith & Security LLC Team</p>
      </div>
      
      <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
        <p>© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
        <p>7116 Bergenline Ave, North Bergen, NJ 07047</p>
      </div>
    </div>
  `;
};

export const formatAdminEmailBody = (data: FormData): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background-color: #1e3a8a; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <h2 style="margin: 0;">${data.type === 'booking' ? 'New Booking Request' : 'New Contact Inquiry'}</h2>
      </div>
      
      <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <h3 style="color: #1e3a8a;">Client Information</h3>
        ${formatContactDetails(data)}
        
        ${data.message ? `
          <h3 style="color: #1e3a8a;">Message</h3>
          <div style="margin-bottom: 20px;">
            <p>${data.message}</p>
          </div>
        ` : ''}
        
        ${data.vehicle_info ? `
          <h3 style="color: #1e3a8a;">Vehicle Information</h3>
          <div style="margin-bottom: 20px;">
            <p><strong>Year:</strong> ${data.vehicle_info.year}</p>
            <p><strong>Make:</strong> ${data.vehicle_info.make}</p>
            <p><strong>Model:</strong> ${data.vehicle_info.model}</p>
            ${data.vehicle_info.all_keys_lost !== undefined ? `<p><strong>All Keys Lost:</strong> ${data.vehicle_info.all_keys_lost ? 'Yes' : 'No'}</p>` : ''}
            ${data.vehicle_info.has_unused_key !== undefined ? `<p><strong>Has Unused Key:</strong> ${data.vehicle_info.has_unused_key ? 'Yes' : 'No'}</p>` : ''}
          </div>
        ` : ''}
        
        ${data.visitor_info ? `
          <h3 style="color: #1e3a8a;">Technical Information</h3>
          <div style="margin-bottom: 20px; font-size: 12px; color: #666;">
            <p><strong>User Agent:</strong> ${data.visitor_info.userAgent}</p>
            <p><strong>Platform:</strong> ${data.visitor_info.platform}</p>
            <p><strong>Screen:</strong> ${data.visitor_info.screenResolution}</p>
            <p><strong>Time:</strong> ${new Date(data.visitor_info.timestamp).toLocaleString()}</p>
            <p><strong>Source URL:</strong> ${data.source_url || 'Direct'}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `;
};
