import ServiceAreaLayout from "@/components/service-areas/shared/ServiceAreaLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Locksmith Services in Guttenberg, NJ",
  "description": "Professional locksmith services in Guttenberg, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "+12017482070",
    "areaServed": {
      "@type": "City",
      "name": "Guttenberg",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7920",
      "longitude": "-74.0037"
    },
    "geoRadius": "5mi"
  }
};

const Guttenberg = () => {
  return (
    <ServiceAreaLayout
      title="Guttenberg Locksmith Services | 24/7 Emergency Locksmith"
      description="Professional locksmith services in Guttenberg, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and competitive rates."
      schema={schema}
      areaName="Guttenberg"
    />
  );
};

export default Guttenberg;