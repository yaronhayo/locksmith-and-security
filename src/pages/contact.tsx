
import PageLayout from "@/components/layouts/PageLayout";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Our Security Experts | Professional Locksmith Solutions</title>
        <meta name="description" content="Connect with certified security specialists who can solve your locksmith needs. Direct access to experts who deliver guaranteed results for all security challenges." />
        <link rel="canonical" href="https://247locksmithandsecurity.com/contact" />
      </Helmet>
      
      <PageLayout
        title="Get in Touch"
        description="Locked out or need to upgrade your security? We're here to help you feel safe and secure."
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ContactPage;
