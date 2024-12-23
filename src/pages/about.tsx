import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Locksmith & Security LLC - Your Trusted Security Partner</title>
        <meta name="description" content="Learn about our professional locksmith services, our commitment to security, and why customers trust us for their residential and commercial needs." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                About Us
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                Your trusted local locksmith serving North Bergen since 2010
              </p>
            </div>
          </div>
          <AboutSection />
          <TrustBadgesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;