
import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Wrench, Clock, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from '@/components/layouts/PageLayout';
import { keyFobProgrammingServiceSchema, keyFobProgrammingFaqSchema, keyFobProgrammingFaqs, keyFobProgrammingRelatedServices } from '@/components/services/key-fob-programming/KeyFobProgrammingSchema';

const KeyFobProgramming = () => {
  return (
    <PageLayout
      title="Key Fob Programming Service | Auto Locksmith Services"
      description="Professional key fob programming by certified technicians. Expert service for all vehicle makes and models with same-day service and fair pricing."
      schema={keyFobProgrammingServiceSchema}
      keywords="key fob programming, remote key programming, car key fob, car remote, automotive locksmith, car key programmer"
    >
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-cover opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <motion.div 
                className="lg:w-1/2 text-white mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Auto Locksmith Service
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Professional Key Fob Programming Service
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  Expert key fob programming for all vehicle makes and models. Our certified auto locksmiths provide fast, reliable service at competitive prices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-6"
                    size="lg"
                    asChild
                  >
                    <a href="tel:2017482070">Call Now</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                    size="lg"
                    asChild
                  >
                    <Link to="/book-online">Book Online</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-2/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center mb-4">
                    <Car className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Fast Response Time</h2>
                  </div>
                  <p className="text-gray-600 mb-6">Our mobile technicians arrive quickly to your location to program your key fob on the spot.</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced programming equipment for all vehicle types</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Certified and experienced auto locksmith technicians</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>30-day warranty on all key fob programming services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
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
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Key Fob Programming Services</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>At Locksmith & Security, we provide professional key fob programming services for all types of vehicles. Whether you've purchased a new key fob or need to reprogram an existing one, our skilled technicians can help.</p>
                    
                    <p>Our key fob programming service is fast, reliable, and performed by certified automotive locksmiths with years of experience in working with various vehicle makes and models.</p>
                    
                    <h3 className="text-xl font-semibold text-primary mt-6 mb-4">Why Key Fob Programming Is Important</h3>
                    
                    <p>Modern vehicles rely on electronic key fobs for security and convenience. When a key fob isn't properly programmed, it won't communicate correctly with your vehicle's onboard computer system. This can result in:</p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span>Inability to lock or unlock your vehicle remotely</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span>Push-button start features not working</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span>Security alarm system malfunctions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span>Vehicle immobilizer preventing engine start</span>
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Our Key Fob Programming Process</h3>
                    
                    <p>We follow a systematic approach to ensure your key fob is properly programmed and functioning correctly:</p>
                    
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-primary flex items-center mb-2">
                          <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            <span className="text-primary font-bold">1</span>
                          </div>
                          Vehicle Assessment
                        </h4>
                        <p className="text-gray-700 text-base">We identify your exact vehicle make, model, and year to determine the correct programming procedure.</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-primary flex items-center mb-2">
                          <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            <span className="text-primary font-bold">2</span>
                          </div>
                          Key Fob Verification
                        </h4>
                        <p className="text-gray-700 text-base">We ensure the key fob is compatible with your vehicle and in proper working condition.</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-primary flex items-center mb-2">
                          <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            <span className="text-primary font-bold">3</span>
                          </div>
                          Professional Programming
                        </h4>
                        <p className="text-gray-700 text-base">Using specialized equipment, we securely program the key fob to your vehicle's computer system.</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-primary flex items-center mb-2">
                          <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            <span className="text-primary font-bold">4</span>
                          </div>
                          Comprehensive Testing
                        </h4>
                        <p className="text-gray-700 text-base">We thoroughly test all key fob functions to ensure proper operation before we leave.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vehicle Compatibility Section */}
                <div className="bg-white rounded-xl shadow-md p-8 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Vehicle Compatibility</h3>
                  <p className="mb-6">Our key fob programming services are compatible with virtually all vehicle makes and models, including:</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", 
                      "Chrysler", "Dodge", "Ford", "GMC", "Honda", "Hyundai", 
                      "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln", "Mazda", 
                      "Mercedes-Benz", "Nissan", "Subaru", "Tesla", "Toyota", "Volkswagen"
                    ].map((brand, index) => (
                      <motion.div
                        key={brand}
                        className="bg-gray-50 p-2 rounded text-center text-gray-700 text-sm border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        viewport={{ once: true }}
                      >
                        {brand}
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="mt-4 text-sm text-gray-500">And many more! If you don't see your vehicle listed, please contact us.</p>
                </div>
                
                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-md p-8 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    {keyFobProgrammingFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    ))}
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
                  <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Our Key Fob Programming</h3>
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
                        <span className="text-sm text-gray-600">Advanced programming tools for all makes and models</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold block text-gray-800">Fast Service</span>
                        <span className="text-sm text-gray-600">Most jobs completed within 30 minutes</span>
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
                    <h4 className="font-semibold mb-2 text-gray-800">Need key fob programming?</h4>
                    <p className="text-sm text-gray-600 mb-4">Our mobile technicians come to your location to program your key fob on the spot.</p>
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
                
                {/* Related Services */}
                <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                  <h3 className="text-lg font-bold mb-4 text-primary">Related Services</h3>
                  <div className="space-y-3">
                    {keyFobProgrammingRelatedServices.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.path}
                        className="block p-3 rounded-lg border border-gray-100 hover:border-primary/20 hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Customer Reviews</span>
              <h2 className="text-3xl font-bold mt-4 mb-6 text-primary">What Our Customers Say</h2>
              <p className="text-lg text-gray-600">Hear from our satisfied customers about their key fob programming experiences</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Robert Anderson",
                  rating: 5,
                  text: "Lost my key fob and needed a replacement urgently. The technician arrived promptly, programmed a new key fob and had me back on the road in 30 minutes. Excellent service!"
                },
                {
                  name: "Jessica Martinez",
                  rating: 5,
                  text: "My key fob stopped working suddenly. Called these guys and they were able to diagnose and reprogram it the same day. Saved me from having to go to the dealership. Highly recommend!"
                },
                {
                  name: "Michael Thompson",
                  rating: 5,
                  text: "Needed an additional key fob for my new car. They provided and programmed it at a fraction of the dealership's cost. Fast, professional service right at my home."
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">Verified Customer</span>
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div className="font-medium">- {review.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Key Fob Programming?</h2>
                <p className="text-white/80">Contact our certified automotive locksmiths today!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-primary hover:bg-gray-100" 
                  size="lg"
                  asChild
                >
                  <a href="tel:2017482070">
                    Call (201) 748-2070
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  size="lg"
                  asChild
                >
                  <Link to="/book-online">
                    Book Online
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default KeyFobProgramming;
