
export const collectVisitorInfo = () => {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString()
  };
};

export const prepareSubmissionData = (
  formData: FormData, 
  address: string, 
  allKeysLost: string, 
  hasUnusedKey: string, 
  showVehicleInfo: boolean,
  recaptchaToken: string | null,
  sourceUrl: string
) => {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const timeframe = formData.get("timeframe") as string;
  const notes = formData.get("notes") as string || null;
  const unitNumber = formData.get("unit_number") as string || null;
  const gateCode = formData.get("gate_code") as string || null;
  const otherService = formData.get("other_service") as string || null;

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
  return {
    type: "booking" as const,
    name,
    phone,
    address: formattedAddress,
    unit_number: unitNumber,
    gate_code: gateCode,
    service: service === "Other" ? otherService : service,
    timeframe,
    notes,
    status: "pending" as const,
    visitor_info: collectVisitorInfo(),
    source_url: sourceUrl,
    recaptcha_token: recaptchaToken,
    vehicle_info: vehicleInfo
  };
};
