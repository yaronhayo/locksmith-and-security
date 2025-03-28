
import React from 'react';
import { usePhoneNumber } from '@/utils/phoneUtils';
import { Phone } from 'lucide-react';

interface DynamicPhoneNumberProps {
  showIcon?: boolean;
  className?: string;
  asLink?: boolean; // New prop to determine if it should render as a link
}

const DynamicPhoneNumber: React.FC<DynamicPhoneNumberProps> = ({ 
  showIcon = false,
  className = '',
  asLink = false // Default to not rendering as a link (just text)
}) => {
  const { phoneNumber, phoneHref } = usePhoneNumber();
  
  // If asLink is true, render as an anchor tag, otherwise just render the text
  if (asLink) {
    return (
      <a 
        href={phoneHref} 
        className={`inline-flex items-center ${className}`}
      >
        {showIcon && <Phone className="mr-2 h-4 w-4" />}
        {phoneNumber}
      </a>
    );
  }
  
  // Just render the text without the anchor when not needed
  return (
    <span className={`inline-flex items-center ${className}`}>
      {showIcon && <Phone className="mr-2 h-4 w-4" />}
      {phoneNumber}
    </span>
  );
};

export default DynamicPhoneNumber;
