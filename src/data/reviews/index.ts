
export * from './carServiceReviews';
export * from './residentialReviews';
export * from './commercialReviews';

export const isCarService = (service: string): boolean => {
  return [
    'Car Lockout',
    'Car Key Programming',
    'Car Key Replacement',
    'Emergency Car Lockout'
  ].includes(service);
};

export const isResidentialService = (service: string): boolean => {
  return [
    'House Lockout',
    'Residential Lock Change',
    'Lock Rekey',
    'Lock Repair',
    'Security Upgrade',
    'Smart Lock Installation',
    'Emergency Lock Change',
    'Residential Rekey',
    'Property Management Locks',
    'Master Key System',
    'Residential Lock Installation'
  ].includes(service);
};

export const isCommercialService = (service: string): boolean => {
  return [
    'Commercial Security Installation',
    'Commercial Maintenance',
    'Commercial Security',
    'Commercial Lock Installation',
    'Commercial Lock Repair',
    'Commercial Rekey',
    'Access Control System',
    'Commercial Lockout'
  ].includes(service);
};
