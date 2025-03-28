
import { FormData } from "./types.ts";
import { formatInEasternTime, formatTrafficSource, formatVisitorInfo } from "./utils.ts";

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

export const getBookingTemplate = (formData: FormData): string => {
  const currentTimeEastern = formatInEasternTime(new Date());

  return `
    <div style="${commonStyles}">
      <div style="${headerStyle}">
        <h1 style="margin: 0; font-size: 24px;">New Service Booking Request</h1>
        <p style="margin: 10px 0 0; opacity: 0.9;">Received on ${currentTimeEastern} ET</p>
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
              <td style="padding: 8px 0;">${formData.vehicle_info.year || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Make:</strong></td>
              <td style="padding: 8px 0;">${formData.vehicle_info.make || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Model:</strong></td>
              <td style="padding: 8px 0;">${formData.vehicle_info.model || 'Not provided'}</td>
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
          ${formatTrafficSource(formData.traffic_source, formData.page_metrics)}
          ${formatVisitorInfo(formData.visitor_info)}
        </table>
      </div>
      <div style="text-align: center; padding: 20px; color: #718096; font-size: 14px;">
        <p>© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
      </div>
    </div>
  `;
};

export const getContactTemplate = (formData: FormData): string => {
  const currentTimeEastern = formatInEasternTime(new Date());

  return `
    <div style="${commonStyles}">
      <div style="${headerStyle}">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0; opacity: 0.9;">Received on ${currentTimeEastern} ET</p>
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
          ${formatTrafficSource(formData.traffic_source, formData.page_metrics)}
          ${formatVisitorInfo(formData.visitor_info)}
        </table>
      </div>
      <div style="text-align: center; padding: 20px; color: #718096; font-size: 14px;">
        <p>© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
      </div>
    </div>
  `;
};

export const getEmailTemplate = (formData: FormData): string => {
  return formData.type === 'booking' 
    ? getBookingTemplate(formData) 
    : getContactTemplate(formData);
};
