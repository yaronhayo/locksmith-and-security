import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  // Initialize EmailJS with the public key
  emailjs.init("tCq71kzBo7QTx975C");
};

export const sendLeadNotification = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      "service_k76lb88",
      "template_7aqw0zp",
      {
        to_email: "yaronhayo@gmail.com",
        from_name: formData.name || "Website Lead",
        phone: formData.phone || "Not provided",
        address: formData.address || "Not provided",
        service: formData.service || "Not specified",
        timeframe: formData.timeframe || "Not specified",
        notes: formData.notes || "No additional notes",
        vehicleYear: formData.vehicleYear || "",
        vehicleMake: formData.vehicleMake || "",
        vehicleModel: formData.vehicleModel || "",
      }
    );
    
    return response;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    throw error;
  }
};

export const sendContactFormEmail = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      "service_k76lb88",
      "template_7aqw0zp",
      {
        to_email: "yaronhayo@gmail.com",
        from_name: formData.name || "Contact Form Submission",
        from_email: formData.email || "No email provided",
        phone: formData.phone || "Not provided",
        message: formData.message || "No message",
        recaptchaToken: formData.recaptchaToken || "",
      }
    );
    
    return response;
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    throw error;
  }
};