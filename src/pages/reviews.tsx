import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Helmet } from "react-helmet";

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | Locksmith & Security LLC</title>
        <meta name="description" content="Read what our customers say about our locksmith services. Trusted by hundreds of satisfied clients in North Bergen and surrounding areas." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                Customer Reviews
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                See what our satisfied customers have to say
              </p>
            </div>
          </div>
          <ReviewsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReviewsPage;