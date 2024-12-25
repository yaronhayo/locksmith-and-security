import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  // Initialize EmailJS with the public key
  emailjs.init("tCq71kzBo7QTx975C");
};

export const sendLeadNotification = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      "service_k76lb88", // Service ID
      "YOUR_TEMPLATE_ID", // You still need to create an email template and add its ID here
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