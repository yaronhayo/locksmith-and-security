
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicesProof from '@/components/sections/services/ServicesProof';
import CategoryHero from '@/components/sections/services/CategoryHero';
import CategoryFeatures from '@/components/sections/services/CategoryFeatures';
import CategorySuccessStories from '@/components/sections/services/CategorySuccessStories';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import { Button } from '@/components/ui/button';
import { Home, Key, Lock, Shield, Tool, KeyRound, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getReviewsByCategory } from '@/data/reviewsData';

const ResidentialLocksmithPage = () => {
  const residentialReviews = getReviewsByCategory('residential');
  const residentialStories = [{
    title: "Complete Home Rekeying After Move-In",
    description: "New homeowners needing all locks rekeyed for security.",
    challenge: "A family had just purchased a new home and was concerned about previous owners or contractors potentially having access to their property. They needed all locks rekeyed quickly before moving in their belongings.",
    solution: "Our residential locksmith team performed a comprehensive rekeying of all external doors, including the front door, back door, side entrance, and garage access. We created a new master key system that allowed them to use a single key for all entries.",
    result: "The family gained peace of mind knowing their new home was secure before moving in, with convenient access using a simplified key system.",
    customerName: "Thomas K.",
    customerLocation: "Hoboken, NJ",
    date: "Last month"
  }, {
    title: "Smart Lock Installation for Busy Family",
    description: "Multiple entry solution for family members with varying schedules.",
    challenge: "A household with teenagers, working parents, and occasional visitors needed a more flexible solution than traditional keys, which were frequently forgotten or misplaced.",
    solution: "We installed a smart lock system with keypad entry and smartphone control, allowing individual codes for family members and temporary access codes for visitors or service providers.",
    result: "The family eliminated lockouts completely and gained the ability to monitor who enters their home and when, plus the convenience of remotely locking/unlocking doors when needed.",
    customerName: "Jennifer M.",
    customerLocation: "Jersey City, NJ",
    date: "2 months ago"
  }];

  return (
    <PageLayout 
      title="Residential Locksmith Services | Home Security Solutions" 
      description="Expert residential locksmith services for your home. Lock installation, repair, rekeying, and security upgrades for optimal protection." 
      heroTitle="Residential Locksmith Services" 
      heroDescription="Complete home security solutions from trusted local locksmiths. Protect what matters most with our professional services."
    >
      <CategoryHero 
        title="Professional Residential Locksmith Services" 
        description="Secure your home with our comprehensive residential locksmith services. From standard lock installation to advanced security upgrades, we ensure your family and property are well-protected." 
        category="residential" 
        features={[{
          title: "Expert Technicians",
          description: "Certified locksmiths"
        }, {
          title: "Quality Hardware",
          description: "Premium security products"
        }, {
          title: "Warranty Protection",
          description: "Guaranteed workmanship"
        }, {
          title: "Comprehensive Solutions",
          description: "Complete home security"
        }]} 
      />
      
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-700">Home Security Solutions</h2>
                <p className="text-gray-600">Comprehensive locksmith services for your entire home</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Lock Installation</h3>
                </div>
                <p className="text-gray-600 text-sm">Professional installation of all types of residential locks for optimal security.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Lock Rekeying</h3>
                </div>
                <p className="text-gray-600 text-sm">Change your lock's internal pins to work with new keys, rendering old ones useless.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Tool className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Lock Repair</h3>
                </div>
                <p className="text-gray-600 text-sm">Fix malfunctioning locks to restore security and proper function to your doors.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Security Upgrades</h3>
                </div>
                <p className="text-gray-600 text-sm">Enhance your home's protection with modern security hardware and systems.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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
        category="Residential" 
        description="Our residential locksmith services are designed to meet all your home security needs. 
          We offer comprehensive solutions for all types of locks and security systems." 
        services={[{
          title: "Lock Installation",
          description: "Professional installation of high-quality locks for all doors in your home, ensuring optimal security and proper function.",
          icon: <Lock className="h-6 w-6" />,
          link: "/services/residential-locksmith/lock-installation"
        }, {
          title: "Lock Replacement",
          description: "Complete replacement of outdated or damaged locks with modern, more secure alternatives for enhanced protection.",
          icon: <KeyRound className="h-6 w-6" />,
          link: "/services/residential-locksmith/lock-replacement"
        }, {
          title: "Lock Rekeying",
          description: "Change your lock's internal mechanism to work with new keys, invalidating old ones without replacing the entire lock.",
          icon: <Key className="h-6 w-6" />,
          link: "/services/residential-locksmith/lock-rekey"
        }, {
          title: "Lock Repair",
          description: "Expert diagnosis and repair of malfunctioning locks, restoring security and function to your doors.",
          icon: <Tool className="h-6 w-6" />,
          link: "/services/residential-locksmith/lock-repair"
        }, {
          title: "High-Security Locks",
          description: "Installation of advanced security locks that offer superior protection against picking, bumping, and other intrusion methods.",
          icon: <Shield className="h-6 w-6" />,
          link: "/services/residential-locksmith/high-security-locks"
        }, {
          title: "Smart Lock Installation",
          description: "Professional setup of electronic and smart locks that offer keyless entry, remote access, and enhanced security features.",
          icon: <Home className="h-6 w-6" />,
          link: "/services/residential-locksmith/smart-locks"
        }]} 
      />
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Residential Locksmith Service?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We prioritize your home's security with reliable, professional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Superior Security</h3>
              <p className="text-gray-600">
                We offer only high-quality, durable security products from trusted manufacturers, ensuring your home is properly protected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                All our residential locksmiths are fully licensed, insured, and background-checked for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-orange-100 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Security Expertise</h3>
              <p className="text-gray-600">
                Our specialists can assess your property and recommend the optimal security solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CategorySuccessStories category="Residential Locksmith" stories={residentialStories} />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 6)} category="residential" />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Residential Locksmith FAQ</h2>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How often should I change or rekey my home locks?</h3>
                <p className="text-gray-600">It's recommended to change or rekey your locks when moving into a new home, after a break-in attempt, if keys are lost or stolen, or if you've given keys to someone who no longer needs access. As a general practice, considering a security update every 5-7 years is advisable.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What's the difference between rekeying and replacing a lock?</h3>
                <p className="text-gray-600">Rekeying changes the internal pins of your existing lock so it works with a new key, while replacing involves installing an entirely new lock. Rekeying is usually more cost-effective when the lock is in good condition, while replacement is better for upgrading security or when locks are damaged or outdated.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Are smart locks as secure as traditional locks?</h3>
                <p className="text-gray-600">Quality smart locks can be as secure as traditional locks and offer additional security features like access logs and remote control. However, they should be properly installed by professionals and secured against digital vulnerabilities. We can help you select the right smart lock for your security needs.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What identification will I need to show for residential locksmith services?</h3>
                <p className="text-gray-600">For security purposes, we require proof of residence or ownership when providing residential locksmith services. This can include a valid ID with your address, a utility bill, property deed, or lease agreement.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Can you match existing keys for additional doors?</h3>
                <p className="text-gray-600">Yes, we can rekey multiple locks to work with a single key, saving you the inconvenience of carrying multiple keys. This service is popular for homeowners wanting to simplify their home access system.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link to="/book-online" className="flex items-center gap-2">
                  Book Residential Service <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ReviewsSection location="North Bergen" category="residential" reviewData={residentialReviews} />
    </PageLayout>
  );
};

export default ResidentialLocksmithPage;
