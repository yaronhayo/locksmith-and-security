
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";

const ServiceAreasPage = () => {
  return (
    <PageLayout
      title="Service Areas | Locksmith & Security LLC"
      description="Professional locksmith services available in North Bergen, Jersey City, Union City, and surrounding areas. Fast response times and reliable service."
      hideBreadcrumbs={false} // Let PageLayout handle breadcrumbs
    >
      <ServiceAreasSection />
    </PageLayout>
  );
};

export default ServiceAreasPage;
