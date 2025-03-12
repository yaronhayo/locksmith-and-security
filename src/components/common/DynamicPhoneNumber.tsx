
import React from 'react';
import { usePhoneNumber } from '@/utils/phoneUtils';
import { Phone } from 'lucide-react';

interface DynamicPhoneNumberProps {
  showIcon?: boolean;
  className?: string;
}

const DynamicPhoneNumber: React.FC<DynamicPhoneNumberProps> = ({ 
  showIcon = false,
  className = ''
}) => {
  const { phoneNumber, phoneHref } = usePhoneNumber();
  
  return (
    <a 
      href={phoneHref} 
      className={`inline-flex items-center ${className}`}
    >
      {showIcon && <Phone className="mr-2 h-4 w-4" />}
      {phoneNumber}
    </a>
  );
};

export default DynamicPhoneNumber;
