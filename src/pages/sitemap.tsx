
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import { navItems } from "@/components/header/constants/navItems";

const Sitemap = () => {
  return (
    <PageLayout
      title="Sitemap | 24/7 Locksmith & Security Services"
      description="Complete sitemap of our locksmith services website. Find all pages and resources easily."
      heroTitle="Sitemap"
      heroDescription="Browse all pages and resources on our website"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Pages */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-primary hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-primary hover:underline">Contact</Link></li>
              <li><Link to="/reviews" className="text-primary hover:underline">Reviews</Link></li>
              <li><Link to="/faq" className="text-primary hover:underline">FAQ</Link></li>
              <li><Link to="/book-online" className="text-primary hover:underline">Book Online</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {navItems.find(item => item.path === "/services")?.children?.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-primary hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
            <ul className="space-y-2">
              {navItems.find(item => item.path === "/service-areas")?.children?.map((area, index) => (
                <li key={index}>
                  <Link to={area.path} className="text-primary hover:underline">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Legal Information</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sitemap;
