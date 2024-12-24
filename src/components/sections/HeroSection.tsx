import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-primary to-primary-hover py-4 md:py-8 flex items-center"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Locksmith & Security LLC</h1>
        <p className="text-lg md:text-xl text-white mb-8">Your trusted partner for all locksmith services in North Bergen, NJ.</p>
        <a href="/services" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary-hover transition-all duration-300">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
