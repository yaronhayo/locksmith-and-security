
import React from 'react';
import { usePhoneNumber } from '@/hooks/usePhoneNumber';
import { Phone } from 'lucide-react';

interface PhoneNumberProps {
  showIcon?: boolean;
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  showIcon = false,
  className = '',
  iconClassName = 'h-4 w-4 mr-2',
  linkClassName = '',
}) => {
  const { phoneNumber, phoneNumberRaw } = usePhoneNumber();

  return (
    <a 
      href={`tel:${phoneNumberRaw}`}
      className={linkClassName}
    >
      <span className={`flex items-center ${className}`}>
        {showIcon && <Phone className={iconClassName} />}
        {phoneNumber}
      </span>
    </a>
  );
};

export default PhoneNumber;
