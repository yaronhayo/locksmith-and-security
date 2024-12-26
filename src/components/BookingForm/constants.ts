export const services = [
  "Car Lockout",
  "Car Key Programming",
  "House Lockout",
  "Lock Change",
  "Lock Repair",
  "Lock Installation",
  "Key Duplication",
  "Other"
] as const;

export const timeframes = [
  "ASAP",
  "Same Day",
  "Within Couple of Days",
  "Within Couple of Weeks",
  "Just Curious"
] as const;

export type Service = typeof services[number];
export type Timeframe = typeof timeframes[number];