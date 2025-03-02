
import React from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  preselectedService?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  preselectedService
}) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-white/80 max-w-3xl">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
