
export const validateForm = (formData: FormData, showVehicleInfo: boolean) => {
  const errors: Record<string, string> = {};
  
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const service = formData.get("service") as string;
  
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter a valid name (minimum 2 characters)";
  }
  
  // More flexible phone validation to accept various US formats
  if (!phone) {
    errors.phone = "Please enter a phone number";
  } else {
    const cleanedPhone = phone.replace(/\D/g, '');
    // Account for country code (starting with 1)
    const phoneDigits = cleanedPhone.startsWith('1') && cleanedPhone.length > 10 
      ? cleanedPhone.substring(1) 
      : cleanedPhone;
      
    if (phoneDigits.length < 10) {
      errors.phone = "Please enter a valid US phone number";
    }
  }
  
  if (!address || !address.trim()) {
    errors.address = "Please enter a valid address";
  }
  
  if (!service) {
    errors.service = "Please select a service";
  }

  if (showVehicleInfo) {
    const vehicleYear = formData.get("vehicleYear") as string;
    const vehicleMake = formData.get("vehicleMake") as string;
    const vehicleModel = formData.get("vehicleModel") as string;

    if (!vehicleYear || !/^\d{4}$/.test(vehicleYear)) {
      errors.vehicleYear = "Please enter a valid year (YYYY)";
    }
    if (!vehicleMake || vehicleMake.trim().length < 2) {
      errors.vehicleMake = "Please enter vehicle make";
    }
    if (!vehicleModel || vehicleModel.trim().length < 2) {
      errors.vehicleModel = "Please enter vehicle model";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
