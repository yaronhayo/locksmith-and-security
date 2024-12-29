import { Suspense } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import LoadingSpinner from "@/components/LoadingSpinner";

const ServiceAreasPage = () => {
  return (
    <PageLayout
      title="Service Areas | Locksmith & Security LLC"
      description="Professional locksmith services available in North Bergen, Jersey City, Union City, and surrounding areas. Fast response times and reliable service."
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ServiceAreasSection />
      </Suspense>
    </PageLayout>
  );
};

export default ServiceAreasPage;