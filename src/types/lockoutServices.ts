import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceContent {
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface ServicesData {
  [key: string]: ServiceContent;
}