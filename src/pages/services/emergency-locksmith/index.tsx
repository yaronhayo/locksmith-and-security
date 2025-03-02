import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicesProof from '@/components/sections/services/ServicesProof';
import CategoryHero from '@/components/sections/services/CategoryHero';
import CategoryFeatures from '@/components/sections/services/CategoryFeatures';
import CategorySuccessStories from '@/components/sections/services/CategorySuccessStories';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import { Button } from '@/components/ui/button';
import { Clock, AlertTriangle, Car, Home, Building, Shield, KeyRound, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getReviewsByCategory } from '@/data/reviewsData';
const EmergencyLocksmithPage = () => {
  const emergencyReviews = getReviewsByCategory('emergency');
  const emergencyStories = [{
    title: "Late Night Car Lockout in North Bergen",
    description: "A customer stranded at midnight with keys locked in their vehicle.",
    challenge: "A customer called us at 1 AM after accidentally locking their keys inside their car at a shopping center parking lot. They had no spare key and needed to get home urgently.",
    solution: "Our emergency technician arrived after the call. Using specialized non-destructive entry tools, we safely unlocked the car door without causing any damage to the vehicle.",
    result: "The customer was able to get back on the road, avoiding an expensive tow and potentially unsafe situation late at night.",
    customerName: "Michael R.",
    customerLocation: "North Bergen, NJ",
    date: "Last month"
  }, {
    title: "Broken Key Extraction at 3 AM",
    description: "Emergency key extraction for a resident with a key broken in their front door lock.",
    challenge: "A customer's key broke inside their front door lock at 3 AM when returning home. Half the key was stuck in the cylinder, preventing the door from being locked or unlocked.",
    solution: "Our 24/7 emergency locksmith arrived with specialized extraction tools. We carefully removed the broken key fragment and fabricated a new key on the spot.",
    result: "The customer gained entry to their home without damaging the lock, and received two new working keys, all within an hour of calling us.",
    customerName: "Sarah T.",
    customerLocation: "Jersey City, NJ",
    date: "2 months ago"
  }];
  return <PageLayout title="24/7 Emergency Locksmith Services | Fast Response" description="Emergency locksmith services available 24/7. Fast response for lockouts, broken keys, and other urgent situations." heroTitle="24/7 Emergency Locksmith Services" heroDescription="Immediate assistance when you need it most. Our emergency locksmith team is available around the clock for professional service.">
      <CategoryHero title="24/7 Emergency Locksmith Services" description="Locked out of your car or home? Key broken in the lock? Don't panic - our emergency locksmith team is available 24 hours a day, 7 days a week to get you back in safely." category="emergency" features={[{
      title: "24/7 Availability",
      description: "We're always available"
    }, {
      title: "Professional Service",
      description: "Expert technicians"
    }, {
      title: "No Damage Entry",
      description: "We use specialized tools for safe entry"
    }, {
      title: "All Makes & Models",
      description: "Cars, homes, and businesses"
    }]} />
      
      <div className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-700">Emergency Locksmith Situations</h2>
                <p className="text-gray-600">Immediate assistance for urgent locksmith needs</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Car Lockouts</h3>
                </div>
                <p className="text-gray-600 text-sm">Locked keys in your vehicle? We'll get you back on the road.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Home Lockouts</h3>
                </div>
                <p className="text-gray-600 text-sm">Locked out of your house? We'll help you get back inside safely.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Business Lockouts</h3>
                </div>
                <p className="text-gray-600 text-sm">Can't access your business? We provide commercial assistance.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <KeyRound className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Broken Key Extraction</h3>
                </div>
                <p className="text-gray-600 text-sm">Key broken in the lock? We'll extract it without damaging your lock.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (201) 748-2070
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CategoryFeatures category="Emergency" description="Our emergency locksmith services are available 24/7 to help you in any urgent situation. 
        We specialize in rapid response and non-destructive entry techniques." services={[{
      title: "24/7 Lockout Service",
      description: "Around-the-clock assistance for car, home, and business lockouts. We're available holidays, weekends, and nights.",
      icon: <Clock className="h-6 w-6" />,
      link: "/services/emergency-locksmith/24-7-lockout-service"
    }, {
      title: "Emergency Car Lockout",
      description: "Damage-free car unlocking service for all vehicle makes and models, including high-security systems.",
      icon: <Car className="h-6 w-6" />,
      link: "/services/emergency-locksmith/car-lockout"
    }, {
      title: "Emergency House Lockout",
      description: "Professional house unlocking service using techniques that protect your door and lock from damage.",
      icon: <Home className="h-6 w-6" />,
      link: "/services/emergency-locksmith/house-lockout"
    }, {
      title: "Emergency Business Lockout",
      description: "Commercial lockout solutions for offices, retail stores, and other business properties with priority service.",
      icon: <Building className="h-6 w-6" />,
      link: "/services/emergency-locksmith/business-lockout"
    }, {
      title: "Broken Key Extraction",
      description: "Expert removal of broken keys from any lock without causing damage to the lock cylinder.",
      icon: <KeyRound className="h-6 w-6" />,
      link: "/services/emergency-locksmith/broken-key-extraction"
    }, {
      title: "Lock Repair & Replacement",
      description: "Emergency repair or replacement for damaged locks, including service for security compromised situations.",
      icon: <Shield className="h-6 w-6" />,
      link: "/services/emergency-locksmith/lock-repair-replacement"
    }]} />
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Emergency Locksmith Service?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We prioritize your security and peace of mind with reliable service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Our service is available 24 hours a day, 7 days a week, including
                holidays, weekends, and nights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                All our emergency locksmiths are fully licensed, insured, and background-checked for your safety.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-orange-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Non-Destructive Entry</h3>
              <p className="text-gray-600">
                We use specialized tools and techniques to unlock doors without causing damage to your property.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CategorySuccessStories category="Emergency Locksmith" stories={emergencyStories} />
      
      <ServicesProof reviewsData={emergencyReviews.slice(0, 6)} category="emergency" />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Emergency Locksmith FAQ</h2>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How quickly can you respond to an emergency?</h3>
                <p className="text-gray-600">We prioritize emergency calls and dispatch the nearest available technician. Our service is available 24/7 for all urgent locksmith needs.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Are your emergency services available 24/7?</h3>
                <p className="text-gray-600">Yes, our emergency locksmith services are available 24 hours a day, 7 days a week, including nights, weekends, and holidays.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Will unlocking my car door cause damage?</h3>
                <p className="text-gray-600">Our locksmiths use specialized non-destructive entry tools designed to open your car without causing damage. We're trained in the latest techniques for all vehicle makes and models.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What information do I need to provide when I call?</h3>
                <p className="text-gray-600">Please be ready to provide your location, the type of emergency (car, home, or business lockout), and any relevant details about the lock or vehicle. We may also ask for identification when we arrive.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Do you charge extra for emergency service?</h3>
                <p className="text-gray-600">Our emergency service rates are transparent. While after-hours service may have a slightly higher rate than standard business hours, we don't charge excessive "emergency fees" and always provide upfront pricing.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link to="/book-online" className="flex items-center gap-2">
                  Book Emergency Service <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      
      
      <ReviewsSection location="North Bergen" category="emergency" reviewData={emergencyReviews} />
    </PageLayout>;
};
export default EmergencyLocksmithPage;