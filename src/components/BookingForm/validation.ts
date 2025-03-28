
import { BookingFormValues, FormErrors } from "./types";

export const validateForm = (formValues: BookingFormValues) => {
  const errors: FormErrors = {};
  let isValid = true;
  
  // Validate name
  if (!formValues.name || formValues.name.trim() === '') {
    errors.name = 'Name is required';
    isValid = false;
  }
  
  // Validate phone
  if (!formValues.phone || formValues.phone.trim() === '') {
    errors.phone = 'Phone number is required';
    isValid = false;
  }
  
  // Validate email
  if (!formValues.email || formValues.email.trim() === '') {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = 'Invalid email format';
    isValid = false;
  }
  
  // Validate address
  if (!formValues.address || formValues.address.trim() === '') {
    errors.address = 'Service address is required';
    isValid = false;
  }
  
  // Validate service
  if (!formValues.service || formValues.service === 'Select a service') {
    errors.service = 'Please select a service';
    isValid = false;
  }
  
  // Validate other service if applicable
  if (formValues.service === 'Other' && (!formValues.other_service || formValues.other_service.trim() === '')) {
    errors.other_service = 'Please describe the service you need';
    isValid = false;
  }
  
  // Validate vehicle info if applicable
  if (formValues.service && ['Car Key Replacement', 'Car Lockout', 'Car Key Programming', 'Ignition Repair'].includes(formValues.service)) {
    const vehicle = formValues.vehicle_info || {};
    
    if (!vehicle.year) {
      errors['vehicle_year'] = 'Vehicle year is required';
      isValid = false;
    }
    
    if (!vehicle.make) {
      errors['vehicle_make'] = 'Vehicle make is required';
      isValid = false;
    }
    
    if (!vehicle.model) {
      errors['vehicle_model'] = 'Vehicle model is required';
      isValid = false;
    }
  }
  
  return { isValid, errors };
};
