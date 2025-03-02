import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  showBreadcrumbs?: boolean; // Keeping this prop for backward compatibility, but it will be ignored
  customBreadcrumbs?: Array<{
    name: string;
    path: string;
  }>;
}
const PageHero = ({
  title,
  description,
  className,
  children,
  showBreadcrumbs = false,
  // This will be ignored as breadcrumbs are now managed by PageLayout
  customBreadcrumbs
}: PageHeroProps) => {
  return <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-primary-50 to-primary-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/5 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Content */}
      
    </div>;
};
export default PageHero;