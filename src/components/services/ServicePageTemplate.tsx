
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Shield, Wrench, Star, BadgeCheck, ArrowRight, CheckCircle2, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ReviewsSection from '@/components/sections/ReviewsSection';
import { ServiceCategory } from "@/types/reviews";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  category: ServiceCategory;
  location?: string;
  heroImage?: string;
  introContent: React.ReactNode;
  serviceFeatures: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  faqQuestions: {
    question: string;
    answer: React.ReactNode;
  }[];
  serviceLocations: string[];
  relatedServices: {
    title: string;
    description: string;
    link: string;
  }[];
  testimonialContent?: React.ReactNode;
  benefitsContent?: React.ReactNode;
  additionalContent?: React.ReactNode;
  ctaContent?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  category,
  location,
  heroImage,
  introContent,
  serviceFeatures,
  howItWorks,
  faqQuestions,
  serviceLocations,
  relatedServices,
  testimonialContent,
  benefitsContent,
  additionalContent,
  ctaContent
}) => {
  // Default hero image if none provided
  const defaultHeroImage = "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png";
  
  return (
    <main className="flex-grow">
      {/* Hero Section - Clean, Professional & Conversion-Focused */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content - Text & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Badge variant="secondary" className="mb-4">Professional Service • Licensed & Insured</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {title}
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                {description}
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 py-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-sm">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Certified Technicians</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="font-medium"
                >
                  <a href="tel:2017482070" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (201) 748-2070
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Link to="/book-online" className="flex items-center gap-2">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Right content - Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={heroImage || defaultHeroImage} 
                  alt={title} 
                  className="w-full h-auto object-cover"
                />
                
                {/* Quick response overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary text-primary p-2 rounded-full">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Fast Response</p>
                      <p className="text-sm text-white/80">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Intro Content Section - SEO Rich */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* This is where detailed service description goes for SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {introContent}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Features - Card Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our professional technicians provide reliable, expert service with your security and safety as our top priority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works - Process Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple process ensures you receive efficient, professional service when you need it most.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-6 mb-10"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mid-page CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Need assistance now?</h3>
              <p className="text-white/80 mt-1">Our technicians are ready to help you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="font-medium"
              >
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (201) 748-2070
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Link to="/book-online">
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Content */}
      {benefitsContent && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {benefitsContent}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Testimonial Section */}
      {testimonialContent ? (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {testimonialContent}
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read reviews from our satisfied customers.
              </p>
            </div>
            
            <div className="mt-10">
              <ReviewsSection category={category} location={location} />
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`faq-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600 bg-gray-50/50">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Service Locations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our service is available throughout these areas in New Jersey.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Service Locations</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceLocations.map((location, index) => (
                    <div 
                      key={index}
                      className="flex items-center"
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Additional Content */}
      {additionalContent && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {additionalContent}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore other services that might interest you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="pt-2 border-t border-gray-100">
                      <Link 
                        to={service.link} 
                        className="text-primary hover:text-primary-hover font-medium flex items-center gap-1"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          {ctaContent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {ctaContent}
            </motion.div>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Help?</h2>
              <p className="text-xl text-white/90 mb-8">
                Our expert technicians are available to provide professional service. Contact us now.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="font-medium"
                >
                  <a href="tel:2017482070" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (201) 748-2070
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Link to="/book-online" className="flex items-center gap-2">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-white font-medium">Licensed & Insured Professionals</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ServicePageTemplate;
