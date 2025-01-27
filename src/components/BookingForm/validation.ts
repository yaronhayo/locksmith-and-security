import { FormErrors } from "@/types/booking";

export const validateForm = (formData: FormData, showVehicleInfo: boolean) => {
  const errors: FormErrors = {};
  
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
  
  if (!address || address.trim().length < 5) {
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