
import PageLayout from "@/components/layouts/PageLayout";
import MissionVision from "@/components/about/MissionVision";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import CompanyStats from "@/components/about/CompanyStats";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";

const AboutPage = () => {
  return (
    <PageLayout
      title="About Us | Professional 24/7 Locksmith Services"
      description="Learn about our locksmith history, expertise, and commitment to providing reliable security solutions. Serving North Bergen and surrounding areas with 24/7 emergency services."
      heroTitle="About Our Locksmith Company"
      heroDescription="Committed to providing reliable security solutions since 2010"
      hideBreadcrumbs={false} // Explicitly set to false to show breadcrumbs in PageLayout
    >
      <div className="space-y-24 py-12">
        <MissionVision />
        <CompanyValues />
        <CompanyFeatures />
        <CompanyStats />
        <CompanyTimeline />
        <TeamSection />
        <Testimonials />
        <ContactCTA />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
