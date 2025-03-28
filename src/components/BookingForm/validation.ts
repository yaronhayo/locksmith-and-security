
export const validateForm = (formData: FormData, showVehicleInfo: boolean) => {
  const errors: Record<string, string> = {};
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const address = formData.get("address") as string;

  console.log("Validating form with address:", address);

  if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }

  if (!phone || phone.trim() === "") {
    errors.phone = "Phone number is required";
  } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!service || service === "Select service") {
    errors.service = "Please select a service";
  }
  
  if (!address || address.trim() === "") {
    errors.address = "Service address is required";
  }

  if (showVehicleInfo) {
    const vehicleYear = formData.get("vehicle_year") as string;
    const vehicleMake = formData.get("vehicle_make") as string;
    const vehicleModel = formData.get("vehicle_model") as string;

    if (!vehicleYear || vehicleYear.trim() === "") {
      errors.vehicle_year = "Vehicle year is required";
    }

    if (!vehicleMake || vehicleMake.trim() === "") {
      errors.vehicle_make = "Vehicle make is required";
    }

    if (!vehicleModel || vehicleModel.trim() === "") {
      errors.vehicle_model = "Vehicle model is required";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
