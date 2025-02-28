
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Key, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CarKeyCutting = () => {
  return (
    <main className="flex-grow">
      <EnhancedServicesHero 
        title="Professional Car Key Cutting Services"
        description="Expert car key cutting services for all vehicle makes and models. Our professional locksmiths use precision equipment to create accurate, reliable car keys."
        serviceName="Car Key Cutting"
        serviceLabel="Auto Locksmith Service"
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Expert Car Key Cutting Solutions</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p>Our professional key cutting service provides precise, high-quality car keys for all vehicle makes and models. Whether you need a replacement for a lost key or simply want a spare key for convenience, our experienced locksmiths have the advanced equipment and expertise to deliver accurate results.</p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-6 mb-4">Types of Car Keys We Cut</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-primary/5 to-white p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold flex items-center text-primary">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        Basic Mechanical Keys
                      </h4>
                      <p className="text-gray-700 text-base mt-2">Standard metal keys without electronic components, common in older vehicles.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-white p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold flex items-center text-primary">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        Laser-Cut Keys
                      </h4>
                      <p className="text-gray-700 text-base mt-2">Precision-cut keys with distinctive patterns, offering enhanced security.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-white p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold flex items-center text-primary">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        Transponder Keys
                      </h4>
                      <p className="text-gray-700 text-base mt-2">Keys with embedded microchips that communicate with your vehicle's immobilizer system.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-white p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold flex items-center text-primary">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        Remote Head Keys
                      </h4>
                      <p className="text-gray-700 text-base mt-2">Combined traditional key with remote functions like lock/unlock in a single unit.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Our Key Cutting Process</h3>
                  
                  <p>We follow a meticulous process to ensure your new car keys work perfectly:</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Key Identification:</strong> We identify the exact key type required for your specific vehicle.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Precision Cutting:</strong> Using computerized key cutting machines for accurate results.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Quality Inspection:</strong> Checking for perfect edges and proper dimensions.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Testing:</strong> Verifying the key works smoothly in your vehicle's locks.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Programming (if needed):</strong> For transponder or smart keys, we program the electronic components.</span>
                    </li>
                  </ul>
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
                <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Our Key Cutting Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Certified Professionals</span>
                      <span className="text-sm text-gray-600">Experienced locksmiths with specialized training</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Advanced Equipment</span>
                      <span className="text-sm text-gray-600">State-of-the-art key cutting technology</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Efficient Service</span>
                      <span className="text-sm text-gray-600">Quick turnaround without sacrificing quality</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Quality Guarantee</span>
                      <span className="text-sm text-gray-600">All keys are tested and guaranteed to work</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-2 text-gray-800">Need a car key cut?</h4>
                  <p className="text-sm text-gray-600 mb-4">Our professional locksmiths are ready to help with precise key cutting services.</p>
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
      
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Benefits</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">Advantages of Professional Key Cutting</h2>
            <p className="text-lg text-gray-600">Discover why choosing a professional locksmith for car key cutting is the superior option</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Precision & Accuracy",
                description: "Our professional equipment produces keys with exact measurements for perfect operation."
              },
              {
                title: "One-Stop Solution",
                description: "We handle both physical cutting and electronic programming for modern vehicle keys."
              },
              {
                title: "Cost-Effective",
                description: "Save money compared to dealership prices while getting the same quality and reliability."
              },
              {
                title: "Mobile Service",
                description: "We bring our key cutting equipment to your location for maximum convenience."
              },
              {
                title: "Extensive Experience",
                description: "Our technicians have cut keys for virtually every vehicle make and model."
              },
              {
                title: "Quality Materials",
                description: "We use only high-quality blank keys for durability and long-lasting performance."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-primary/5 rounded-xl shadow-sm p-6 border border-primary/10 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="h-10 w-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            <p className="text-lg text-gray-600">Find answers to common questions about our car key cutting services</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What information do I need to provide for car key cutting?",
                answer: "To cut a car key, we typically need your vehicle's make, model, year, and VIN (Vehicle Identification Number). If you have an existing key, bringing it along can help ensure accuracy, even if it's damaged."
              },
              {
                question: "Can you cut high-security or laser-cut keys?",
                answer: "Yes, our technicians use advanced computerized equipment that can accurately cut high-security and laser-cut keys with precise measurements to ensure proper function."
              },
              {
                question: "How long does car key cutting take?",
                answer: "Basic mechanical key cutting typically takes 5-15 minutes. For more complex keys requiring programming (like transponder keys or smart keys), the process may take 20-40 minutes total."
              },
              {
                question: "Can you cut a car key if I've lost all my original keys?",
                answer: "Yes, we can cut new keys even without an original. We'll need your vehicle information and proof of ownership. The process involves creating a new key based on your vehicle's key code."
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
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">Related Auto Locksmith Services</h2>
            <p className="text-lg text-gray-600">Discover our other automotive locksmith solutions that might be helpful</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Car Key Duplication",
                description: "Get spare keys made from your existing car keys",
                link: "/services/auto-locksmith/car-key-duplicate"
              },
              {
                title: "Car Key Replacement",
                description: "Complete replacement for lost or damaged car keys",
                link: "/services/auto-locksmith/car-key-replacement"
              },
              {
                title: "Key Fob Programming",
                description: "Expert programming for remote key fobs and smart keys",
                link: "/services/auto-locksmith/key-fob-programming"
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
      
      <ServicesProof category="car" />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyCutting;
