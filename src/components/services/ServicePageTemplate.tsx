
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Shield, Tool, Star, BadgeCheck, ArrowRight } from "lucide-react";
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
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5"></div>
          <div className="absolute top-20 left-1/3 w-4 h-4 rounded-full bg-secondary/70"></div>
          <div className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-secondary/70"></div>
          <div className="absolute bottom-20 left-1/4 w-5 h-5 rounded-full bg-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-7/12 space-y-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1 text-primary font-medium">Professional Locksmith Service</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
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
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
                >
                  <Link to="/book-online" className="flex items-center gap-2">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 pt-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-secondary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>Trusted Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span>4.9 Star Rated Service</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-5/12 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={heroImage || defaultHeroImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Intro Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {introContent}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Our Professional Approach</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Service</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all">
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
      
      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Our Process</Badge>
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-10"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
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
      
      {/* Benefits Content */}
      {benefitsContent && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Customer Testimonials</Badge>
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
            </div>
            
            <div className="mt-12">
              <ReviewsSection category={category} location={location} />
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Common Questions</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
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
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Service Coverage</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Areas We Serve</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-800">
                    Our {title} service is available throughout New Jersey, with specialized coverage in the following areas:
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                  {serviceLocations.map((location, index) => (
                    <div 
                      key={index}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
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
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Explore More</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Related Services</h2>
            <Separator className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      to={service.link} 
                      className="text-primary hover:text-primary-hover font-medium flex items-center gap-1"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4 md:px-6">
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
              <h2 className="text-3xl font-bold mb-6">Need Professional {title}?</h2>
              <p className="text-xl text-white/90 mb-8">
                Our expert technicians are available 24/7 to assist you with all your locksmith needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
                >
                  <Link to="/book-online" className="flex items-center gap-2">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ServicePageTemplate;
