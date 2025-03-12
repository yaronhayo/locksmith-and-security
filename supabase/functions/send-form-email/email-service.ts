
import { FormData } from './types';
import { formatSubjectLine, formatClientEmailBody, formatAdminEmailBody } from './formatters';

interface EmailConfig {
  adminEmail: string;
  fromEmail: string;
  replyToEmail: string;
}

export class EmailService {
  private resend: any;
  private config: EmailConfig;

  constructor(resendApiKey: string, config: EmailConfig) {
    // We'll import Resend in the main function to avoid Deno issues here
    this.config = config;
    this.resend = null; // Will be set by the caller
  }
  
  setResendClient(resendClient: any) {
    this.resend = resendClient;
  }

  async sendClientConfirmation(data: FormData): Promise<any> {
    if (!data.email) {
      console.log('No client email provided, skipping client confirmation');
      return null;
    }

    try {
      const response = await this.resend.emails.send({
        from: this.config.fromEmail,
        to: data.email,
        subject: `Thank you for contacting Locksmith & Security LLC`,
        html: formatClientEmailBody(data),
        reply_to: this.config.replyToEmail
      });
      
      console.log('Client confirmation email sent successfully');
      return response;
    } catch (error) {
      console.error('Error sending client confirmation email:', error);
      throw error;
    }
  }

  async sendAdminNotification(data: FormData): Promise<any> {
    try {
      const response = await this.resend.emails.send({
        from: this.config.fromEmail,
        to: this.config.adminEmail,
        subject: formatSubjectLine(data),
        html: formatAdminEmailBody(data),
        reply_to: data.email || this.config.replyToEmail
      });
      
      console.log('Admin notification email sent successfully');
      return response;
    } catch (error) {
      console.error('Error sending admin notification email:', error);
      throw error;
    }
  }
}
