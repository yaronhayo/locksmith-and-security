export const validateForm = (formData: FormData) => {
  const errors: Record<string, string> = {};
  
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const service = formData.get("service") as string;
  
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters)";
  }
  
  if (!phone || !/^[\d\s()-]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number (minimum 10 digits)";
  }
  
  if (!address || address.trim().length < 5) {
    errors.address = "Please enter your complete service address";
  }
  
  if (!service) {
    errors.service = "Please select the service you need";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateVehicleInfo = (formData: FormData) => {
  const errors: Record<string, string> = {};
  
  const vehicleYear = formData.get("vehicleYear") as string;
  const vehicleMake = formData.get("vehicleMake") as string;
  const vehicleModel = formData.get("vehicleModel") as string;

  if (!vehicleYear || !/^\d{4}$/.test(vehicleYear)) {
    errors.vehicleYear = "Please enter a valid 4-digit year";
  }
  
  if (!vehicleMake || vehicleMake.trim().length < 2) {
    errors.vehicleMake = "Please enter the vehicle manufacturer";
  }
  
  if (!vehicleModel || vehicleModel.trim().length < 2) {
    errors.vehicleModel = "Please enter the vehicle model";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};