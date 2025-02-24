import { BookingFormState, SubmissionData } from "../types";

export const submitForm = async (
  formData: FormData,
  state: BookingFormState,
  setIsSubmitting: (value: boolean) => void,
  onSuccess: () => void,
  onError: (error: string) => void
) => {
  setIsSubmitting(true);
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: SubmissionData = await response.json();
    console.log('Submission successful:', data);
    onSuccess();
  } catch (error) {
    console.error('Error submitting form:', error);
    onError(error.message);
  } finally {
    setIsSubmitting(false);
  }
};
