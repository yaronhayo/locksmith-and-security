import { useState, useEffect } from 'react';
import { BookingFormData } from '@/types/booking';

const STORAGE_KEY = 'bookingFormData';

export const useFormPersistence = (initialData: BookingFormData) => {
  const [formData, setFormData] = useState<BookingFormData>(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const clearPersistedData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData(initialData);
  };

  return { formData, setFormData, clearPersistedData };
};