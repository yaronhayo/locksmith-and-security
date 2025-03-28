
import { validateForm } from "../validation";

export const useFormValidation = () => {
  return {
    validateForm: (formData: FormData, showVehicleInfo: boolean) => {
      return validateForm(formData, showVehicleInfo);
    }
  };
};
