
export const validateForm = (formData: FormData, showVehicleInfo: boolean) => {
  const errors: Record<string, string> = {};
  
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const service = formData.get("service") as string;
  
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter a valid name (minimum 2 characters)";
  }
  
  if (!phone || !/^[\d\s()-]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  
  if (!address || !address.trim()) {
    errors.address = "Please enter a valid address";
  }
  
  if (!service) {
    errors.service = "Please select a service";
  }

  if (service === "Other") {
    const otherService = formData.get("other_service") as string;
    if (!otherService || otherService.trim().length < 2) {
      errors.other_service = "Please specify the service needed";
    }
  }

  if (showVehicleInfo) {
    const vehicleYear = formData.get("vehicle_year") as string;
    const vehicleMake = formData.get("vehicle_make") as string;
    const vehicleModel = formData.get("vehicle_model") as string;

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

  console.log("Form validation results:", {
    errors,
    isValid: Object.keys(errors).length === 0
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
