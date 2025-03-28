
import { BookingSubmission } from "@/types/submissions";

export const submitBookingForm = async (
  formData: FormData,
  showVehicleInfo: boolean,
  sourceUrl: string,
  recaptchaToken: string | null,
  address: string
) => {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const timeframe = formData.get("timeframe") as string;
  const notes = formData.get("notes") as string;
  const unitNumber = formData.get("unit_number") as string;
  const gateCode = formData.get("gate_code") as string;
  const otherService = formData.get("other_service") as string;
  const allKeysLost = formData.get("all_keys_lost") as string;
  const hasUnusedKey = formData.get("has_unused_key") as string;

  // Format address with unit number if provided
  const formattedAddress = unitNumber 
    ? `${address} Unit ${unitNumber}`
    : address;

  // Prepare vehicle information if needed
  let vehicleInfo = null;
  if (showVehicleInfo) {
    vehicleInfo = {
      year: formData.get("vehicle_year") as string,
      make: formData.get("vehicle_make") as string,
      model: formData.get("vehicle_model") as string,
      all_keys_lost: allKeysLost === "yes",
      has_unused_key: hasUnusedKey === "yes"
    };
  }

  // Prepare the submission data
  const submissionData: BookingSubmission = {
    type: "booking",
    name,
    phone,
    address: formattedAddress,
    unit_number: unitNumber || null,
    gate_code: gateCode || null,
    service: service === "Other" ? otherService : service,
    timeframe,
    notes: notes || null,
    status: "pending",
    visitor_info: collectVisitorInfo(),
    source_url: sourceUrl,
    recaptcha_token: recaptchaToken,
    vehicle_info: vehicleInfo
  };

  try {
    // In a real application, this would send the data to a server
    // For this demo, we'll simulate a successful submission
    // const response = await fetch("/api/submit-booking", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(submissionData)
    // });
    
    // if (!response.ok) {
    //   throw new Error("Failed to submit booking");
    // }
    
    console.log("Booking submission data:", submissionData);
    
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw new Error("Failed to submit your booking. Please try again or contact us directly.");
  }
};

const collectVisitorInfo = () => {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString()
  };
};
