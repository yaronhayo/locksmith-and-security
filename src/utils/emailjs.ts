import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  // Initialize EmailJS with the public key
  emailjs.init("tCq71kzBo7QTx975C");
};

export const sendLeadNotification = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      "service_k76lb88",
      "template_7aqw0zp", // Replace this with your template ID after creating it
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