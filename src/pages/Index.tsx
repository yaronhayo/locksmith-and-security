import { useEffect } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HomeContent from "@/components/home/HomeContent";
import { getHomeMetadata } from "@/components/home/HomeMetadata";
import { setupPerformanceMonitoring } from "@/utils/performanceMonitoring";
import { checkAnalytics } from "@/utils/analytics";

const Index = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setupPerformanceMonitoring();
      checkAnalytics();
    }
  }, []);

  const metadata = getHomeMetadata();

  return (
    <PageLayout
      title={metadata.title}
      description={metadata.description}
      schema={metadata.schema}
      keywords={metadata.keywords}
      faqSchema={metadata.faqSchema}
      breadcrumbs={metadata.breadcrumbs}
      alternateLanguages={metadata.alternateLanguages}
      publishedTime="2024-01-01T00:00:00Z"
      modifiedTime={new Date().toISOString()}
      type="website"
    >
      <HomeContent />
    </PageLayout>
  );
};

export default Index;