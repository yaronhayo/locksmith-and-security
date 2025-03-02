
import { BellRing, Car, Building2, House, Lock, Key, Wrench, Shield } from 'lucide-react';

export const services = [{
  icon: BellRing,
  subIcons: {
    "Car Lockout": Car,
    "House Lockout": House,
    "Business Lockout": Building2,
    "Storage Unit Lockout": Lock
  },
  title: "Emergency Locksmith",
  description: "Professional emergency locksmith services by certified technicians. Licensed and insured experts available 24/7.",
  link: "/services/emergency-locksmith",
  highlight: "Available 24/7",
  cta: "Emergency Services",
  image: "/lovable-uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
  subServices: [{
    name: "Car Lockout",
    link: "/services/emergency-locksmith/car-lockout"
  }, {
    name: "House Lockout",
    link: "/services/emergency-locksmith/house-lockout"
  }, {
    name: "Business Lockout",
    link: "/services/emergency-locksmith/business-lockout"
  }, {
    name: "Storage Unit Lockout",
    link: "/services/emergency-locksmith/storage-unit-lockout"
  }]
}, {
  icon: House,
  subIcons: {
    "Lock Replacement": Lock,
    "Lock Rekey": Key,
    "Lock Repair": Wrench,
    "Gate Locks": Shield
  },
  title: "Residential Locksmith",
  description: "Professional residential locksmith services by certified technicians. Expert solutions for all your home security needs.",
  link: "/services/residential-locksmith",
  highlight: "Home Security",
  cta: "Home Security",
  image: "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//House%20Lockout.JPG",
  subServices: [{
    name: "Lock Replacement",
    link: "/services/residential-locksmith/lock-replacement"
  }, {
    name: "Lock Rekey",
    link: "/services/residential-locksmith/lock-rekey"
  }, {
    name: "Lock Repair",
    link: "/services/residential-locksmith/lock-repair"
  }, {
    name: "Gate Locks",
    link: "/services/residential-locksmith/gate-locks"
  }]
}, {
  icon: Building2,
  subIcons: {
    "Lock Replacement": Lock,
    "Master Key Systems": Key,
    "Access Control": Shield,
    "Emergency Exit Devices": Wrench
  },
  title: "Commercial Locksmith",
  description: "Professional commercial security solutions by certified technicians. Expert systems for business protection.",
  link: "/services/commercial-locksmith",
  highlight: "Business Security",
  cta: "Business Security",
  image: "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  subServices: [{
    name: "Lock Replacement",
    link: "/services/commercial-locksmith/lock-replacement"
  }, {
    name: "Master Key Systems",
    link: "/services/commercial-locksmith/master-key"
  }, {
    name: "Access Control",
    link: "/services/commercial-locksmith/access-control"
  }, {
    name: "Emergency Exit Devices",
    link: "/services/commercial-locksmith/emergency-exit-device"
  }]
}, {
  icon: Car,
  subIcons: {
    "Car Key Replacement": Key,
    "Key Fob Programming": Shield,
    "Car Key Duplicate": Wrench,
    "Ignition Repair": Wrench
  },
  title: "Auto Locksmith",
  description: "Professional automotive locksmith services by certified technicians. Expert solutions for all vehicle security needs.",
  link: "/services/auto-locksmith",
  highlight: "Mobile Service",
  cta: "Auto Services",
  image: "/lovable-uploads/88d354ba-8149-4bb1-9347-d5d0ff65dfe5.png",
  subServices: [{
    name: "Car Key Replacement",
    link: "/services/auto-locksmith/car-key-replacement"
  }, {
    name: "Key Fob Programming",
    link: "/services/auto-locksmith/key-fob-programming"
  }, {
    name: "Car Key Duplicate",
    link: "/services/auto-locksmith/car-key-duplicate"
  }, {
    name: "Ignition Repair",
    link: "/services/auto-locksmith/ignition-lock-cylinder"
  }]
}];
