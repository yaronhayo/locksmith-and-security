export const validateForm = (formData: FormData) => {
  const errors: Record<string, string> = {};
  
  // Name validation
  const name = formData.get("name") as string;
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters)";
  } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    errors.name = "Name can only contain letters, spaces, hyphens and apostrophes";
  }
  
  // Phone validation
  const phone = formData.get("phone") as string;
  if (!phone) {
    errors.phone = "Please enter your phone number";
  } else if (!/^[\d\s()-]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number (minimum 10 digits)";
  }
  
  // Address validation
  const address = formData.get("address") as string;
  if (!address || address.trim().length < 5) {
    errors.address = "Please enter your complete service address";
  }
  
  // Service validation
  const service = formData.get("service") as string;
  if (!service) {
    errors.service = "Please select the service you need";
  }

  // Timeframe validation
  const timeframe = formData.get("timeframe") as string;
  if (!timeframe) {
    errors.timeframe = "Please select when you need the service";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateVehicleInfo = (formData: FormData) => {
  const errors: Record<string, string> = {};
  
  const vehicleYear = formData.get("vehicleYear") as string;
  const currentYear = new Date().getFullYear();
  
  if (!vehicleYear) {
    errors.vehicleYear = "Please enter the vehicle year";
  } else if (!/^\d{4}$/.test(vehicleYear)) {
    errors.vehicleYear = "Please enter a valid 4-digit year";
  } else {
    const year = parseInt(vehicleYear);
    if (year < 1900 || year > currentYear + 1) {
      errors.vehicleYear = `Year must be between 1900 and ${currentYear + 1}`;
    }
  }
  
  const vehicleMake = formData.get("vehicleMake") as string;
  if (!vehicleMake || vehicleMake.trim().length < 2) {
    errors.vehicleMake = "Please enter the vehicle manufacturer";
  } else if (!/^[a-zA-Z0-9\s-]+$/.test(vehicleMake)) {
    errors.vehicleMake = "Vehicle make can only contain letters, numbers, spaces and hyphens";
  }
  
  const vehicleModel = formData.get("vehicleModel") as string;
  if (!vehicleModel || vehicleModel.trim().length < 2) {
    errors.vehicleModel = "Please enter the vehicle model";
  } else if (!/^[a-zA-Z0-9\s-]+$/.test(vehicleModel)) {
    errors.vehicleModel = "Vehicle model can only contain letters, numbers, spaces and hyphens";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};