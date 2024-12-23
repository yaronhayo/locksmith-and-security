import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Locksmith & Security LLC</title>
        <meta name="description" content="Find answers to common questions about our locksmith services, pricing, response times, and more. Available 24/7 for your security needs." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;