
export const services = [
  // Emergency Locksmith
  "Car Lockout",
  "House Lockout",
  "Business Lockout",
  "Storage Unit Lockout",
  
  // Residential Locksmith
  "Lock Replacement",
  "Lock Rekey",
  "Lock Repair",
  "Gate Locks",
  
  // Commercial Locksmith
  "Commercial Lock Replacement",
  "Commercial Lock Rekey",
  "Master Key System",
  "Access Control",
  "Emergency Exit Device",
  
  // Automotive Locksmith
  "Car Key Replacement",
  "Key Fob Programming",
  "Car Key Duplicate",
  "Car Key Cutting",
  "Ignition Lock Cylinder Repair",
  
  "Other"
] as const;

export const carKeyServices = [
  "Car Key Replacement",
  "Key Fob Programming",
  "Car Key Duplicate",
  "Car Key Cutting"
];

export const allKeysLostServices = [
  "Car Key Replacement"
];

export const unusedKeyServices = [
  "Key Fob Programming",
  "Car Key Cutting"
];

export const timeframes = [
  "ASAP",
  "Same Day",
  "Within Couple of Days",
  "Within Couple of Weeks",
  "Just Curious"
] as const;
