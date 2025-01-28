import { Clock, Phone, Shield } from 'lucide-react';
import { Area, Feature } from '@/components/sections/service-areas/types';

export const serviceAreas: Area[] = [
  {
    name: "North Bergen",
    slug: "north-bergen",
    description: "Professional locksmith services in North Bergen, NJ",
    lat: 40.7828,
    lng: -74.0297
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    description: "Expert locksmith solutions in Jersey City, NJ",
    lat: 40.7282,
    lng: -74.0776
  },
  {
    name: "Union City",
    slug: "union-city",
    description: "Reliable locksmith services in Union City, NJ",
    lat: 40.7795,
    lng: -74.0246
  },
  {
    name: "West New York",
    slug: "west-new-york",
    description: "Trusted locksmith services in West New York, NJ",
    lat: 40.7857,
    lng: -74.0143
  },
  {
    name: "Secaucus",
    slug: "secaucus",
    description: "Professional locksmith services in Secaucus, NJ",
    lat: 40.7799,
    lng: -74.0566
  },
  {
    name: "Weehawken",
    slug: "weehawken",
    description: "Expert locksmith solutions in Weehawken, NJ",
    lat: 40.7684,
    lng: -74.0287
  },
  {
    name: "Hoboken",
    slug: "hoboken",
    description: "Reliable locksmith services in Hoboken, NJ",
    lat: 40.7453,
    lng: -74.0279
  },
  {
    name: "Guttenberg",
    slug: "guttenberg",
    description: "Trusted locksmith services in Guttenberg, NJ",
    lat: 40.7920,
    lng: -74.0037
  }
];

export const features: Feature[] = [
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
    description: "15-30 minute response time throughout our service areas"
  }
];