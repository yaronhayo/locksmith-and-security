
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ReviewsSection from '@/components/sections/ReviewsSection';
import { ServiceCategory } from '@/types/reviews';
import HeroSection from '../shared/HeroSection';
import FeaturesSection from '../shared/FeaturesSection';
import FaqSection from '../shared/FAQSection';
import CTASection from '../shared/CTASection';
import CaseStudies, { CaseStudy } from '../shared/CaseStudies';

interface ServiceCategoryFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  heroSubtitle: string;
  categoryName: string;
  keyPoints: string[];
  features: ServiceCategoryFeature[];
  faqs: { question: string; answer: string }[];
  reviewCategory: ServiceCategory;
  caseStudies: CaseStudy[];
  children?: React.ReactNode;
  keywords?: string;
}

const ServiceCategoryLayout: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  heroSubtitle,
  categoryName,
  keyPoints,
  features,
  faqs,
  reviewCategory,
  caseStudies,
  children,
  keywords
}) => {
  return (
    <PageLayout
      title={title}
      description={description}
      keywords={keywords}
      hideBreadcrumbs={false}
    >
      {/* Hero Section */}
      <HeroSection 
        title={title}
        heroSubtitle={heroSubtitle}
        categoryName={categoryName}
        keyPoints={keyPoints}
      />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our {categoryName} Services</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">{description}</p>
            </div>
          </div>
          
          {/* Features Grid */}
          <FeaturesSection features={features} />
          
          {/* Service-specific content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </section>
      
      {/* Case Studies / Success Stories */}
      <CaseStudies serviceType={categoryName} caseStudies={caseStudies} />
      
      {/* FAQs Section */}
      <FaqSection faqs={faqs} />
      
      {/* Reviews Section */}
      <ReviewsSection category={reviewCategory} />
      
      {/* CTA Section */}
      <CTASection categoryName={categoryName} />
    </PageLayout>
  );
};

export default ServiceCategoryLayout;
