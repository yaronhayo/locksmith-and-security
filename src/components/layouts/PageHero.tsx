
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  showBreadcrumbs?: boolean;
  customBreadcrumbs?: Array<{name: string, path: string}>;
}

const PageHero = ({
  title,
  description,
  className,
  children,
  showBreadcrumbs = false, // Default to false to prevent duplication
  customBreadcrumbs,
}: PageHeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-primary-50 to-primary-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/5 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        {/* No breadcrumbs rendering here to prevent duplication */}
        
        <div className={cn("max-w-4xl mx-auto text-center", className)}>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}

          {/* Decorative dots */}
          <div className="flex justify-center mt-12 space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary/60"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary/30"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
