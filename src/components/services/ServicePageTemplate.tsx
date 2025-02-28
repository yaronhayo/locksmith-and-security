
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
      {/* Hero Section - Redesigned for high conversion */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-hover">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/website-uploads/pattern-bg.png')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="absolute top-28 right-20 w-48 h-48 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-28 left-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left content - Call to action */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Badge variant="secondary" className="animate-pulse">24/7 Service</Badge>
                <span className="text-white/90 text-sm">Licensed & Insured Professionals</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                {title}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                {description}
              </p>
              
              {/* Highlighted CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <a href="tel:2017482070" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now: (201) 748-2070
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="bg-white text-primary border-white hover:bg-white/90 font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Link to="/book-online" className="flex items-center gap-2">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-white/90">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-secondary" />
                  <span>5-Star Service</span>
                </div>
              </div>
              
              {/* Social proof */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <img src="/website-uploads/avatar-1.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/website-uploads/avatar-2.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/website-uploads/avatar-3.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="text-white text-sm">
                  <p className="font-medium">Trusted by 1,000+ customers</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right content - Hero image with overlay */}
            <motion.div 
              className="w-full lg:w-5/12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                {/* Service highlights banner */}
                <div className="absolute -top-4 -left-4 z-20 bg-secondary text-primary font-bold py-2 px-4 rounded-lg shadow-lg transform -rotate-3">
                  Fast Response
                </div>
                
                {/* Main image with frame */}
                <div className="relative rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={heroImage || defaultHeroImage} 
                    alt={title} 
                    className="w-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  
                  {/* Urgent action overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Headphones className="h-6 w-6 animate-pulse" />
                        <span className="font-bold">Need Help Now?</span>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm" 
                        asChild 
                        className="bg-primary hover:bg-primary-hover text-white"
                      >
                        <a href="tel:2017482070">Call (201) 748-2070</a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Emergency response time badge */}
                <div className="absolute -bottom-5 -right-5 bg-white text-primary font-bold py-3 px-5 rounded-full shadow-lg z-20 flex items-center gap-2 border-2 border-secondary">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>Quick Response</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,58.7C840,75,960,85,1080,80C1200,75,1320,53,1380,42.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Key benefits highlight */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">24/7 Service</h3>
              <p className="text-sm text-gray-600">Always available</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">Trustworthy service</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Expert Technicians</h3>
              <p className="text-sm text-gray-600">Highly trained pros</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">5-Star Service</h3>
              <p className="text-sm text-gray-600">Consistently rated 5 stars</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
      
      {/* Service Features - Card Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Professional Service</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Service</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
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
                <Card className="h-full border border-gray-200 hover:border-secondary hover:shadow-xl transition-all cursor-default overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:bg-secondary transition-colors"></div>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
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
      
      {/* CTA Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Need Immediate Assistance?</h3>
              <p className="text-white/80 mt-2">Our locksmiths are standing by to help you right now</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="font-medium text-primary"
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
        </div>
      </section>
      
      {/* How It Works - Process Steps */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              {/* Process connector line */}
              <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 hidden md:block"></div>
              
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-[44px] h-[44px] rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg z-10 border-4 border-white">
                    {index + 1}
                  </div>
                  
                  {/* Step content */}
                  <div className={`flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100 md:max-w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Content */}
      {benefitsContent && (
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Customer Feedback</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>
            
            <div className="mt-12">
              <ReviewsSection category={category} location={location} />
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section - Redesigned */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Questions & Answers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
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
                  <AccordionItem value={`faq-${index}`} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
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
      
      {/* Service Locations - Redesigned */}
      <section className="py-16 bg-gray-50/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Service Coverage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Areas We Serve</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-primary text-white p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Service Locations</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-lg text-gray-800 mb-6">
                  Our {title} service is available throughout New Jersey, with specialized coverage in the following areas:
                </p>
                
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
        <section className="py-16 bg-white">
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
      
      {/* Related Services - Card Grid */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Explore More</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Related Services</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
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
                <Card className="h-full border border-gray-200 hover:border-secondary hover:shadow-xl transition-all group overflow-hidden">
                  <div className="h-2 bg-primary group-hover:bg-secondary transition-colors"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="pt-2 border-t border-gray-100">
                      <Link 
                        to={service.link} 
                        className="text-primary hover:text-primary-hover font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
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
      
      {/* Final CTA Section - High Contrast for Conversion */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[10%] w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-white/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-1">Expert Service</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Professional {title}?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Our expert technicians are standing by 24/7 to provide fast, professional service.
                Call now or book online to get immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <a href="tel:2017482070" className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call Now: (201) 748-2070
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="bg-white text-primary border-white hover:bg-white/90 font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Link to="/book-online" className="flex items-center justify-center gap-3">
                    Book Online
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-white font-medium">100% Satisfaction Guaranteed</span>
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
