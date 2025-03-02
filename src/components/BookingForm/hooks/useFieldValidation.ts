
import { useState, useEffect } from 'react';
import { getEmailError, getNameError, getPhoneError } from '@/utils/inputValidation';

interface ValidationState {
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface DirtyState {
  name: boolean;
  email: boolean;
  phone: boolean;
}

interface UseFieldValidationProps {
  initialValues?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  externalErrors?: Record<string, string>;
}

export const useFieldValidation = ({ 
  initialValues = {}, 
  externalErrors = {} 
}: UseFieldValidationProps = {}) => {
  const [name, setName] = useState(initialValues.name || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [phone, setPhone] = useState(initialValues.phone || '');
  
  const [internalErrors, setInternalErrors] = useState<ValidationState>({
    name: null,
    email: null,
    phone: null
  });
  
  const [isDirty, setIsDirty] = useState<DirtyState>({
    name: false,
    email: false,
    phone: false
  });

  // Validate name when it changes and is dirty
  useEffect(() => {
    if (isDirty.name) {
      setInternalErrors(prev => ({ 
        ...prev, 
        name: getNameError(name) 
      }));
    }
  }, [name, isDirty.name]);

  // Validate email when it changes and is dirty
  useEffect(() => {
    if (isDirty.email) {
      setInternalErrors(prev => ({ 
        ...prev, 
        email: getEmailError(email) 
      }));
    }
  }, [email, isDirty.email]);

  // Validate phone when it changes and is dirty
  useEffect(() => {
    if (isDirty.phone) {
      setInternalErrors(prev => ({ 
        ...prev, 
        phone: getPhoneError(phone) 
      }));
    }
  }, [phone, isDirty.phone]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!isDirty.name) setIsDirty(prev => ({ ...prev, name: true }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isDirty.email) setIsDirty(prev => ({ ...prev, email: true }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (!isDirty.phone) setIsDirty(prev => ({ ...prev, phone: true }));
  };

  const markFieldAsDirty = (field: keyof DirtyState) => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
  };

  return {
    values: { name, email, phone },
    handlers: {
      handleNameChange,
      handleEmailChange,
      handlePhoneChange,
      markFieldAsDirty
    },
    errors: {
      name: externalErrors.name || (isDirty.name ? internalErrors.name : null),
      email: externalErrors.email || (isDirty.email ? internalErrors.email : null),
      phone: externalErrors.phone || (isDirty.phone ? internalErrors.phone : null)
    },
    isDirty
  };
};
