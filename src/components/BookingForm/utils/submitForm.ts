
import { BookingFormState, SubmissionData } from "../types";

export const submitBookingForm = async (
  formData: FormData,
  showVehicleInfo: boolean,
  pathname: string,
  recaptchaToken: string,
  address: string
) => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
      headers: {
        'X-Recaptcha-Token': recaptchaToken,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: SubmissionData = await response.json();
    console.log('Submission successful:', data);
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
