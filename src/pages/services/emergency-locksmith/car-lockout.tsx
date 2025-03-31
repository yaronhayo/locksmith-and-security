import React from 'react';
import { Metadata } from 'next';
import CarLockoutHero from '@/components/sections/CarLockoutHero';
import EmergencyCallout from '@/components/services/car-lockout/EmergencyCallout';
import ServiceTrustBadges from '@/components/sections/services/service-page/ServiceTrustBadges';
import ServiceFAQSection from '@/components/sections/services/service-page/ServiceFAQSection';
import ServiceMainContent from '@/components/sections/services/service-page/ServiceMainContent';

export const metadata: Metadata = {
  title: "Car Lockout Service - 24/7 Emergency Assistance",
  description: "Need car lockout service? Our expert locksmiths provide 24/7 emergency assistance. Fast, reliable, and professional service to get you back on the road.",
  openGraph: {
    title: "Car Lockout Service - 24/7 Emergency Assistance",
    description: "Need car lockout service? Our expert locksmiths provide 24/7 emergency assistance. Fast, reliable, and professional service to get you back on the road.",
    url: '/services/emergency-locksmith/car-lockout',
    siteName: '24/7 Locksmith & Security',
    images: [
      {
        url: '/website-uploads/carkey.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Car Lockout Service'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Car Lockout Service - 24/7 Emergency Assistance",
    description: "Need car lockout service? Our expert locksmiths provide 24/7 emergency assistance. Fast, reliable, and professional service to get you back on the road.",
    images: ['/website-uploads/carkey.jpg'], // Replace with your actual image URL
  },
  canonical: '/services/emergency-locksmith/car-lockout',
};

const CarLockoutServicePage: React.FC = () => {
  const faqs = [
    {
      question: "What should I do if I'm locked out of my car?",
      answer: "Stay calm and assess your situation. If you're in a safe location, call us for immediate assistance. Do not try to break into your car, as this could cause damage and be more costly."
    },
    {
      question: "How quickly can you get to me?",
      answer: "Our average response time is 15-30 minutes, depending on your location and traffic conditions. We prioritize emergency lockout situations to get you back on the road as soon as possible."
    },
    {
      question: "Will your service damage my car?",
      answer: "No, our professional locksmiths use specialized tools and techniques to unlock your car without causing any damage to the locks, windows, or other components."
    },
    {
      question: "What types of vehicles can you unlock?",
      answer: "We can unlock virtually any vehicle, including cars, trucks, vans, and SUVs. Our locksmiths are trained and equipped to handle both standard and high-security locking systems."
    },
    {
      question: "What information do I need to provide when I call?",
      answer: "Please provide your location, the make and model of your car, and proof of ownership (such as your driver's license and registration). This helps us verify that you are authorized to access the vehicle."
    },
    {
      question: "Are your locksmiths licensed and insured?",
      answer: "Yes, all our locksmiths are fully licensed, insured, and background-checked for your peace of mind. We adhere to the highest standards of professionalism and ethics."
    }
  ];

  return (
    <>
      <CarLockoutHero />
      
      <section className="container mx-auto px-4 py-12">
        <EmergencyCallout />
        <ServiceTrustBadges />

        <ServiceMainContent 
          serviceName="Car Lockout"
          serviceCategory="Emergency Locksmith"
          mainContent={
            <>
              <div className="prose max-w-none">
                <h2>Professional Car Lockout Service</h2>
                <p>
                  Being locked out of your car can be a stressful and inconvenient experience. Whether you've lost your keys, 
                  left them inside the vehicle, or are dealing with a malfunctioning lock, our expert automotive locksmiths are 
                  available 24/7 to provide fast and reliable car lockout service.
                </p>
                
                <h3>Why Choose Our Car Lockout Service?</h3>
                <ul>
                  <li><strong>24/7 Availability:</strong> We're here to help you day or night, rain or shine. Our emergency 
                  locksmiths are always on call to respond to your car lockout needs.</li>
                  <li><strong>Fast Response Time:</strong> We understand that time is of the essence when you're locked out of 
                  your car. Our average response time is 15-30 minutes, depending on your location.</li>
                  <li><strong>Damage-Free Entry:</strong> Our skilled locksmiths use specialized tools and techniques to unlock 
                  your car without causing any damage to the locks, windows, or other components.</li>
                  <li><strong>Licensed and Insured:</strong> All our locksmiths are fully licensed, insured, and background-checked 
                  for your peace of mind.</li>
                  <li><strong>Upfront Pricing:</strong> We provide transparent and competitive pricing with no hidden fees. You'll 
                  know the cost of our service before we begin any work.</li>
                </ul>

                <h3>Our Car Lockout Process</h3>
                <ol>
                  <li><strong>Call Us:</strong> Contact us 24/7 with your location and vehicle information.</li>
                  <li><strong>Dispatch:</strong> We'll dispatch a skilled locksmith to your location immediately.</li>
                  <li><strong>Assessment:</strong> Our locksmith will assess the situation and determine the best method for unlocking your car.</li>
                  <li><strong>Unlocking:</strong> Using specialized tools, we'll unlock your car quickly and safely.</li>
                  <li><strong>Verification:</strong> We'll verify your identity and vehicle ownership before providing access.</li>
                </ol>

                <h3>Car Key Replacement</h3>
                <p>
                  In some cases, a car lockout may be due to lost or stolen keys. If you need a car key replacement, our 
                  automotive locksmiths can cut and program new keys for most vehicle makes and models. We can also provide 
                  transponder key programming, remote key replacement, and ignition repair services.
                </p>
              </div>
            </>
          }
        />

        <ServiceFAQSection faqs={faqs} />
      </section>
    </>
  );
};

export default CarLockoutServicePage;
