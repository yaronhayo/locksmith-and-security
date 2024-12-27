import FooterLogo from './footer/FooterLogo';
import FooterContact from './footer/FooterContact';
import FooterLinks from './footer/FooterLinks';
import FooterHours from './footer/FooterHours';
import FooterCopyright from './footer/FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterLogo />
          <FooterContact />
          <FooterLinks />
          <FooterHours />
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;