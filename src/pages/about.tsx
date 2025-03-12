
import React from "react";
import PageHero from "@/components/layouts/PageHero";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import Testimonials from "@/components/about/Testimonials";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>About Our Expert Locksmiths | Your Trusted Security Partner</title>
        <meta name="description" content="Meet the certified professionals dedicated to protecting what matters most to you. Our locksmith expertise is backed by years of training and customer satisfaction." />
        <link rel="canonical" href="https://247locksmithandsecurity.com/about" />
      </Helmet>
      
      <PageHero 
        title="About Locksmith & Security LLC"
        description="Professional locksmith services with a commitment to quality, reliability, and customer satisfaction."
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-20"
        >
          <MissionVision />
          <CompanyStats />
          <CompanyValues />
          <CompanyFeatures />
          <Testimonials />
        </motion.div>
      </div>
    </main>
  );
};

export default About;
