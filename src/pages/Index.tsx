
import HeroSection from "@/components/sections/HeroSection";
import HomeLayout from "@/components/layouts/HomeLayout";
import HomeContent from "@/components/sections/home/HomeContent";
import { useEffect } from "react";
import SEOManager from "@/components/meta/SEOManager";

const Index = () => {
  useEffect(() => {
    console.log("Home page viewed");
  }, []);

  const pageTitle = "Emergency Locksmith Services | North Bergen, NJ";
  const pageDescription = "24/7 locksmith services in North Bergen. Fast response for residential, commercial, and auto lockouts. Licensed & insured professionals.";
  const keywords = "locksmith north bergen, emergency locksmith, 24/7 locksmith, car lockout, house lockout, business lockout, key replacement, lock repair, security solutions";
  
  const homeBreadcrumbs = [
    { name: "Home", item: "/" }
  ];

  const homeFaqs = [
    {
      question: "What locksmith services do you offer?",
      answer: "We offer a comprehensive range of locksmith services including residential, commercial, and automotive locksmith solutions. This includes emergency lockouts, lock installation and repair, key cutting and duplication, master key systems, high-security locks, and more."
    },
    {
      question: "Are your locksmiths licensed and insured?",
      answer: "Yes, all our technicians are fully licensed, bonded, and insured professionals. We maintain all necessary certifications and stay up-to-date with the latest security technologies to provide the highest quality service."
    },
    {
      question: "Do you provide 24/7 emergency service?",
      answer: "Yes, we provide genuine 24/7 emergency locksmith services throughout North Bergen and surrounding areas. Whether you're locked out of your home, business, or vehicle at any hour, our emergency technicians are on call to help you regain access quickly and safely."
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "Our average response time is 15-30 minutes for emergency situations in North Bergen and nearby areas. We prioritize emergency lockouts and aim to provide the fastest possible response to get you back into your property or vehicle."
    },
    {
      question: "Do you service all types of locks?",
      answer: "Yes, we service all types of locks including traditional deadbolts, smart locks, high-security locks, keyless entry systems, mortise locks, and padlocks. Our technicians are experienced with all major brands including Schlage, Kwikset, Yale, Baldwin, and more."
    }
  ];

  return (
    <SEOManager
      pageType="home"
      title={pageTitle}
      description={pageDescription}
      canonicalUrl="/"
      keywords={keywords}
      breadcrumbs={homeBreadcrumbs}
      faqs={homeFaqs}
      modifiedDate={new Date().toISOString()}
    >
      <HomeLayout>
        <HeroSection />
        <HomeContent />
      </HomeLayout>
    </SEOManager>
  );
};

export default Index;
