import { BookingFormData } from '@/types/booking';

export const submitBookingForm = async (data: BookingFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, we'll simulate a successful response
    return {
      success: true,
      message: "Booking request submitted successfully"
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit booking request. Please try again.');
  }
};