import { Helmet } from "react-helmet";

const BusinessInfoTags = () => {
  return (
    <Helmet>
      <meta name="geo.region" content="US-NJ" />
      <meta name="geo.placename" content="North Bergen" />
      <meta name="geo.position" content="40.7995;-74.0246" />
      <meta name="ICBM" content="40.7995, -74.0246" />
      <meta name="business:contact_data:street_address" content="123 Main Street" />
      <meta name="business:contact_data:locality" content="North Bergen" />
      <meta name="business:contact_data:region" content="NJ" />
      <meta name="business:contact_data:postal_code" content="07047" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+15513037874" />
      <meta name="business:contact_data:website" content="https://247locksmithandsecurity.com" />
      <meta name="business:contact_data:email" content="info@247locksmithandsecurity.com" />
    </Helmet>
  );
};

export default BusinessInfoTags;