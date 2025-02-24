import { Clock, Shield, Phone } from 'lucide-react';
import { ServiceAreaFeature, ServiceAreaLocation } from './types';

export const serviceAreaFeatures: ServiceAreaFeature[] = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency locksmith services available around the clock in all service areas"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Professional locksmith services backed by full insurance coverage"
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "Emergency response throughout our service areas"
  }
];

export const serviceAreaLocations: ServiceAreaLocation[] = [
  {
    name: "North Bergen",
    slug: "north-bergen",
    description: "Professional locksmith services in North Bergen, NJ",
    lat: 40.7828,
    lng: -74.0297,
    title: "North Bergen Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    description: "Expert locksmith solutions in Jersey City, NJ",
    lat: 40.7282,
    lng: -74.0776,
    title: "Jersey City Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Union City",
    slug: "union-city",
    description: "Reliable locksmith services in Union City, NJ",
    lat: 40.7795,
    lng: -74.0246,
    title: "Union City Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "West New York",
    slug: "west-new-york",
    description: "Trusted locksmith services in West New York, NJ",
    lat: 40.7857,
    lng: -74.0143,
    title: "West New York Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Secaucus",
    slug: "secaucus",
    description: "Professional locksmith services in Secaucus, NJ",
    lat: 40.7799,
    lng: -74.0566,
    title: "Secaucus Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Weehawken",
    slug: "weehawken",
    description: "Expert locksmith solutions in Weehawken, NJ",
    lat: 40.7684,
    lng: -74.0287,
    title: "Weehawken Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Hoboken",
    slug: "hoboken",
    description: "Reliable locksmith services in Hoboken, NJ",
    lat: 40.7453,
    lng: -74.0279,
    title: "Hoboken Locksmith Services | 24/7 Emergency Service"
  },
  {
    name: "Guttenberg",
    slug: "guttenberg",
    description: "Trusted locksmith services in Guttenberg, NJ",
    lat: 40.7920,
    lng: -74.0037,
    title: "Guttenberg Locksmith Services | 24/7 Emergency Service"
  }
];
