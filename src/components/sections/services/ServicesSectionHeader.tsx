
import React, { memo } from 'react';
import { motion } from "framer-motion";

interface ServicesSectionHeaderProps {
  title?: string;
  description?: string;
}

const ServicesSectionHeader = memo(({ title, description }: ServicesSectionHeaderProps) => {
  if (!title && !description) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
});

ServicesSectionHeader.displayName = 'ServicesSectionHeader';

export default ServicesSectionHeader;
