import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  // Initialize EmailJS with your public key
  emailjs.init("YOUR_PUBLIC_KEY");
};

export const sendLeadNotification = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Service ID from EmailJS
      "YOUR_TEMPLATE_ID", // Template ID from EmailJS
      {
        to_email: "yaronhayo@gmail.com",
        from_name: formData.name || "Website Lead",
        message: `
          New lead from: ${formData.name}
          Phone: ${formData.phone}
          Address: ${formData.address}
          Service: ${formData.service}
          Timeframe: ${formData.timeframe}
          Notes: ${formData.notes}
          ${formData.vehicleYear ? `
          Vehicle Info:
          Year: ${formData.vehicleYear}
          Make: ${formData.vehicleMake}
          Model: ${formData.vehicleModel}
          ` : ''}
        `,
      }
    );
    
    return response;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    throw error;
  }
};