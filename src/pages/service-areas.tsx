
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const ServiceAreasPage = () => {
  return (
    <>
      <Helmet>
        <title>Local Locksmith Services | Expert Security Solutions Near You</title>
        <meta name="description" content="Professional locksmith expertise in North Bergen, Jersey City, Hoboken and surrounding areas. Local specialists who understand your neighborhood's security needs." />
        <link rel="canonical" href="https://247locksmithandsecurity.com/service-areas" />
      </Helmet>
      
      <PageLayout
        title="Service Areas"
        description="Professional locksmith expertise in North Bergen, Jersey City, Hoboken and surrounding areas. Local specialists who understand your neighborhood's security needs."
        heroTitle="Serving Your Community with Expert Locksmith Services"
        heroDescription="Our team of certified locksmiths provides fast, reliable service throughout North Bergen and the surrounding areas. We know your neighborhood and understand its unique security needs."
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceAreasSection />
        </motion.div>
      </PageLayout>
    </>
  );
};

export default ServiceAreasPage;
