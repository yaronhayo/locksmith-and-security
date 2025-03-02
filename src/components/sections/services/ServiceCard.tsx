
import React, { memo } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ui/responsive-image";

interface SubService {
  name: string;
  link: string;
}

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    subIcons: Record<string, React.ElementType>;
    title: string;
    description: string;
    link: string;
    highlight: string;
    cta: string;
    image?: string;
    subServices: SubService[];
  };
  index: number;
}

const ServiceCard = memo(({ service, index }: ServiceCardProps) => {
  const { icon: Icon, title, description, highlight, image, cta, link, subServices, subIcons } = service;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="relative h-full overflow-hidden border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          {image && (
            <div className="h-40 overflow-hidden">
              <ResponsiveImage
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}
          <div className="p-6 pb-4 flex flex-col items-center text-center">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {highlight}
              </span>
            </div>
            
            <Icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6">{description}</p>
          </div>

          <div className="bg-gray-50 p-6 pt-4 flex flex-col items-center">
            <div className="space-y-2 mb-6 w-full">
              {subServices.map((subService, subIndex) => {
                const SubIcon = subIcons[subService.name as keyof typeof subIcons];
                return (
                  <div key={subIndex} className="flex items-center justify-center">
                    <Link to={subService.link} className="flex items-center text-sm text-gray-600 py-1.5 hover:text-primary relative">
                      {SubIcon && <SubIcon className="w-4 h-4 mr-2 text-primary/70" />}
                      <span className="relative inline-block">
                        {subService.name}
                        <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-primary transition-all duration-300 hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="inline-block">
              <Link to={link} className="inline-flex items-center px-4 py-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white hover:text-black rounded-md font-medium transition-colors">
                {cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
