
/**
 * Maps service page paths to their corresponding selection options in the booking form
 */
export const mapServicePathToOption = (path: string): string | undefined => {
  // Strip leading and trailing slashes for consistency
  const normalizedPath = path.replace(/^\/|\/$/g, '');
  
  const servicePathMap: Record<string, string> = {
    // Emergency services
    'services/emergency-locksmith/car-lockout': 'Car Lockout',
    'services/emergency-locksmith/house-lockout': 'House Lockout',
    'services/emergency-locksmith/business-lockout': 'Business Lockout',
    'services/emergency-locksmith/storage-unit-lockout': 'Storage Unit Lockout',
    
    // Residential services
    'services/residential-locksmith/lock-replacement': 'Lock Replacement',
    'services/residential-locksmith/lock-rekey': 'Lock Rekey',
    'services/residential-locksmith/lock-repair': 'Lock Repair',
    'services/residential-locksmith/gate-locks': 'Gate Locks',
    
    // Commercial services
    'services/commercial-locksmith/lock-replacement': 'Commercial Lock Replacement',
    'services/commercial-locksmith/lock-rekey': 'Commercial Lock Rekey',
    'services/commercial-locksmith/master-key': 'Master Key System',
    'services/commercial-locksmith/access-control': 'Access Control',
    'services/commercial-locksmith/emergency-exit-device': 'Emergency Exit Device',
    
    // Auto services
    'services/auto-locksmith/car-key-replacement': 'Car Key Replacement',
    'services/auto-locksmith/key-fob-programming': 'Key Fob Programming',
    'services/auto-locksmith/car-key-duplicate': 'Car Key Duplicate',
    'services/auto-locksmith/car-key-cutting': 'Car Key Cutting',
    'services/auto-locksmith/ignition-lock-cylinder': 'Ignition Lock Cylinder Repair'
  };
  
  return servicePathMap[normalizedPath];
};

/**
 * Hook to get the preselected service based on current location path
 */
export const useCurrentServiceOption = (): string | undefined => {
  const location = window.location.pathname;
  return mapServicePathToOption(location);
};
