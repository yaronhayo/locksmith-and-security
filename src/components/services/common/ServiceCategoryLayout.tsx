
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import BookingForm from '@/components/BookingForm';
import { Briefcase, Users, Clock, Check, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewsSection from '@/components/sections/ReviewsSection';
import { Link } from 'react-router-dom';
import CaseStudies, { CaseStudy } from '@/components/services/shared/CaseStudies';
import { ServiceCategory } from '@/types/reviews';

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
      {/* Hero Section with Booking Form */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 bg-secondary/90 text-white rounded-full text-sm font-medium mb-4">
                {categoryName} Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl mb-8 text-white/90">{heroSubtitle}</p>
              
              <div className="space-y-4 mb-8">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 bg-secondary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <a href="tel:2017482070" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call (201) 748-2070
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Service
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center text-sm text-white/80 mt-4 space-x-6">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>5-Star Service</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-xl p-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Request {categoryName} Service</h2>
                <p className="text-sm text-gray-600">We'll respond quickly to your request</p>
              </div>
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our {categoryName} Services</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">{description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Service-specific content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </section>
      
      {/* Case Studies / Success Stories */}
      <CaseStudies serviceType={categoryName} caseStudies={caseStudies} />
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our {categoryName.toLowerCase()} locksmith services
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <ReviewsSection category={reviewCategory} />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Professional {categoryName} Services?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experienced locksmiths is ready to help with all your {categoryName.toLowerCase()} security needs. 
              We provide fast, reliable service throughout North Bergen and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (201) 748-2070
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact" className="flex items-center gap-2">
                  Request Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceCategoryLayout;
