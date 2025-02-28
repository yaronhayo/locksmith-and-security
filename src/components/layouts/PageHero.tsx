
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const PageHero = ({
  title,
  description,
  className,
  children,
  showBreadcrumbs = true,
}: PageHeroProps) => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-primary-100 border-b border-primary-200">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {showBreadcrumbs && <Breadcrumbs className="mb-6" />}
        
        <div className={cn("max-w-4xl mx-auto text-center", className)}>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
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
        </div>
      </div>
    </div>
  );
};

export default PageHero;
