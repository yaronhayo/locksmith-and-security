
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicesProof from '@/components/sections/services/ServicesProof';
import CategoryHero from '@/components/sections/services/CategoryHero';
import CategoryFeatures from '@/components/sections/services/CategoryFeatures';
import CategorySuccessStories from '@/components/sections/services/CategorySuccessStories';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import { Button } from '@/components/ui/button';
import { Car, Key, Wifi, Wrench, KeyRound, CheckCircle, ChevronRight, Phone, Scissors, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getReviewsByCategory } from '@/data/reviewsData';

const AutoLocksmithPage = () => {
  const carReviews = getReviewsByCategory('car');
  const autoStories = [{
    title: "Lost Transponder Key Replacement",
    description: "Emergency replacement of lost key for a modern vehicle with no spare.",
    challenge: "A customer had lost their only key to a 2019 Toyota Camry. The modern vehicle required a transponder key with specific programming, and the customer needed their car for work the next morning.",
    solution: "Our automotive locksmith technician arrived with the necessary equipment to cut and program a new transponder key on-site. We verified the customer's ownership, cut the key to match the vehicle's lock pattern, and programmed the transponder chip to communicate with the car's immobilizer system.",
    result: "The customer received a fully functioning replacement key without having to tow their vehicle to the dealership, saving both time and money compared to dealer prices.",
    customerName: "David L.",
    customerLocation: "Jersey City, NJ",
    date: "Last month"
  }, {
    title: "Key Fob Reprogramming After Battery Replacement",
    description: "Restoring functionality to a key fob that stopped working after battery change.",
    challenge: "A customer replaced the battery in their Honda CR-V key fob, but afterward, the remote functions stopped working completely. The customer had attempted several online DIY programming instructions without success.",
    solution: "Our technician diagnosed the issue as a programming reset that commonly occurs after power loss in certain vehicle models. Using our professional programming equipment, we restored the communication between the key fob and the vehicle's receiver.",
    result: "All remote functions were restored, allowing the customer to lock/unlock doors, open the trunk, and use the panic button. We also provided guidance on proper battery replacement procedures to avoid future issues.",
    customerName: "Michelle K.",
    customerLocation: "North Bergen, NJ",
    date: "2 months ago"
  }];

  return (
    <PageLayout 
      title="Auto Locksmith Services | Vehicle Key & Lock Solutions" 
      description="Professional automotive locksmith services for all vehicle makes and models. Car key replacement, programming, and lockout assistance." 
      heroTitle="Auto Locksmith Services" 
      heroDescription="Complete vehicle key and lock solutions. Fast, professional service for all car makes and models."
    >
      <CategoryHero 
        title="Professional Auto Locksmith Services" 
        description="Expert automotive locksmith solutions for all your vehicle key and lock needs. From emergency car lockouts to transponder key programming, we provide reliable service for virtually all makes and models." 
        category="car" 
        features={[{
          title: "All Makes & Models",
          description: "Domestic & imported vehicles"
        }, {
          title: "Advanced Equipment",
          description: "Dealer-level technology"
        }, {
          title: "Mobile Service",
          description: "We come to your location"
        }, {
          title: "Competitive Pricing",
          description: "Below dealership rates"
        }]} 
      />
      
      <div className="bg-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Car className="h-8 w-8 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-700">Auto Key & Lock Solutions</h2>
                <p className="text-gray-600">Comprehensive locksmith services for all vehicle types</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Car Key Replacement</h3>
                </div>
                <p className="text-gray-600 text-sm">Replacement keys for virtually all vehicle makes and models, including transponder keys.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Wifi className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Key Fob Programming</h3>
                </div>
                <p className="text-gray-600 text-sm">Professional programming of remote key fobs and smart keys for modern vehicles.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Car Lockouts</h3>
                </div>
                <p className="text-gray-600 text-sm">Professional vehicle unlocking services using specialized tools for damage-free entry.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Ignition Repair</h3>
                </div>
                <p className="text-gray-600 text-sm">Diagnosis and repair of ignition lock cylinders and switch problems for all vehicles.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (201) 748-2070
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CategoryFeatures 
        category="Automotive" 
        description="Our auto locksmith services cover all aspects of vehicle key and lock systems. 
          We use specialized equipment to provide fast, cost-effective solutions for modern and traditional vehicles." 
        services={[{
          title: "Car Key Replacement",
          description: "Replace lost or damaged car keys for virtually any make and model, including chip keys and transponders.",
          icon: <Key className="h-6 w-6" />,
          link: "/services/auto-locksmith/car-key-replacement"
        }, {
          title: "Key Fob Programming",
          description: "Professional programming of remote entry fobs and smart keys to communicate with your vehicle's systems.",
          icon: <Wifi className="h-6 w-6" />,
          link: "/services/auto-locksmith/key-fob-programming"
        }, {
          title: "Car Key Duplication",
          description: "Create spare keys for your vehicle, ensuring you always have a backup in case of emergencies.",
          icon: <KeyRound className="h-6 w-6" />,
          link: "/services/auto-locksmith/car-key-duplicate"
        }, {
          title: "Car Key Cutting",
          description: "Precision cutting of car keys to match your vehicle's specific lock pattern and requirements.",
          icon: <Scissors className="h-6 w-6" />,
          link: "/services/auto-locksmith/car-key-cutting"
        }, {
          title: "Ignition Lock Cylinder Repair",
          description: "Diagnosis and repair of damaged or malfunctioning ignition lock cylinders for all vehicle types.",
          icon: <Settings className="h-6 w-6" />,
          link: "/services/auto-locksmith/ignition-lock-cylinder"
        }, {
          title: "Car Lockout Service",
          description: "Professional lockout assistance for when keys are locked inside your vehicle or lost.",
          icon: <Car className="h-6 w-6" />,
          link: "/services/emergency-locksmith/car-lockout"
        }]} 
      />
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Auto Locksmith Service?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer professional automotive locksmith solutions at competitive prices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-indigo-100 flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Specialization</h3>
              <p className="text-gray-600">
                Our technicians specialize in automotive locksmith services and are trained on the latest vehicle key and lock technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dealer-Level Equipment</h3>
              <p className="text-gray-600">
                We invest in professional-grade key cutting and programming equipment that matches dealership capabilities at more affordable prices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-purple-100 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Service</h3>
              <p className="text-gray-600">
                Our mobile service brings the locksmith to you, eliminating the need for expensive towing to a dealership or shop.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CategorySuccessStories category="Auto Locksmith" stories={autoStories} />
      
      <ServicesProof reviewsData={carReviews.slice(0, 6)} category="car" />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Auto Locksmith FAQ</h2>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Can you make keys for any car model?</h3>
                <p className="text-gray-600">We can create keys for approximately 95% of vehicles on the road today, including most domestic and imported makes and models. Our equipment allows us to cut and program keys for modern vehicles with transponder systems as well as traditional mechanical keys.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Is your car key programming the same as the dealership?</h3>
                <p className="text-gray-600">Yes, we use professional-grade programming equipment that provides the same level of programming capabilities as dealerships. Our technicians are trained to program transponder chips, proximity keys, and remote fobs for virtually all vehicle makes and models.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What information do I need when calling for car key services?</h3>
                <p className="text-gray-600">To provide the most efficient service, please have your vehicle's make, model, and year ready. For key programming, your vehicle identification number (VIN) is also helpful. We'll also need to verify that you're the vehicle owner, so having your ID and vehicle registration available is important.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How much cheaper are your services compared to dealers?</h3>
                <p className="text-gray-600">Our automotive locksmith services typically cost 40-60% less than dealership prices for the same services. We provide professional results without the dealership markup, and we come to your location, saving you towing expenses as well.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Can you fix a car ignition that won't turn?</h3>
                <p className="text-gray-600">Yes, we can diagnose and repair most ignition issues. Common problems include worn keys, damaged wafers inside the lock cylinder, or steering wheel lock engagement. Our technicians can repair or replace ignition lock cylinders in most vehicles without the need for dealership service.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link to="/book-online" className="flex items-center gap-2">
                  Book Auto Locksmith Service <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ReviewsSection location="North Bergen" category="car" reviewData={carReviews} />
    </PageLayout>
  );
};

export default AutoLocksmithPage;
