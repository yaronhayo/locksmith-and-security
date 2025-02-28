
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Wrench, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LockRepair = () => {
  return (
    <main className="flex-grow">
      <EnhancedServicesHero 
        title="Professional Lock Repair Services"
        description="Expert lock repair services by our certified technicians. We diagnose and fix all types of lock issues to restore the security of your home or business."
        serviceName="Lock Repair"
        serviceLabel="Residential Locksmith Service"
      />
      
      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-secondary">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Expert Lock Repair Solutions</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p>Our professional lock repair service addresses a wide range of lock issues to restore security and functionality to your doors. Whether you're dealing with a sticky lock, broken key in lock, misaligned components, or any other lock malfunction, our skilled technicians can diagnose and resolve the problem efficiently.</p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-6 mb-4">Common Lock Problems We Fix</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Sticky or Jammed Locks:</strong> Locks that are difficult to turn or completely stuck.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Misaligned Strike Plates:</strong> Causing the door to not close or lock properly.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Broken Keys in Locks:</strong> Extracting broken key pieces and repairing any internal damage.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Worn Internal Components:</strong> Replacing worn pins, springs, and other mechanisms.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Frozen Locks:</strong> Addressing locks that have seized due to weather conditions.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Our Lock Repair Process</h3>
                  
                  <p>We follow a systematic approach to ensure thorough and effective lock repair:</p>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-primary flex items-center mb-2">
                        <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        Comprehensive Assessment
                      </h4>
                      <p className="text-gray-700 text-base">Our technician will examine your lock thoroughly to identify all issues, both obvious and hidden.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-primary flex items-center mb-2">
                        <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        Detailed Explanation
                      </h4>
                      <p className="text-gray-700 text-base">We'll explain the problems found and recommend repair options tailored to your specific situation.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-primary flex items-center mb-2">
                        <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        Precision Repair
                      </h4>
                      <p className="text-gray-700 text-base">Using specialized tools, we'll repair or replace damaged components to restore your lock's functionality.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-primary flex items-center mb-2">
                        <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        Quality Testing
                      </h4>
                      <p className="text-gray-700 text-base">We thoroughly test the repaired lock to ensure smooth operation and proper security function.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-md p-6 border border-primary/10 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Our Lock Repair Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Certified Professionals</span>
                      <span className="text-sm text-gray-600">Our technicians are fully licensed and insured</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Specialized Equipment</span>
                      <span className="text-sm text-gray-600">Professional-grade tools for precise repairs</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Fast Response</span>
                      <span className="text-sm text-gray-600">Quick service when you need it most</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Quality Guarantee</span>
                      <span className="text-sm text-gray-600">All our work is fully guaranteed</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-2 text-gray-800">Need a lock repair?</h4>
                  <p className="text-sm text-gray-600 mb-4">Our professional locksmiths are ready to help restore your lock's functionality.</p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-white" 
                      asChild
                    >
                      <a href="tel:2017482070">Call Now</a>
                    </Button>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      asChild
                    >
                      <Link to="/book-online">Book Online</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Lock Types Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Extensive Expertise</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">We Repair All Types of Locks</h2>
            <p className="text-lg text-gray-600">Our technicians are experienced in repairing a wide variety of residential and commercial lock systems</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Deadbolts", "Knob Locks", "Lever Handles", "Mortise Locks", 
              "Rim Locks", "Euro Cylinders", "Smart Locks", "Antique Locks",
              "Cabinet Locks", "Padlocks", "Sliding Door Locks", "Window Locks"
            ].map((lockType, index) => (
              <motion.div
                key={lockType}
                className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100 hover:border-secondary/30 hover:shadow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="h-12 flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary/30 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800">{lockType}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Questions & Answers</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our lock repair services</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How can I tell if my lock needs repair rather than replacement?",
                answer: "Signs that indicate repair may be sufficient include: the lock is sticking but still functions, the key turns with difficulty, the latch doesn't extend or retract properly, or the lock is misaligned with the strike plate. Our technicians can assess the condition and recommend whether repair or replacement is more appropriate."
              },
              {
                question: "Can you repair antique or vintage locks?",
                answer: "Yes, our technicians are skilled in repairing antique and vintage locks. We understand the unique mechanisms of older locks and have the specialized tools needed to work on them while preserving their historical value and aesthetic appeal."
              },
              {
                question: "What causes locks to malfunction over time?",
                answer: "Locks can malfunction due to several factors including: regular wear and tear, improper installation, weather exposure, dirt and debris accumulation, attempted break-ins, or using the wrong key. Regular maintenance can help extend the life of your locks."
              },
              {
                question: "Is it possible to repair a smart lock?",
                answer: "Yes, many smart lock issues can be repaired. Problems may be mechanical, electronic, or related to connectivity. Our technicians are trained to diagnose and repair both the mechanical and electronic components of smart locks."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-secondary/30 hover:shadow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Explore More</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">Related Residential Locksmith Services</h2>
            <p className="text-lg text-gray-600">Discover our other residential locksmith solutions that might be helpful</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lock Replacement",
                description: "Complete replacement solutions for outdated or damaged locks",
                link: "/services/residential-locksmith/lock-replacement"
              },
              {
                title: "Lock Rekey",
                description: "Change your lock's internal configuration for new keys",
                link: "/services/residential-locksmith/lock-rekey"
              },
              {
                title: "Gate Locks",
                description: "Secure your property perimeter with quality gate locks",
                link: "/services/residential-locksmith/gate-locks"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm p-6 border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full group">
                  <Link to={service.link} className="flex items-center justify-center">
                    Learn More
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ServicesProof category="residential" />
      <ServicesCTA />
    </main>
  );
};

export default LockRepair;
