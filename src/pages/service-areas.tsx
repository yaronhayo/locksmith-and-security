import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import { Helmet } from "react-helmet";

const ServiceAreasPage = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas | Locksmith & Security LLC - North Bergen & Surrounding Areas</title>
        <meta name="description" content="Professional locksmith services available in North Bergen, Jersey City, Union City, and surrounding areas. Fast response times and reliable service." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                Service Areas
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                Serving North Bergen and surrounding communities with professional locksmith services
              </p>
            </div>
          </div>
          <ServiceAreasSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceAreasPage;