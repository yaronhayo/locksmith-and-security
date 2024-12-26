import FooterLinks from './footer/FooterLinks';
import FooterContact from './footer/FooterContact';
import FooterBottom from './footer/FooterBottom';

const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png"
              alt="Locksmith & Security LLC Logo"
              className="h-20 w-auto filter brightness-0 invert"
              width="180"
              height="180"
            />
            <p className="text-gray-300 text-base">
              Professional 24/7 locksmith services in North Bergen and surrounding areas. 
              Licensed, bonded, and insured for your peace of mind.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <FooterLinks />
            <FooterContact />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;