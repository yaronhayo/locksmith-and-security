
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Key, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CarKeyDuplicate = () => {
  return (
    <main className="flex-grow">
      <EnhancedServicesHero 
        title="Professional Car Key Duplication Services"
        description="Expert car key duplication services for all vehicle makes and models. Our professional locksmiths use advanced technology to create precise, reliable duplicate car keys."
        serviceName="Car Key Duplication"
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Expert Car Key Duplication Services</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p>Our professional key duplication service provides reliable, high-quality duplicate car keys for all vehicle makes and models. Whether you need a spare key for emergencies or want to replace a worn-out key, our expert locksmiths have the skills and equipment to help.</p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-6 mb-4">Why Duplicate Your Car Keys?</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Emergency Backup:</strong> Having a spare key can save you from expensive emergency locksmith calls if you lose your primary key.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Convenience:</strong> Additional keys for family members who share the vehicle.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Peace of Mind:</strong> Knowing you have a backup key provides security and reduces stress.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Wear and Tear:</strong> Replace worn keys before they break and leave you stranded.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Our Car Key Duplication Process</h3>
                  
                  <p>Using state-of-the-art key cutting equipment and programming tools, our technicians can duplicate virtually any type of car key, including:</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Basic mechanical keys
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Transponder keys
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Remote key fobs
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Smart keys
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Proximity keys
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Laser-cut keys
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
                <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Our Key Duplication Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Certified Professionals</span>
                      <span className="text-sm text-gray-600">Our technicians are fully certified and trained</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Advanced Equipment</span>
                      <span className="text-sm text-gray-600">Latest key cutting and programming technology</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Quick Service</span>
                      <span className="text-sm text-gray-600">Efficient service to get you back on the road</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block text-gray-800">Guaranteed Quality</span>
                      <span className="text-sm text-gray-600">All our duplicate keys are fully tested</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-2 text-gray-800">Need a duplicate car key?</h4>
                  <p className="text-sm text-gray-600 mb-4">Our professional locksmiths are ready to help you with any car key duplication needs.</p>
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
      
      {/* Vehicle Compatibility Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">All Makes & Models</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">We Duplicate Keys for All Vehicle Types</h2>
            <p className="text-lg text-gray-600">Our key duplication services cover a wide range of vehicles, from domestic to foreign makes, and from standard to luxury models.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", 
              "Mercedes", "Audi", "Volkswagen", "Hyundai", "Kia", "Subaru"
            ].map((brand, index) => (
              <motion.div
                key={brand}
                className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100 hover:border-secondary/30 hover:shadow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="h-12 flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary/30 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800">{brand}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-center mt-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Don't see your vehicle listed? Don't worry! Our technicians are trained to work with virtually all vehicle makes and models. Contact us to discuss your specific car key duplication needs.
          </motion.p>
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
            <p className="text-lg text-gray-600">Find answers to common questions about our car key duplication services</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What information do I need to provide for car key duplication?",
                answer: "To duplicate your car key, we'll need information about your vehicle make, model, and year. Having your vehicle identification number (VIN) is also helpful. For transponder keys, you'll need to bring your original key for programming purposes."
              },
              {
                question: "How long does car key duplication take?",
                answer: "The time required depends on your key type. Basic mechanical keys typically take 5-10 minutes, while transponder keys or smart keys may require 20-30 minutes for cutting and programming."
              },
              {
                question: "Can you duplicate a key if I've lost all my original keys?",
                answer: "Yes, we can create new keys even if you've lost all your originals. This process may take longer and require additional verification to ensure security."
              },
              {
                question: "Do you duplicate keys for older vehicle models?",
                answer: "Yes, we can duplicate keys for both newer and older vehicle models. Our technicians have experience with a wide range of vehicles and key types."
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
                title: "Car Key Replacement",
                description: "Complete replacement solutions for lost or damaged car keys",
                link: "/services/auto-locksmith/car-key-replacement"
              },
              {
                title: "Key Fob Programming",
                description: "Expert programming for remote key fobs and smart keys",
                link: "/services/auto-locksmith/key-fob-programming"
              },
              {
                title: "Car Key Cutting",
                description: "Precision cutting services for all types of car keys",
                link: "/services/auto-locksmith/car-key-cutting"
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

export default CarKeyDuplicate;
