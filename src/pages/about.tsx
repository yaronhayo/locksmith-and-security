
import React from "react";
import PageHero from "@/components/layouts/PageHero";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="flex-grow">
      <PageHero 
        title="About Locksmith & Security LLC"
        description="Professional locksmith services with a commitment to quality, reliability, and customer satisfaction."
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MissionVision />
        <CompanyStats />
        <CompanyValues />
        <CompanyFeatures />
        <CompanyTimeline />
        <Testimonials />
        <ContactCTA />
      </motion.div>
    </main>
  );
};

export default About;
