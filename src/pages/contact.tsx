
import PageLayout from "@/components/layouts/PageLayout";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us"
      description="Need immediate assistance? Contact our 24/7 emergency locksmith service or fill out the form below, and we'll get back to you as soon as possible."
      heroTitle="Get in Touch"
      heroDescription="Locked out or need to upgrade your security? We're here to help you feel safe and secure."
      hideBreadcrumbs={false} // Let PageLayout handle breadcrumbs
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
